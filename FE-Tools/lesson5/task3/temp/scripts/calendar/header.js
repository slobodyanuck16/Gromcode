import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
// 1 - сделать чтобы в разметке генерировались 7 дней, начало с понедельника, и ориентируясь на понедельник выдавало числа этой недели 
// 1 - создаю функцию которая имеет 7 итераций, и на каждой итерации вставляет див с строкой дня недели, и див с числом этого дня недели
// 
// 
import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js'; // import { openModal } from '../common/modal.js';

var daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
export var generateNumbersRange = function generateNumbersRange(from, to) {
  var result = [];

  for (var i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};
export var renderHeader = function renderHeader() {
  // функция должна сгенерировать разметку c днями отображаемой недели (только день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
  var header = document.querySelector('.calendar__header');
  var day = generateNumbersRange(0, 6).map(function headersDiv(headerDay) {
    var monday = getItem('displayedWeekStart');
    return "<div class=\"calendar__header-day\" data-day=\"".concat(headerDay, "\">").concat(daysOfWeek[headerDay], "\n        <div class=\"calendar__header-num\" data-num=\"").concat(generateWeekRange(monday)[headerDay].getDate(), "\">").concat(generateWeekRange(monday)[headerDay].getDate(), "</div>\n    </div>");
  }).join('');
  header.innerHTML = day;
}; // при клике на кнопку "Create" открыть модальное окно с формой для создания события