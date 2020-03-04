function createArrayOfFunctions(num) {
    let numArr = [];
    numArr.length = num;
    console.log(numArr);
    
    function arrFunction(numArr) {
        for (let i = 0; i < num; i++) {
            numArr[i] = function() {
                return i;
            }
        }
        console.log(numArr);
        // return arrFunction(numArr[num]);
    }
    return arrFunction(numArr);
}
console.log(createArrayOfFunctions(5));