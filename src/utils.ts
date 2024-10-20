/**
 * Generates a unique bill number based on the current timestamp.
 * The bill number is a base-36 encoded string of the current time,
 * truncated to 10 characters and converted to uppercase.
 *
 * @returns {string} The generated bill number.
 */
export function generateBillIdentificator(): string {
    const base36: string = new Date().getTime().toString(36)
    return base36.substring(0, 20).toUpperCase()
}