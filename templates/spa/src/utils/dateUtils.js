//Example case
export function formatDate(date, formatString = 'YYYY-MM-DD') {

    // Format a given date based on formatString
    // Implementation can use libraries like 'date-fns' or 'moment'
    // For simplicity, we'll return a basic format here:

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}