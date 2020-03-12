const btn = document.querySelector('.single-use-btn');

const textClicked = () => console.log('clicked');

btn.addEventListener('click', textClicked, { once: true});