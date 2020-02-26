function getParsedIntegers (arr) {
    const newArr = Number.parseInt(arr);
    return newArr;
}
function getParsedIntegersV2 (arr) {
    const newArr = parseInt(arr);
    return newArr;
}
function getParsedFloats (arr) {
    const newArr = Number.parseFloat(arr);
    return newArr;
}
function getParsedFloatsV2 (arr) {
    const newArr = parseFloat(arr);
    return newArr;
}
console.log(Number.parseInt(arr) == parseInt(arr));
console.log(Number.parseFloat(arr) == parseFloat(arr));