function createLogger () {
    let memo = 0;

    const add = (num) => {
        memo += num;
    };

    const decrease = (num2) => {
        memo -= num2;
    };

    const reset = () => {
        memo = 0;
    };

    const getMemo = () => {
        return memo;
    };
    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}