export default arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let newArr = arr.map(num => (Math.abs(num)) * (Math.abs(num)));
    return Math.min(...newArr);
}