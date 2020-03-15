const obj1 = {
    key1: 1
}
const obj2 = {
    key1: 2
}

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


const mergeObjectsV3 = (obj1, obj2) => {
    const copy1 = {...obj1 };
    const copy2 = {...obj2 };

    const objCopy = Object.assign({}, copy2, copy1);

    return objCopy;
};

