function getOwnProps (obj) {
    const arr = [];
    arr.push(Object.keys(obj));
    return arr;
}

export {getOwnProps};