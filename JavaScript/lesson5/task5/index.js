let sum = 0;
function getSum (first, second) {
    do {
        if (first % 2 === 0) {
            sum = sum + first;
        }
        first++;
    } while (first <= second);
    console.log(sum);
}