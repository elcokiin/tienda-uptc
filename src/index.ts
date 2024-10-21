import { createClock, createDate } from './date.js'
import { generateBillIdentificator } from './utils.js'


import { getClient } from './db/dbClient.js'
import {
        getProductByExpirationDateByName as getProductByName, 
        getProductByExpirationDate as getProduct,
        getProductsDontRepeat as getProducts,
        getLoteByProduct,
        getLotesByProduct,
        modifyProductLote,
        typeProduct
    } from './db/dbProduct.js'

/**
 * Updates the text content of the HTML element with the ID 'bill-identification-clock'
 * to display the current time. This function is intended to be called at regular intervals
 * to keep the displayed time up-to-date.
 */
function intervalClock(): void {
    const elementClock: HTMLElement | null = document.getElementById('bill-identification-clock')
    if (elementClock) {
        elementClock.textContent = createClock().textContent
    }
}

const elementBillIdentification: HTMLElement | null = document.getElementById('bill-identification-number')
if (elementBillIdentification) {
    elementBillIdentification.textContent = generateBillIdentificator()
}

const elementDate: HTMLElement | null = document.getElementById('bill-identification-date')
intervalClock()
setInterval(intervalClock, 1000)
if(elementDate) {
    elementDate.textContent = createDate().textContent
}

// search client action button
const searchClientButton: HTMLElement | null = document.getElementById('search-client')
const searchClientInput: HTMLInputElement | null = document.getElementById('input-document-client') as HTMLInputElement
const searchClientResult: HTMLElement | null = document.getElementById('client-data')

if (searchClientButton) {
    searchClientButton.addEventListener('click', () => {
        if (searchClientInput && searchClientResult) {
            searchClientResult.innerHTML = ''
            const clientDocument: number = parseInt(searchClientInput.value)
            const client = getClient(clientDocument)
            if (client) {
                // create element p with client data
                const clientElement = document.createElement('p')
                const clientText = document.createElement('span')
                clientText.textContent = 'Cliente encontrado: '
                clientElement.classList.add('bold')
                clientElement.textContent = `${client.nombres} ${client.apellidos}`
                searchClientResult.appendChild(clientText)
                searchClientResult.appendChild(clientElement)
            } else {
                const clientElement = document.createElement('p')
                clientElement.classList.add('bold')
                clientElement.classList.add('warning')
                clientElement.textContent = `Cliente con documento ${clientDocument} no encontrado`
                searchClientResult.appendChild(clientElement)
            }
        }
    })
}


// search product action change value of input
const containerProductsSuggestion: HTMLElement | null = document.getElementById('products-search__container')
const inputProduct: HTMLInputElement | null = document.getElementById('bill-product__input') as HTMLInputElement
const inputQuantity: HTMLInputElement | null = document.getElementById('bill-product__quantity') as HTMLInputElement
const buttonAddProduct: HTMLButtonElement | null = document.getElementById('bill-product__add') as HTMLButtonElement
const containerNameProduct: HTMLElement | null = document.getElementById('bill-product__name')
const labelQuatityProduct: HTMLElement | null = document.getElementById('label-quantity')
const unitProduct: HTMLElement | null = document.getElementById('unit-product')
const paymentAmount: HTMLInputElement | null = document.getElementById('payment-amount') as HTMLInputElement

// first add all products to the container. Then with inputProduct change, filter the products by name, and id of the product
if (unitProduct && containerProductsSuggestion && inputProduct && inputQuantity && buttonAddProduct && containerNameProduct && labelQuatityProduct) {
    inputProduct.addEventListener('focus', () => {
        containerProductsSuggestion.classList.add('visible')
      })
      
      // Ocultar el contenedor con retardo de 1 segundo cuando el input pierde el foco
      inputProduct.addEventListener('blur', () => {
        setTimeout(() => {
          containerProductsSuggestion.classList.remove('visible')
        }, 500)  // 1000 milisegundos = 1 segundo
      })

    const products = getProducts()
    products.forEach(product => {
        const productLote = getLoteByProduct(product.id_producto)
        const productElement = document.createElement('li')
        const productName = document.createElement('span')
        const productPrice = document.createElement('span')
        productName.textContent = product.nombre
        productPrice.textContent = productLote ? `$${productLote.valor_unitario}` : ''
    
        productElement.classList.add('product-suggestion')
        productElement.appendChild(productName)
        productElement.appendChild(productPrice)

        productElement.addEventListener('click', () => {
            inputQuantity.disabled = false
            labelQuatityProduct.classList.remove('bill-input-quantity__disabled')
            buttonAddProduct.disabled = false
            containerNameProduct.textContent = `Producto: `
            const spanProductName = document.createElement('span')
            spanProductName.textContent = product.nombre
            unitProduct.textContent = product.unidad_medida
            containerNameProduct.appendChild(spanProductName)
            spanProductName.classList.add('bold')
            inputProduct.value = product.nombre
            inputProduct.setAttribute('data-product-id', product.id_producto.toString())
            containerProductsSuggestion.innerHTML = ''
        })
        containerProductsSuggestion.appendChild(productElement)
    })

    inputProduct.addEventListener('input', () => {
        containerProductsSuggestion.classList.add('visible')
        containerProductsSuggestion.innerHTML = '';
        const productName = inputProduct.value;
        const products = getProducts();
        products.forEach(product => {
            if (product.nombre.toLowerCase().includes(productName.toLowerCase())) {
                const productLote = getLoteByProduct(product.id_producto);

                const productElement = document.createElement('li');
                const productNameElement = document.createElement('span');
                const productPrice = document.createElement('span');

                productElement.classList.add('product-suggestion');
                productNameElement.textContent = product.nombre;
                productPrice.textContent = productLote ? `$${productLote.valor_unitario}` : '';
                productElement.appendChild(productNameElement);
                productElement.appendChild(productPrice);

                // Añadir evento de clic a la sugerencia de producto
                productElement.addEventListener('click', () => {
                    inputQuantity.disabled = false
                    labelQuatityProduct.classList.remove('bill-input-quantity__disabled')
                    buttonAddProduct.disabled = false
                    containerNameProduct.textContent = `Producto: `
                    const spanProductName = document.createElement('span')
                    spanProductName.textContent = product.nombre
                    unitProduct.textContent = product.unidad_medida
                    containerNameProduct.appendChild(spanProductName)
                    spanProductName.classList.add('bold')
                    inputProduct.value = product.nombre
                    containerProductsSuggestion.innerHTML = ''
                });

                containerProductsSuggestion.appendChild(productElement);
            }
        });
    });

    
    // tabla de productos
    type typeProductTable = {
        nombre: string;
        unidad: string;
        cantidad: number;
        valorUnitario: number;
        valorTotal: number;
    }

    const tableProducts: typeProductTable[] = []

    function addToTableProducts(inputProduct: HTMLInputElement, inputQuantity: HTMLInputElement): typeProductTable | null {
        const product = getProductByName(inputProduct.value as string)
        // comprobar que la cantidad de producto es menor a la cantidad en todos los lotes en el que aparesca ese producto y luego modificar la cantidad de ese producto en el lote con la fecha de vencimiento más proxima
        const quantity = parseInt(inputQuantity.value)
        if(product) {
            const productLotes = getLotesByProduct(product.id_producto)
            const totalQuantity = productLotes.reduce((total, productLote) => total + (productLote.cantidad ?? 0), 0)
            console.log(totalQuantity)
            if (quantity <= totalQuantity) {
                const productData = getProduct(product.id_producto)
                if (productData) {
                    const tableProduct: typeProductTable = {
                        nombre: product.nombre,
                        unidad: product.unidad_medida,
                        cantidad: quantity,
                        valorUnitario: getLoteByProduct(productData.id_producto)?.valor_unitario ?? 0,
                        valorTotal: (getLoteByProduct(productData.id_producto)?.valor_unitario ?? 0) * quantity
                    }
                    tableProducts.push(tableProduct)
                    return tableProduct
                } else {
                    alert('Error: Producto no encontrado.')
                    return null
                }
            } else {
                alert('No hay suficiente cantidad de producto en el inventario')
                return null
            }
        }
        return null
    }

    function updateSubTotal() {
        const subTotalElement = document.getElementById('subtotal')
        if (subTotalElement) {
            const subTotal = tableProducts.reduce((total, product) => total + product.valorTotal, 0)
            // add to subTotal the points of the thousands
            const subTotalString = subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            subTotalElement.textContent = `$${subTotalString}`
        }
    }

    function updateCountColumn() {
        const tableProductsElement = document.getElementById('table-products')
        if (tableProductsElement) {
            const rows = tableProductsElement.getElementsByTagName('tr')
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i]
                const number = row.getElementsByTagName('td')[0]
                if (number) {
                    number.textContent = (i + 1).toString()
                }
            }
        }
    }

    function fullCountPay() {
        const countPayElement = document.getElementById('count-pay')
        const subTotal = document.getElementById('subtotal')
        const iva: HTMLInputElement | null = document.getElementById('iva') as HTMLInputElement
        const discount: HTMLInputElement = document.getElementById('discount') as HTMLInputElement

        if (countPayElement && subTotal && iva && discount) {
            const subTotalNumber = parseInt(subTotal.textContent?.replace(/,/g, '').replace('$', '') ?? '0')
            const ivaNumber = subTotalNumber * (parseInt(iva.value)/100)
            const discountNumber = subTotalNumber * (parseInt(discount.value)/100)
            const total = subTotalNumber + ivaNumber - discountNumber
            // coloca el total en formato de miles
            const totalString = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            countPayElement.textContent = `$${totalString}`
        }
    }

    function createTable(productAdded: typeProductTable | null) {
        const tableProductsElement = document.getElementById('table-products')
        if (productAdded && tableProductsElement) {
            if(tableProducts.length === 1) {
                tableProductsElement.innerHTML = ''
            }
            const row = document.createElement('tr')
            const number = document.createElement('td')
            const name = document.createElement('td')
            const unit = document.createElement('td')
            const quantity = document.createElement('td')
            const valueUnit = document.createElement('td')
            const valueTotal = document.createElement('td')
            const deleteButton = document.createElement('td')
            const deleteButtonElement = document.createElement('button')

            name.textContent = productAdded.nombre
            unit.textContent = productAdded.unidad
            quantity.textContent = productAdded.cantidad.toString()
            valueUnit.textContent = `$${productAdded.valorUnitario}`
            valueTotal.textContent = `$${productAdded.valorTotal}`
            deleteButtonElement.textContent = 'x'
            deleteButtonElement.classList.add('delete-button')
            deleteButtonElement.addEventListener('click', () => {
                tableProducts.splice(tableProducts.length - 1, 1)
                row.remove()
                updateSubTotal()
                updateCountColumn()
                fullCountPay()
            })

            deleteButton.appendChild(deleteButtonElement)
            row.appendChild(number)
            row.appendChild(name)
            row.appendChild(unit)
            row.appendChild(quantity)
            row.appendChild(valueUnit)
            row.appendChild(valueTotal)
            row.appendChild(deleteButton)

            tableProductsElement.appendChild(row)
        }
    }

    buttonAddProduct.addEventListener('click', () => {
        const productAdded = addToTableProducts(inputProduct, inputQuantity)
        updateSubTotal()
        createTable(productAdded)
        updateCountColumn()
        fullCountPay()
    })

    paymentAmount.addEventListener('input', (e) => {
        if(e.target && (e.target as HTMLInputElement).value) {
            const countPay = document.getElementById('count-pay')
            const paymentAmountNumber = parseInt(paymentAmount.value.replace(/,/g, '').replace('$', '') ?? '0')
            const countPayNumber = parseInt(countPay?.textContent?.replace(/,/g, '').replace('$', '') ?? '0')
            const change = paymentAmountNumber - countPayNumber
            const changeElement = document.getElementById('change-amount')
            if (changeElement) {
                const changeString = change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                changeElement.textContent = `$${changeString}`
            }    
        } else {
            const changeElement = document.getElementById('change-amount')
            if (changeElement) {
                changeElement.textContent = ''
            }
        }
    })
}


