const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });
    listElem.append(...listItemsElems);
};
renderListItems(tasks);

const createBtn = document.querySelector('.create-task-btn');
const pushToList = () => {
        const createInp = document.querySelector('.task-input');
        if(!createInp.value) return false;
        tasks.push({ text: createInp.value, done: false });
        createInp.value = '';

        renderListItems(tasks);
    }
createBtn.addEventListener('click', pushToList);

const confirmEvent = document.querySelector('.list');
const confirmItem = event => {
    const confirmItem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    confirmItem.done = event.target.checked;

    renderListItems(tasks);
};
confirmEvent.addEventListener('click', confirmItem);

//При нажатии на кнопку Create, то что написано в инпуте должно добавится в список дел (масив?)
//Строка списка должна содержать чекбокс, текст, и статус (checked)
//Если в строке списка включается статус checked, то добавляется класс со стилями
//Список дел должен быть отсортирован
//
//
//
//
//
//
//
//