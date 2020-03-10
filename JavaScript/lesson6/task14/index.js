function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        let sum = 0;
        for (let el in arr) {
            sum += arr[el]
        }
        if (sum > 100) {
            return true;
        } else { return false; }
    }

}
console.log(checkSum([1, 2, 3, 4, 5, 600, 7]));