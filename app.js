// 1 Invocar express
const express= require('express');
const app = express();
const path = require('path');

// 2 Setear unrlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 3 Invocar a dotenv 
const dotenv = require('dotenv');
dotenv.config({ path: './src/Login/env/.env' });



// 4 Setear el directorio público
app.use('/resource', express.static('Login'));
app.use('/resource', express.static(path.join(__dirname, './src/Login')));
app.use('/resource', express.static(path.join(__dirname, 'src', 'Login')));


//5. Establecemos el motor de plantillas
app.set('view engine', 'ejs');
// Configura el directorio de vistas
app.set('views', path.join(__dirname, 'src', 'Login', 'views')); // Agrega esta línea
//6. Invocamos a bcryptjs
const bcrypt = require('bcryptjs');

//7. Var. de sesion
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));

//8 Invocar al módulo de conexión de la BD
const connection =require('./src/database/db'); 

//9 Estableciendo las rutas
app.get('/', (req, res) => {
    res.render('login',{msg:'Esto es un mensaje desde NODE'});
});
app.listen(3000, (req,response)=>{
    console.log('Server is running in  http://localhost:3000');
})