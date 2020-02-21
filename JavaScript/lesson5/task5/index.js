function getSum (first, second) {
    let sum = 0;
    do {
        if (first % 2 === 0) {
            sum = sum + first;
        }
        first++;
    } while (first <= second);
    return console.log(sum);
}
