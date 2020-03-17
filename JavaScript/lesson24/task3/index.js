const getDiff = (startDate, endDate) => {

    let diff = new Date(startDate) - new Date(endDate);

    if (startDate < endDate)
        diff = new Date(endDate) - new Date(startDate);

    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff / 1000 / 60 / 60) % 24);
    const min = Math.floor((diff / 1000 / 60) % 60);
    const sec = Math.floor((diff / 1000) % 60);

    return `${day}d ${hour}h ${min}m ${sec}s`;
};

export { getDiff };