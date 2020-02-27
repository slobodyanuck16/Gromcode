let lenght = 20;
let start = 1;
let end = 20;

const getRandomNumbers = (lenght, start, end) => {
    const wrongNum = (start < end) && Math.ceil(end) === Math.ceil(start);
    if (start > end || wrongNum) return null;
    return Array(lenght)
        .fill().map(el => Math.trunc(Math.random() * end));
}
