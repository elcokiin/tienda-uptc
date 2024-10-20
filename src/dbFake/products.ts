// CREATE TABLE PRODUCTO(
//     id_producto INTEGER PRIMARY KEY,
//     nombre VARCHAR(50) NOT NULL,
//     unidad_medida VARCHAR(10) NOT NULL 
// );

type Product = {
    id_producto: number;
    nombre: string;
    unidad_medida: string; // kg', 'g', 'lt', 'ml', 'unit'
}

const products: Product[] = [
    { id_producto: 1, nombre: 'Leche', unidad_medida: 'lt' },
    { id_producto: 2, nombre: 'Pan', unidad_medida: 'unit' },
    { id_producto: 3, nombre: 'Azúcar', unidad_medida: 'kg' },
    { id_producto: 4, nombre: 'Aceite', unidad_medida: 'lt' },
    { id_producto: 5, nombre: 'Sal', unidad_medida: 'kg' },
    { id_producto: 6, nombre: 'Yogur', unidad_medida: 'unit' },
    { id_producto: 7, nombre: 'Huevos', unidad_medida: 'unit' },
    { id_producto: 8, nombre: 'Harina', unidad_medida: 'kg' },
    { id_producto: 9, nombre: 'Arroz', unidad_medida: 'kg' },
    { id_producto: 10, nombre: 'Pasta', unidad_medida: 'kg' },
    { id_producto: 11, nombre: 'Tomate', unidad_medida: 'kg' },
    { id_producto: 12, nombre: 'Cebolla', unidad_medida: 'kg' },
    { id_producto: 13, nombre: 'Pimiento', unidad_medida: 'kg' },
    { id_producto: 14, nombre: 'Carne', unidad_medida: 'kg' },
    { id_producto: 15, nombre: 'Pescado', unidad_medida: 'kg' },
    { id_producto: 16, nombre: 'Pollo', unidad_medida: 'kg' },
    { id_producto: 17, nombre: 'Cerdo', unidad_medida: 'kg' },
    { id_producto: 18, nombre: 'Ternera', unidad_medida: 'kg' },
    { id_producto: 19, nombre: 'Cordero', unidad_medida: 'kg' },
    { id_producto: 20, nombre: 'Cerveza', unidad_medida: 'lt' },
    { id_producto: 21, nombre: 'Vino', unidad_medida: 'lt' },
    { id_producto: 22, nombre: 'Refresco', unidad_medida: 'lt' },
    { id_producto: 23, nombre: 'Agua', unidad_medida: 'lt' },
    { id_producto: 24, nombre: 'Zumo', unidad_medida: 'lt' },
    { id_producto: 25, nombre: 'Café', unidad_medida: 'g' },
    { id_producto: 26, nombre: 'Té', unidad_medida: 'g' },
    { id_producto: 27, nombre: 'Chocolate', unidad_medida: 'g' },
    { id_producto: 28, nombre: 'Galletas', unidad_medida: 'g' },
    { id_producto: 29, nombre: 'Bizcocho', unidad_medida: 'g' },
    { id_producto: 30, nombre: 'Helado', unidad_medida: 'lt' }
]
