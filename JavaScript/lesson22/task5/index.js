const searchBtn = document.querySelector('.search__btn');
const searchInp = document.querySelector('.search__input');
const logSearching = () => console.log(searchInp.value);

searchBtn.addEventListener('click', logSearching);