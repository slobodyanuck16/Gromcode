function arrAverage (arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = arr.reduce(function(sum, num) {
        return (sum + num);
    });
    return result / arr.length;
}
console.log(arrAverage([2,5,6,3]));
