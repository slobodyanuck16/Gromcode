const pages = document.querySelectorAll('.btn');
const handleClick = (event) => console.log(event.target.textContent);
pages.forEach(page => {
    page.addEventListener('click', handleClick);
});
