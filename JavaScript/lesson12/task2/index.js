let str ='asdafasfaf';
function reverseString(str) {
    if (typeof str !== 'string') return null;
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}