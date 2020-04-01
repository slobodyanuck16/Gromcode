import { initTodoListHandlers } from './todoList.js'
import { renderTasks } from './renderer.js'

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    initTodoListHandlers();
});

const onStorageChange = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
}

window.addEventListener('storage', onStorageChange);

// const tasks = [
//     { text: 'Buy milk', done: false, dateStart: new Date(), dateEnd: new Date() },
//     { text: 'Pick up Tom from airport', done: false, dateStart: new Date(), dateEnd: new Date() },
//     { text: 'Visit party', done: false, dateStart: new Date(), dateEnd: undefined },
//     { text: 'Visit doctor', done: true, dateStart: new Date(), dateEnd: new Date() },
//     { text: 'Buy meat', done: true, dateStart: new Date(), dateEnd: new Date() },
// ];

// const renderListItems = listItems => {
//     const listElem = document.querySelector('.list');
//     listElem.innerHTML = '';

//     const listItemsElems = listItems
//         .sort((a, b) => {
//             if (a.done - b.done !== 0) {
//                 return a.done - b.done;
//             };
//             if (a.done) {
//                 return new Date(b.dateEnd) - new Date(a.dateEnd);
//             }
//             return new Date(b.dateStart) - new Date(a.dateStart);
//         })
//         .map(({ text, done }) => {
//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');
//             if (done) {
//                 listItemElem.classList.add('list__item_done');
//             }
//             const checkboxElem = document.createElement('input');
//             checkboxElem.setAttribute('type', 'checkbox');
//             checkboxElem.checked = done;
//             checkboxElem.classList.add('list__item-checkbox');
//             listItemElem.append(checkboxElem, text);

//             return listItemElem;
//         });
//     listElem.append(...listItemsElems);
// };
// renderListItems(tasks);

// const createBtn = document.querySelector('.create-task-btn');
// const pushToList = () => {
//     const createInp = document.querySelector('.task-input');
//     if (!createInp.value) return false;
//     tasks.unshift({ text: createInp.value, done: false, dateStart: new Date(), dateEnd: undefined });
//     createInp.value = '';

//     renderListItems(tasks);
// }
// createBtn.addEventListener('click', pushToList);

// const confirmEvent = document.querySelector('.list');
// const confirmItem = event => {
//     const confirmItem = tasks.find(item =>
//         item.text === event.target.parentNode.textContent);
//     confirmItem.done = event.target.checked
//     confirmItem.dateEnd = confirmItem.done ? new Date() : undefined;
//     renderListItems(tasks);
// };
// confirmEvent.addEventListener('click', confirmItem);

//При нажатии на кнопку Create, то что написано в инпуте должно добавится в список дел (масив?)
//Строка списка должна содержать чекбокс, текст, и статус (checked)
//Если в строке списка включается статус checked, то добавляется класс со стилями
//Список дел должен быть отсортирован