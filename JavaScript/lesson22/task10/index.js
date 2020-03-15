const page = document.querySelector('.pagination');
const handleClick = event => console.log(event.target.getAttribute('data-page-number'));

page.addEventListener('click', handleClick);