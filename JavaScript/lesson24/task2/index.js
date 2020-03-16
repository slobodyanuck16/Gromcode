const getGreenwichTime = new Intl.DateTimeFormat('en', {
    timeZone: 'GMT',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});

const getGreenwichTime = date => getGreenwichTime.format(date);

export {getGreenwichTime}