function squareArray(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * arr[i]);
    if (!Array.isArray(arr)) {
            return null;
        }
    }
    return array;
}