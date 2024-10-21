import { products } from '../dbFake/producto.js'
import { productosLotes as pL } from '../dbFake/productoLote.js';

export type typeProduct = {
    id_producto: number;
    nombre: string;
    unidad_medida: string; // kg', 'g', 'lt', 'ml', 'unit'
}

export type typeLoteProduct = {
    id_lote: number;
    id_producto: number;
    fecha_vencimiento: string;
    valor_unitario: number;
    cantidad?: number;
}

let productosLotes: typeLoteProduct[] = pL

export function getProducts(): typeProduct[] {
    return products;
}

export function getProduct(id_producto: number): typeProduct | undefined {
    return products.find(product => product.id_producto === id_producto);
}

export function getProductByName(nombre: string): typeProduct | undefined {
    // remove accents and special characters and convert to lowercase
    nombre = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

    return products.find(product => {
        // remove accents and special characters and convert to lowercase
        let product_name = product.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return product_name === nombre
    })
}

export function getProductsByLote(id_lote: number): typeProduct[] {
    const productsLote = productosLotes.filter(productoLote => productoLote.id_lote === id_lote)
    const productsId = productsLote.map(productoLote => productoLote.id_producto)
    return products.filter(product => productsId.includes(product.id_producto))
}

export function getProductsDontRepeat(): typeProduct[] {
    return products.filter((product, index, self) => self.findIndex(p => p.id_producto === product.id_producto) === index)
}

export function getLoteByProduct(id_product: number): typeLoteProduct | undefined {
    return productosLotes.find(productoLote => productoLote.id_producto === id_product);
}

export function getLotesByProduct(id_product: number): typeLoteProduct[] {
    return productosLotes.filter(productoLote => productoLote.id_producto === id_product)
}

// get product by id_lote depending on which expiration date is closer
export function getProductByExpirationDate(id_product: number): typeProduct | undefined {
    const productsLote = productosLotes.filter(productoLote => productoLote.id_producto === id_product)
    
    if (productsLote.length === 0) {
        return undefined;
    }

    // Find the product lote with the closest expiration date
    const closestProductLote = productsLote.reduce((closest, current) => {
        return new Date(current.fecha_vencimiento) < new Date(closest.fecha_vencimiento) ? current : closest;
    })

    return products.find(product => product.id_producto === closestProductLote.id_producto);
}

// same before, but with name of the product
export function getProductByExpirationDateByName(nombre: string): typeProduct | undefined {
    const product = getProductByName(nombre)
    if (product) {
        return getProductByExpirationDate(product.id_producto)
    }
    return undefined
}

export function modifyProductLote(id_producto: number, id_lote: number, cantidad: number): void {
    const productLote = productosLotes.find(productoLote => productoLote.id_producto === id_producto && productoLote.id_lote === id_lote)
    if (productLote) {
        if (productLote.cantidad !== undefined) {
            productLote.cantidad -= cantidad;
        }
    }
    // eliminar el producto lote que acabo de modificar y colocar el nuevo productLote en productosLotes
    productosLotes = productosLotes.filter(productoLote => productoLote.id_producto !== id_producto || productoLote.id_lote !== id_lote)
    if (productLote) {
        productosLotes.push(productLote)
    }
    console.log(productosLotes)
}