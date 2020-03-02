export function squareArray(arr) {
    let newArr = [];
    if (Array.isArray(arr)) {
        newArr = arr.map(num => num * num)
    } else {
        return null;
    }
    return newArr;
}
const arr = [2, 4, 5, 6, 7];
console.log(squareArray(arr));