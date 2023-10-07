//Example case
export function capitalizeFirstLetter(string) {
    return string.chartAt(0).toUpperCase() + string.slice(1);
}

export function isStringEmpty(str) {
    return (!str || str.length === 0);
}