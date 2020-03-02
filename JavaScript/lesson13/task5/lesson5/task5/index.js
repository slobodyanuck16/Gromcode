export function getSum (first, second) {
    let sum = 0;
    do {
        if (first % 2 === 0) {
            sum = sum + first;
            console.log(sum);
        }
        first++;
    } while (first <= second);
    return (sum);
}
