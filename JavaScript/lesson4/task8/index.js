let sum = 0;
for (let i = 0; i <= 1000; i++) {
    sum += i;
}
let whole = sum / 1234;
let balance = sum % 1234;

while (whole>balance) {
    console.log(true);   
}
while (whole<balance) {
    console.log(false);
    break;
}