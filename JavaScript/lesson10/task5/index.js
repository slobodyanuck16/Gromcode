let arr = [1,2,3,4,5,6,7];
const getTotalPrice = arr => {
    const sum = arr.reduce((cur, prev) => cur + prev)
    return '$' + Math.floor(sum * 100) / 100;
}