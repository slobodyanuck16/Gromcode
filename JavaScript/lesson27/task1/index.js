const getLocalStorageData = () => {
    return Object.defineProperties(localStorage)
    .reduce((acc, [key, value]) => {
        let newValue;
        try {
            newValue = JSON.parse(value);
        } catch(e) {
            newValue = value;
        }
        return {
            ...acc, 
            [key]: newValue,
        };
    }, {});
}

export {getLocalStorageData}