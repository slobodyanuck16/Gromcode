const splitString = (text, len) => {
    const strArr = [];
    
    if (text === !(String)) {
        return null;
    }
    let startPosition = 0;
    while (true) {

        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        if (len === undefined) {
            strArr.push(chunk.slice(0));
            startPosition += 10;
        } else {
            strArr.push(chunk.slice(0));
            startPosition += len;
        }
    }

    return strArr;
}
console.log(splitString('asvsadsafsagsagsafsa',4));