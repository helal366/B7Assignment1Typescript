"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenNumbers(arr) {
    const evenArr = arr.filter((num) => num % 2 === 0);
    return evenArr;
}
;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterEvenNumbers(arr));
//# sourceMappingURL=solutions.js.map