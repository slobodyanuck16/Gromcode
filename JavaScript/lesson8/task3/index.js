let obj = { 'a': 1, 'b': 2, 'c': 3 };
let arr = ['a', 'c'];

const pickProps = (obj, arr) => {
    const object = {}
    for (let i of arr) {
        for (let key in obj) {
            if (i === key) {
                object[key] = obj[key]
            }
        }
    }
    return object;
}