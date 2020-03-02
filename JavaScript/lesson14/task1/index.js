let message = 'just learn it!';

function sendMessage(name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message} Your ${sender}`);
}

function setMessage(text) {
    message = text;
}

sendMessage('Ann');

setMessage('good job!');

sendMessage('Ann');