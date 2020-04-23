import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import { getItem, setItem, storage } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';
var weekElem = document.querySelector('.calendar__week');
var deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {// если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {// ф-ция для удаления всех событий с календаря
}

var createEventElement = function createEventElement(event) {
  // ф-ция создает DOM элемент события
  // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  // нужно добавить id события в дата атрибут
  // здесь для создания DOM элемента события используйте document.createElement
  var id = event.id,
      title = event.title,
      description = event.description,
      start = event.start,
      end = event.end;
  var eventId = event[0].id;
  var eventTitle = event[0].title;
  var eventDescription = event[0].description;
  var eventStart = event[0].start;
  var eventEnd = event[0].end;
  var domElement = document.createElement('div');
  domElement.setAttribute('data-event-id', "".concat(eventId));
  domElement.classList.add('event');
  var currentEvent = "<div class=\"event__title\">\"".concat(eventTitle, "\"</div>\n                        <div class=\"event__description\">\"").concat(eventDescription, "\"</div>\n                        <div class=\"event__time\">").concat(eventStart.getHours(), " - ").concat(eventEnd.getHours(), "</div>");
  domElement.innerHTML = currentEvent;
  return domElement; // console.log(domElement)
  // return domElement.append(currentEvent);
};

export var renderEvents = function renderEvents() {
  // достаем из storage все события и дату понедельника отображаемой недели
  // фильтруем события, оставляем только те, что входят в текущую неделю
  // создаем для них DOM элементы с помощью createEventElement
  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  // не забудьте удалить с календаря старые события перед добавлением новых
  var monday = getItem('displayedWeekStart');
  setItem('events', [{
    id: 0.7890,
    // id понадобится для работы с событиями
    title: 'Event1',
    description: 'Event 1 description',
    start: new Date('2020-04-05T01:10:00.000Z'),
    end: new Date('2020-04-05T04:30:00.000Z')
  }, {
    id: 1.555,
    // id понадобится для работы с событиями
    title: 'Event2',
    description: 'Event 2 description',
    start: new Date('2020-04-06T01:10:00.000Z'),
    end: new Date('2020-04-06T04:30:00.000Z')
  }, {
    id: 6.777,
    // id понадобится для работы с событиями
    title: 'Event3',
    description: 'Event 3 description',
    start: new Date('2020-04-02T01:10:00.000Z'),
    end: new Date('2020-04-02T04:30:00.000Z')
  }, {
    id: 9.777,
    // id понадобится для работы с событиями
    title: 'Event4',
    description: 'Event 4 description',
    start: new Date('2020-04-01T01:10:00.000Z'),
    end: new Date('2020-04-01T04:30:00.000Z')
  }, {
    id: 8.777,
    // id понадобится для работы с событиями
    title: 'Event5',
    description: 'Event 5 description',
    start: new Date('2020-04-03T01:10:00.000Z'),
    end: new Date('2020-04-03T04:30:00.000Z')
  }]);
  var events = getItem('events');

  var isCurrentWeek = function isCurrentWeek(event) {
    var end = event.end,
        start = event.start;
    var endDateFormatted = end.getDate();
    var startDateFormatted = start.getDate();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentWeekStart = currentDate.getDate() - currentDate.getDay() + 1;
    var currentWeekEnd = currentWeekStart + 6;
    console.log("endDateFormatted: ", endDateFormatted, " startDateFormatted:= ", startDateFormatted, " currentDay: ", currentDay, " currentWeekStart:= ", currentWeekStart, " currentWeekEnd:= ", currentWeekEnd);
    return startDateFormatted >= currentWeekStart && startDateFormatted <= currentWeekEnd && endDateFormatted >= currentWeekStart && endDateFormatted <= currentWeekEnd;
  };

  var filteredEvents = events.filter(isCurrentWeek);
  console.log(events);
  console.log(filteredEvents); // console.log(filteredEvents[1].start.getDate());
  // console.log(filteredEvents[0].start.getHours());
  // console.log(createEventElement(filteredEvents));

  var slotElem = document.querySelector(".calendar__day[data-day=\"".concat(filteredEvents[0].start.getDate(), "\"] .calendar__day-sell[data-time=\"").concat(filteredEvents[0].start.getHours(), "\"]"));
  console.log(slotElem);
  slotElem.innerHTML = createEventElement(filteredEvents);
};

function onDeleteEvent() {// достаем из storage массив событий и eventIdToDelete
  // удаляем из массива нужное событие и записываем в storage новый массив
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}

deleteEventBtn.addEventListener('click', onDeleteEvent);
weekElem.addEventListener('click', handleEventClick);