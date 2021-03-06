import { getItem, setItem, storage } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
    // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
    // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {
    // ф-ция для удаления всех событий с календаря
}

const createEventElement = event => {
    // ф-ция создает DOM элемент события
    // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
    // нужно добавить id события в дата атрибут
    // здесь для создания DOM элемента события используйте document.createElement
    const { id, title, description, start, end } = event;
    const eventId = event[0].id;
    const eventTitle = event[0].title;
    const eventDescription = event[0].description;
    const eventStart = event[0].start;
    const eventEnd = event[0].end;
    const domElement = document.createElement('div');
    domElement.setAttribute('data-event-id', `${eventId}`);
    domElement.classList.add('event')
    const currentEvent =`<div class="event__title">"${eventTitle}"</div>
                        <div class="event__description">"${eventDescription}"</div>
                        <div class="event__time">${eventStart.getHours()} - ${eventEnd.getHours()}</div>`;
    domElement.innerHTML = currentEvent;
    return domElement;
    // console.log(domElement)
    // return domElement.append(currentEvent);
    

};

export const renderEvents = () => {
    // достаем из storage все события и дату понедельника отображаемой недели
    // фильтруем события, оставляем только те, что входят в текущую неделю
    // создаем для них DOM элементы с помощью createEventElement
    // для каждого события находим на странице временную ячейку (.calendar__time-slot)
    // и вставляем туда событие
    // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
    // не забудьте удалить с календаря старые события перед добавлением новых
    const monday = getItem('displayedWeekStart');
    setItem('events', [{
            id: 0.7890, // id понадобится для работы с событиями
            title: 'Event1',
            description: 'Event 1 description',
            start: new Date('2020-04-05T01:10:00.000Z'),
            end: new Date('2020-04-05T04:30:00.000Z'),
        },
        {
            id: 1.555, // id понадобится для работы с событиями
            title: 'Event2',
            description: 'Event 2 description',
            start: new Date('2020-04-06T01:10:00.000Z'),
            end: new Date('2020-04-06T04:30:00.000Z'),
        },
        {
            id: 6.777, // id понадобится для работы с событиями
            title: 'Event3',
            description: 'Event 3 description',
            start: new Date('2020-04-02T01:10:00.000Z'),
            end: new Date('2020-04-02T04:30:00.000Z'),
        },
        {
            id: 9.777, // id понадобится для работы с событиями
            title: 'Event4',
            description: 'Event 4 description',
            start: new Date('2020-04-01T01:10:00.000Z'),
            end: new Date('2020-04-01T04:30:00.000Z'),
        },
        {
            id: 8.777, // id понадобится для работы с событиями
            title: 'Event5',
            description: 'Event 5 description',
            start: new Date('2020-04-03T01:10:00.000Z'),
            end: new Date('2020-04-03T04:30:00.000Z'),
        },
    ], );

    const events = getItem('events')
    const isCurrentWeek = event => {
        const { end, start } = event;
        const endDateFormatted = end.getDate();
        const startDateFormatted = start.getDate();
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentWeekStart = currentDate.getDate() - currentDate.getDay() + 1;
        const currentWeekEnd = currentWeekStart + 6;

        console.log(
          "endDateFormatted: ",
          endDateFormatted,
          " startDateFormatted:= ",
          startDateFormatted,
          " currentDay: ",
          currentDay,
          " currentWeekStart:= ",
          currentWeekStart,
          " currentWeekEnd:= ",
          currentWeekEnd
        );

        return (
            startDateFormatted >= currentWeekStart &&
            startDateFormatted <= currentWeekEnd &&
            (endDateFormatted >= currentWeekStart && endDateFormatted <= currentWeekEnd)
        );
    };

    const filteredEvents = events.filter(isCurrentWeek);
    console.log(events);
    console.log(filteredEvents);
    // console.log(filteredEvents[1].start.getDate());
    // console.log(filteredEvents[0].start.getHours());
    // console.log(createEventElement(filteredEvents));
    const slotElem = document.querySelector(
        `.calendar__day[data-day="${filteredEvents[0].start.getDate()}"] .calendar__day-sell[data-time="${filteredEvents[0].start.getHours()}"]`,
    );
    console.log(slotElem);
    slotElem.innerHTML = createEventElement(filteredEvents);
};

function onDeleteEvent() {
    // достаем из storage массив событий и eventIdToDelete
    // удаляем из массива нужное событие и записываем в storage новый массив
    // закрыть попап
    // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);