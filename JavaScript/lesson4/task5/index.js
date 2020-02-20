let m = 1;
const n = 50;
let result = 0;
for (i = m; m <= n; m++) {
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
}
