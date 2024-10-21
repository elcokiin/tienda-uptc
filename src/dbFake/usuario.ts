// CREATE TABLE USUARIO (
//     login INTEGER PRIMARY KEY,
//     clave CHAR(64) NOT NULL,
//     tipo CHAR(1), Tipo 'A' para administrador, 'C' para cliente, 'E' para empleado
//     documento INTEGER
// );

type Usuario = {
    login: number;
    clave: string;
    tipo: string;
    documento: number;
}

const usuarios: Usuario[] = [
    {
        login: 1234567890,
        clave: '1234567890',
        tipo: 'A',
        documento: 1234567890
    },
    {
        login: 9876543210,
        clave: '9876543210',
        tipo: 'C',
        documento: 9876543210
    },
    {
        login: 1357924680,
        clave: '1357924680',
        tipo: 'E',
        documento: 1357924680
    },
    {
        login: 2468013579,
        clave: '2468013579',
        tipo: 'E',
        documento: 2468013579
    }
]