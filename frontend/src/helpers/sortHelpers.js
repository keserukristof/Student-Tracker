export function compareStrings(property) {
    if (property === "id") {
        return function (a, b) {
            return +a[property] - +b[property];
        }
    }
    return function (a, b) {
        const toBeCompared1 = a[property].toLowerCase();
        const toBeCompared2 = b[property].toLowerCase();

        let comparison = 0;

        if (toBeCompared1 > toBeCompared2) {
            comparison = 1;
        } else if (toBeCompared1 < toBeCompared2) {
            comparison = -1;
        }
        return comparison;
    }
} 