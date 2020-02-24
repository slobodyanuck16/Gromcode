let array = [1,1,1,1,1,2,2,2,2,2,3,3,33,4,4,4,4,5,5,5,6,6]
function removeDuplicates (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let uniq = false;
        for (let j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) {
                uniq = true;
            }
        }
        if (uniq == false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}