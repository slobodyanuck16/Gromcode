// export function compareSums (a,b,c,d) {
//     function sum(from,to) {
//         let from = a + b;
//         let to = c + d;
//     }
//     if (from > to) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };
export const sum = (from, to) => {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result
}
export const compareSums = (a, b, c, d) => {
    if (sum(a, b) > sum(c, d)) {
        return true
    } else {
        return false
    }

}