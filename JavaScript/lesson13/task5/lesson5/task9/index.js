// export const findDivCount = (a, b, n) => {
//     let count = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % n == 0) {
//             count++
//         }
//     }
//     return count
// }

export function findDivCount(a,b,n) {
    let quan = 0;
    do {
        if (a % n === 0) {
            quan = quan + 1;
        }
        // else {
        //     return(0);
        // }
        a++;
    } while (a<=b);
    return(quan);
}
// function findDivCount(a,b,n) {
//     for (let quan = 0; a <= b; a++) {
//         if (a % n === 0) {
//             quan = quan + 1;
//             console.log(quan);
            
//         }
        // else {
        //     return (0);
        // }
//     }
// }