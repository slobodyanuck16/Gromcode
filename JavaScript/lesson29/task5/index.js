export const delay = (delay, callback, context, ...arg) => {
    setTimeout(() => {
        callback.call(context, arg);
    }, delay);
};