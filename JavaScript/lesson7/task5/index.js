// function squareArray (arr) {
//     arr.map(num => arr[num] * arr[num]);
//     return arr;
// }
// const arr = [2, 4, 5, 6, 7];
// console.log(squareArray(arr));

const squareArray = numbers => {
    let array = [];
    numbers.slice().filter(num => {
        if (Array.isArray(arr)) {
            array.push(num * num);
        } else {
            return null;
        }
    });
    return array;
}
const arr = [2, 4, 5, 6, 7];
console.log(squareArray(arr));