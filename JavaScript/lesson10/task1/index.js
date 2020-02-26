function getFiniteNumbers (arr) {
    const newArr = Number.isFinite(arr);
    return newArr;
}
function getFiniteNumbersV2 (arr) {
    const newArr = isFinite(arr);
    return newArr;
}
function getNaN (arr) {
    const newArr = Number.isNaN(arr);
    return newArr;
}
function getNaNV2 (arr) {
    const newArr = isNaN(arr);
    return newArr;
}
function getIntegers (arr) {
    const newArr = Number.isInteger(arr);
    return newArr;
}
console.log(Number.isNan(arr) == isNaN(arr));
console.log(Number.isFinite(arr) == isFinite(arr));
