function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = [];
    for (let el of arr) {
        if (el % 2 === 0) {
            newArr.push(el + delta);
        }
    }
    return newArr;
}
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));