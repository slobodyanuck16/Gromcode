function squaredNumbers() {
    const numArr = document.querySelectorAll('.number');

    for (let num of numArr) {
        const numInSquare = num.getAttribute('data-number') * num.getAttribute('data-number');
        num.dataset.squaredNumber = numInSquare;
    }
};

export { squaredNumbers };