function setButton(buttonText) {
    const content = document.querySelector('body');
    return content.innerHTML = `<button>${buttonText}</button>`;
}

export { setButton };