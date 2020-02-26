const getMaxAbsoluteNumber = arr => {
    const absoluteValues = arr
        .map(num => Math.abs(num));
        if (!Array.isArray(arr) || arr.lenght === 0) {
            return null;
        }
    const max = Math.max(...absoluteValues);
    return max;
}