function findDivCount(a,b,n) {
    let quan = 0;
    do {
        if (a % n === 0) {
            quan = quan + 1;
        }
        a++;
    } while (a<=b);
    console.log(quan);
}