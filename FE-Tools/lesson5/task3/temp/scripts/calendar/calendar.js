import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';
export var generateNumbersRange = function generateNumbersRange(from, to) {
  var result = [];

  for (var i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

var generateDay = function generateDay() {
  // функция должна сгенерировать и вернуть разметку недели в виде строки
  // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
  var sells = generateNumbersRange(0, 24).map(function (daySell) {
    return "\n    <div\n        class=\"calendar__day-sell\" data-time=\"".concat(daySell, "\"\n    ></div>\n    ");
  }).join('');
  return sells;
};

export var renderWeek = function renderWeek() {
  // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
  // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
  // каждый день должен содержать в дата атрибуте порядковый номер для в месяце
  // какую неделю отображать - берем из storage
  // после того, как отрисовали всю сетку для отображаемой недели - добавляем события методом renderEvents
  var week = document.querySelector('.calendar__week');
  var days = generateNumbersRange(0, 6).map(function calendarDay(headerDay) {
    var monday = getItem('displayedWeekStart');
    return "<div\n            class=\"calendar__day\" data-day=\"".concat(generateWeekRange(monday)[headerDay].getDate(), "\"\n            ><div class=\"calendar__day-line\"></div>").concat(generateDay(), "\n            </div>");
  }).join('');
  week.innerHTML = days;
  renderEvents();
};