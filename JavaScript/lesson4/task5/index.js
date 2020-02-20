const m = 1;
const n = 50;
let result = 0;
for (i = m; i <= n; i++) {
    if (i % 2 === 0) {
        result += i;
    }
    if (i % 3 === 0) {
        result = result - i;
    }
    if (i % 4 === 0) {
        result = result * i;
    }
    if (i % 5 === 0) {
        console.log(i);
    }
}
