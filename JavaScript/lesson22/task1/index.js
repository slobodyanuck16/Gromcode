const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const btnClear = document.querySelector('.clear-btn');
const btnRemove = document.querySelector('.remove-handlers-btn');
const btnAttach = document.querySelector('.attach-handlers-btn');

const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


const attachEventsList = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
};
attachEventsList();
const attach = attachEventsList;
btnAttach.addEventListener('click', attach);

const removeEventsList = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
};
const remove = removeEventsList;
btnRemove.addEventListener('click', remove);

const clearEventsList = () => {
    eventsListElem.innerHTML = '';
};
const clear = clearEventsList;
btnClear.addEventListener('click', clear);