// const splitString = (text, len) => {
//     const strArr = [];
    
//     if (text === !(String)) {
//         return null;
//     }
//     let startPosition = 0;
//     while (true) {

//         let chunk = text.substr(startPosition, len);
//         if (chunk.length === 0) {
//             break;
//         }
//         if (len === undefined) {
//             strArr.push(chunk.slice(0));
//             startPosition += 10;
//         } else {
//             strArr.push(chunk.slice(0));
//             startPosition += len;
//         }
//     }

//     return strArr;
// }
// console.log(splitString('asvsadsafsagsagsafsa',4));
const splitString = (str, num = 10) => {

    if (typeof str !== 'string') return null;

    const resultArray = [];
    let startPosition = 0;

    while (true) {
        let chank = str.substr(startPosition, num);
        if (chank.length === 0) break;
        if (chank.length < num) {
            chank = chank + '.'.repeat(num - chank.length);
        }
        resultArray.push(chank);
        startPosition += num;
    }

    return resultArray;
}
