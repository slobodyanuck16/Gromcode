const arr = [1,2,3,4,5]
function swap (arr) {
    const [start, ...rest] = arr;
    return [...rest, start];
}