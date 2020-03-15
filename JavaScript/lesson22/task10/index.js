const page = document.querySelector('.pagination');
const handleClick = event => console.log(event.target.textContent);

page.addEventListener('click', handleClick);