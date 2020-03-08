function saveCalls (func) {
    function arg() {
        arg.calls.push([...arguments])
        return func.apply(this, arguments)
    }
    arg.calls = [];
    return arg;
}

export { saveCalls };