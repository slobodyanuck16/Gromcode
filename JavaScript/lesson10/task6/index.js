const getRandomNumbers = (integer, begin, end) => {
    const wrongNum = (end - begin < 1) && Math.ceil(end) === Math.ceil(begin);
    if (begin > end || wrongNum) return null;
    return Array(integer)
        .fill().map(el => Math.trunc(Math.random() * (end - begin)) + end);



}
