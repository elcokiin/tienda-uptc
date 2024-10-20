import { createClock, createDate } from './date.js'
import { generateBillIdentificator } from './utils.js'

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