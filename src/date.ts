const FORMAT_TIME = 'es-CO'

export function clock(): string {
    const now: Date = new Date()
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    const time: string = new Intl.DateTimeFormat(FORMAT_TIME, options).format(now)
    

    return time
}

export function createClock(): HTMLElement {
    const time = clock()
    const c = document.createElement('p')
    c.textContent = time
    return c
}

export function date(): string {
    const now: Date = new Date()
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const date: string = new Intl.DateTimeFormat(FORMAT_TIME, options).format(now)

    return date
}

export function createDate(): HTMLElement {
    const dateElement = document.createElement('p')
    dateElement.textContent = date()

    return dateElement
}
