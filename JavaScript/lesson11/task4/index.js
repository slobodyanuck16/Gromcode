const str = '123.2323.2321.453';
const arg = '.'

function countOccurrences (str, arg) {
    if (arg === '') {
        return null;
    }
    const count = (str.split(arg).length - 1);
    return count;
}
console.log(countOccurrences(str, arg));
