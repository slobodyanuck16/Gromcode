const pages = document.querySelectorAll('.pagination__page');
const handleClick = () => console.log(pages.dataset.dataPageNumber);
const onePage = pages.forEach(page => {
    page.addEventListener('click', handleClick);
});
