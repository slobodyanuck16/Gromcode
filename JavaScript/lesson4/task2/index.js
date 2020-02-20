let result = 0;
const m = 1;
const n = 10;
for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
        result += i;
    }
}
console.log('Result: ' + result);
