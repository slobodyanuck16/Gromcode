const getRandomNumbers = (lenght, start, end) => {
    const wrongNum = (start < end) && Math.ceil(end) === Math.ceil(start);
    if (start > end || wrongNum) return null;
    return Array(length).fill().map(num =>
        Math.floor(Math.random() * (start - end + 1) + end));
};
