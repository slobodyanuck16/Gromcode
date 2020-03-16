const pages = document.querySelectorAll('.pagination__page');
const handleClick = (event) => console.log(event.target.dataset.pageNumber);
pages.forEach(page => {
    page.addEventListener('click', handleClick);
});
