let m = 1;
const n = 20;
let result = 0;
do {
    if (m % 2 === 0) {
        result += m;
    }
    if (m % 3 === 0) {
        result = result - m;
    }
    if (m % 4 === 0) {
        result = result * m;
    }
    if (m % 5 === 0) {
        console.log(m);
    }
    m++;
} while (m <= n);
