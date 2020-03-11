function filterNames(arr, text) {
    return arr.filter(el => el.includes(text) && el.length > 5);
}
console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));