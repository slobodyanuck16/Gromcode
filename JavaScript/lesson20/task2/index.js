// function getOwnProps (obj) {
//     const arr = [];
//     arr.push(Object.keys(obj));
//     return arr;
// }
function getOwnProps (obj) {
    const arr = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
            arr.push(prop)
        }
    }
    return arr;
}

export {getOwnProps};