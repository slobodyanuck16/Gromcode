const mergeObjectsV1 = (obj1, obj2) =>
    Object.assign({}, obj1, obj2);

const mergeObjectsV2 = (obj1, obj2) =>
    Object.assign({}, obj2, obj1);

const mergeObjectsV3 = (obj1, obj2) => {
    const copy1 = {...obj1 };
    const copy2 = {...obj2 };

    const objCopy = Object.assign({}, copy1, copy2);

    return objCopy;
};


function mergeObjectsV4(obj1, obj2) {
    const newObj = Object.assign({}, ...obj2, ...obj1);
    return newObj;
}