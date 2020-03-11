function sum (arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = arr.reduce(function(sum, num) {
        return sum + num;
    });
    return result;
}
console.log(sum([2,5,6,3,0,3,-1]));
