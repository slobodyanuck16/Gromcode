function bind(func, context) {
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let funcArgs = [].slice.call(arguments)
        return func.apply(context, bindArgs.concat(funcArgs));
    };
};
export { bind };