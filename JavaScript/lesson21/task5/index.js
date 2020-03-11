function setTitle(text) {
    const content = document.querySelector('.title');
    return content.textContent = text;
}

export { setTitle };