export function createLogger() {

    let loggerArr = [];

    function warn(text) {

        loggerArr.push({
            message: text,
            dateTime: new Date(),
            type: 'warn'
        });
    };

    function error(text) {

        loggerArr.push({
            message: text,
            dateTime: new Date(),
            type: 'error'
        });
    };

    function log(text) {

        loggerArr.push({
            message: text,
            dateTime: new Date(),
            type: 'log'
        });

    };

    function getRecords(type) {
<<<<<<< HEAD
        return loggerArr.sort((acc, rec) => (acc.dateTime > rec.dateTime));
    };

=======
        if (type != undefined) {
            return logger.filter(item => item.type === type).sort((a, b) => a.dateTime < b.dateTime);
        } else {
            return memo.sort((a, b) => a.dateTime < b.dateTime);
        }
    }
>>>>>>> 075e6d2a61ff3b68c4f57b90dcd6807b0c86686a
    return {
        warn,
        error,
        log,
        getRecords,
    }
};

const logger = createLogger();