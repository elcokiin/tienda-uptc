// CREATE TABLE PRODUCTO_LOTE (
//     id_producto INTEGER,
//     id_lote INTEGER,
//     cantidad INTEGER NOT NULL,
//     valor_unitario FLOAT NOT NULL,
//     fecha_vencimiento DATE,
//     PRIMARY KEY (id_producto, id_lote)
// );

type ProductoLote = {
    id_producto: number;
    id_lote: number;
    cantidad: number;
    valor_unitario: number;
    fecha_vencimiento: string;
}

export const productosLotes: ProductoLote[] = [
    { id_producto: 1, id_lote: 1, cantidad: 100, valor_unitario: 1.5, fecha_vencimiento: '2021-01-31' },
    { id_producto: 1, id_lote: 2, cantidad: 200, valor_unitario: 1.5, fecha_vencimiento: '2021-02-28' },
    { id_producto: 1, id_lote: 8, cantidad: 800, valor_unitario: 1.5, fecha_vencimiento: '2021-08-31' },
    { id_producto: 1, id_lote: 9, cantidad: 900, valor_unitario: 1.5, fecha_vencimiento: '2021-09-30' },
    { id_producto: 1, id_lote: 10, cantidad: 1000, valor_unitario: 1.5, fecha_vencimiento: '2021-10-31' },
    { id_producto: 2, id_lote: 1, cantidad: 100, valor_unitario: 1.5, fecha_vencimiento: '2021-01-31' },
    { id_producto: 2, id_lote: 2, cantidad: 200, valor_unitario: 1.5, fecha_vencimiento: '2021-02-28' },
    { id_producto: 2, id_lote: 3, cantidad: 300, valor_unitario: 1.5, fecha_vencimiento: '2021-03-31' },
    { id_producto: 2, id_lote: 4, cantidad: 400, valor_unitario: 1.5, fecha_vencimiento: '2021-04-30' },
    { id_producto: 2, id_lote: 5, cantidad: 500, valor_unitario: 1.5, fecha_vencimiento: '2021-05-31' },
    { id_producto: 2, id_lote: 6, cantidad: 600, valor_unitario: 1.5, fecha_vencimiento: '2021-06-30' },
    { id_producto: 2, id_lote: 7, cantidad: 700, valor_unitario: 1.5, fecha_vencimiento: '2021-07-31' },
    { id_producto: 2, id_lote: 8, cantidad: 800, valor_unitario: 1.5, fecha_vencimiento: '2021-08-31' },
    { id_producto: 2, id_lote: 9, cantidad: 900, valor_unitario: 1.5, fecha_vencimiento: '2021-09-30' },
    { id_producto: 2, id_lote: 10, cantidad: 1000, valor_unitario: 1.5, fecha_vencimiento: '2021-10-31' },
    { id_producto: 3, id_lote: 1, cantidad: 100, valor_unitario: 1.5, fecha_vencimiento: '2021-01-31' },
    { id_producto: 3, id_lote: 2, cantidad: 200, valor_unitario: 1.5, fecha_vencimiento: '2021-02-28' },
    { id_producto: 3, id_lote: 3, cantidad: 300, valor_unitario: 1.5, fecha_vencimiento: '2021-03-31' },
    { id_producto: 1, id_lote: 7, cantidad: 700, valor_unitario: 1.5, fecha_vencimiento: '2021-07-31' },
    { id_producto: 3, id_lote: 4, cantidad: 400, valor_unitario: 1.5, fecha_vencimiento: '2021-04-30' },
    { id_producto: 4, id_lote: 4, cantidad: 200, valor_unitario: 2000, fecha_vencimiento: '2021-04-30' },
    { id_producto: 5, id_lote: 8, cantidad: 300, valor_unitario: 6000, fecha_vencimiento: '2021-04-30' },
    { id_producto: 6, id_lote: 2, cantidad: 120, valor_unitario: 10000, fecha_vencimiento: '2021-06-30' },
    { id_producto: 7, id_lote: 3, cantidad: 150, valor_unitario: 5000, fecha_vencimiento: '2021-07-31' },
    { id_producto: 8, id_lote: 4, cantidad: 180, valor_unitario: 4000, fecha_vencimiento: '2021-08-31' },
    { id_producto: 9, id_lote: 5, cantidad: 210, valor_unitario: 3000, fecha_vencimiento: '2021-09-30' },
    { id_producto: 10, id_lote: 6, cantidad: 240, valor_unitario: 2000, fecha_vencimiento: '2021-10-31' },
    { id_producto: 11, id_lote: 7, cantidad: 270, valor_unitario: 1000, fecha_vencimiento: '2021-11-30' },
    { id_producto: 12, id_lote: 8, cantidad: 300, valor_unitario: 500, fecha_vencimiento: '2021-12-31' },
    { id_producto: 13, id_lote: 9, cantidad: 330, valor_unitario: 250, fecha_vencimiento: '2022-01-31' },
    { id_producto: 14, id_lote: 10, cantidad: 360, valor_unitario: 100, fecha_vencimiento: '2022-02-28' },
    { id_producto: 15, id_lote: 1, cantidad: 390, valor_unitario: 50, fecha_vencimiento: '2022-03-31' },
    { id_producto: 16, id_lote: 2, cantidad: 420, valor_unitario: 25, fecha_vencimiento: '2022-04-30' },
    { id_producto: 17, id_lote: 3, cantidad: 450, valor_unitario: 10, fecha_vencimiento: '2022-05-31' },
    { id_producto: 18, id_lote: 4, cantidad: 480, valor_unitario: 5, fecha_vencimiento: '2022-06-30' },
]