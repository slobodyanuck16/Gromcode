function getTitleElement () {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}
function getInputElement () {
    const inputElem = document.querySelector('input', 'text');
    console.dir(inputElem);
    return inputElem;
}

export { getTitleElement, getInputElement }