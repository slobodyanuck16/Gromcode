const getRandomNumbers = (length, start, end) => {
    if (Math.floor(start) >= Math.floor(end))
        return null;
        return Array(length).fill().map(num =>
            Math.floor(Math.random() * (start - end + 1) + end));
};
