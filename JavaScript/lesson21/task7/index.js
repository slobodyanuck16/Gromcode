function clearList() {
    const list = document.querySelector('.categories');
    return list.innerHTML = ' ';
}

export {clearList};