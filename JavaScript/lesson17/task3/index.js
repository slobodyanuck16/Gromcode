function defer (func,ms) {
    return function() {
        setTimeout(() => func(this, ...arguments),ms);
    }
}

export { defer };