let isClicked = false;
const btn = document.querySelector('.single-use-btn');

const textClicked = () => {
    if (!isClicked) {
        console.log('clicked');
        isClicked = true;
    }
}

btn.addEventListener('click', textClicked)