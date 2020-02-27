const splitText = (text, len) => {
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
            strArr.push((chunk[0].toUpperCase()) + chunk.slice(1));
            startPosition += 10;
        } else {
            strArr.push((chunk[0].toUpperCase()) + chunk.slice(1));
            startPosition += len;
        }

    }
    return strArr.join('\n');
}
console.log(splitText('21312412412512512522222222222'));