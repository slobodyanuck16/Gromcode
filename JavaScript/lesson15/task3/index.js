function createLogger() {

    let memo = [];

    function warn(text) {
        memo.push({
            message: text,
            dateTime: new Date(),
            type: 'warn',
        })
    }

    function error(text) {
        memo.push({
            message: text,
            dateTime: new Date(),
            type: 'error',
        })
    }

    function log(text) {
        memo.push({
            message: text,
            dateTime: new Date(),
            type: 'log',
        })
    }


    function getRecords(type) {
        if (type != undefined) {
            return `{ message: ${message}, dateTime: ${dateTime}, type: ${type} }`;
        } else {
            return memo.sort((a, b, c) => c.dateTime > b.dateTime > a.dateTime);
        }
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
}

export { createLogger }
