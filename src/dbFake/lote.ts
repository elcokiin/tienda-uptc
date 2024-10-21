// CREATE TABLE LOTE(
//     id_lote INTEGER PRIMARY KEY,
//     fecha_entrada DATE NOT NULL
// );

type Lote = {
    id_lote: number;
    fecha_entrada: string;
}

export const lotes: Lote[] = [
    { id_lote: 1, fecha_entrada: '2021-01-01' },
    { id_lote: 2, fecha_entrada: '2021-01-02' },
    { id_lote: 3, fecha_entrada: '2021-01-03' },
    { id_lote: 4, fecha_entrada: '2021-01-04' },
    { id_lote: 5, fecha_entrada: '2021-01-05' },
    { id_lote: 6, fecha_entrada: '2021-01-06' },
    { id_lote: 7, fecha_entrada: '2021-01-07' },
    { id_lote: 8, fecha_entrada: '2021-01-08' },
    { id_lote: 9, fecha_entrada: '2021-01-09' },
    { id_lote: 10, fecha_entrada: '2021-01-10' }
]