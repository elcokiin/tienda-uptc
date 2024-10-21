const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'uptc_store',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
    const sentUsertipoDoc = req.body.UsertipoDoc;
    const sentUsernumDoc = req.body.UsernumDoc;
    const sentUserName = req.body.UserName;
    const sentUserLastName = req.body.UserLastName;
    const sentEmail = req.body.Email;
    const sentDireccion = req.body.Direccion;
    const sentTelefono = req.body.Telefono;
    const sentPassword = req.body.Password;
    const username = `${sentUserName}${sentUserLastName}`; 

    // Iniciar transacción
    db.beginTransaction((err) => {
        if (err) {
            console.error('Error starting transaction:', err);
            return res.status(500).send({ error: 'Error al iniciar la transacción' });
        }

        // SQL para insertar en la tabla 'persona'
        const SQL = 'INSERT INTO persona (documento, tipo_documento, nombres, apellidos, email, direccion, telefono) VALUES (?,?,?,?,?,?,?)';
        const personaValues = [sentUsernumDoc, sentUsertipoDoc, sentUserName, sentUserLastName, sentEmail, sentDireccion, sentTelefono];

        db.query(SQL, personaValues, (err, results) => {
            if (err) {
                return db.rollback(() => {
                    console.error('Error inserting person:', err);
                    return res.status(500).send({ error: 'Error al registrar la persona' });
                });
            }

            // SQL para insertar en la tabla 'usuario'
            const sqlUsuario = 'INSERT INTO usuario (login, clave, documento,tipo) VALUES (?,?,?,?)';
            const usuarioValues = [username, sentPassword, sentUsernumDoc,'U'];

            db.query(sqlUsuario, usuarioValues, (err, results) => {
                if (err) {
                    return db.rollback(() => {
                        console.error('Error inserting user:', err);
                        return res.status(500).send({ error: 'Error al registrar el usuario' });
                    });
                }

                // Commit de la transacción
                db.commit((err) => {
                    if (err) {
                        return db.rollback(() => {
                            console.error('Error committing transaction:', err);
                            return res.status(500).send({ error: 'Error al confirmar la transacción' });
                        });
                    }
                   
                    console.log('Usuario y persona agregados exitosamente');
                    res.status(200).send({ message: '¡Usuario registrado exitosamente!',username });
                });
            });
        });
    });
});

app.post('/login', (req, res) => {
    const sentUserLoginName = req.body.UserloginName;
    const sentUserPassword = req.body.UserPassword;

    const SQL = 'SELECT * FROM usuario WHERE login = ? AND clave = ?';
    const values = [sentUserLoginName, sentUserPassword];

    db.query(SQL, values, (err, results) => {
        if (err) {
            console.error('Error ingresando user:', err);
            res.send({ error: err });
        }
        if (results.length > 0) {
            res.send(results);
        } else {
            res.send({ message: 'El usuario y la contraseña ingresados no coinciden' });
        }
    });
});
