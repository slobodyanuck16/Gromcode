function reverseArray(arr) {
    let newArr = []
    if (Array.isArray(arr)) {
        newArr = arr.slice().reverse();
    } else {
        return null;
    }
    return newArr;
}
let arr = [4,2,1,2,7,9,0];
console.log(reverseArray(arr));