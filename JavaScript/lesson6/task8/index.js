function uniqueCount(array) {
    let uniqArray = [];
    for (let i = 0; i < array.length; i++) {
        let uniq = false;
        for (let j = 0; j < uniqArray.length; j++) {
            if (array[i] === uniqArray[j]) {
                uniq = true;
            }
        }
        if (uniq == false) {
            uniqArray.push(array[i]);
        }
    }
    console.log(uniqArray);

    return uniqArray;
}
console.log(uniqueCount([1,1,1,1,1,2,2,2,2,2,3,3,33,4,4,4,4,5,5,5,6,6]))