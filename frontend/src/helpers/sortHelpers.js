import { getFirstPartOfClass } from './substring'

export function compare(property) {
    if (property === "id") {
        return function (a, b) {
            return +a[property] - +b[property];
        }
    }
    return compareStrings(property)
} 

function compareStrings(string) {
    return function (a, b) {
        const toBeCompared1 = a[string].toLowerCase();
        const toBeCompared2 = b[string].toLowerCase();

        let comparison = 0;

        if (toBeCompared1 > toBeCompared2) {
            comparison = 1;
        } else if (toBeCompared1 < toBeCompared2) {
            comparison = -1;
        }
        return comparison;
    }
}

export function compareClasses() {
    const classesSortedBySecondPart = compareStrings();
    return compareFirstPartOfClassName(classesSortedBySecondPart);
}

function compareFirstPartOfClassName() {
    return function (a, b) {
        const toBeCompared1 = +getFirstPartOfClass(a); 
        const toBeCompared2 = +getFirstPartOfClass(b); 

        return toBeCompared1 - toBeCompared2;
    }
}