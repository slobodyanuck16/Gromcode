const squareArray = numbers => {
    let array = [];
    
    function checkArray(num) {
        if (Array.isArray(arr)) {
            array.push(num * num);
        }
        else { return null }
    }
    numbers.forEach(checkArray);
        return array;
}
const arr = [2,4,5,6,7];
console.log(squareArray(arr));
