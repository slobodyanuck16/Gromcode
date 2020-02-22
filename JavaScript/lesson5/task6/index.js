function getPrimes(i, n) {
    do {
        if ((i % 1 === 0) && (i % i === 0) && (i != 1)) {
            console.log(i);
        }
        i++;
    } while (i <= n);
}