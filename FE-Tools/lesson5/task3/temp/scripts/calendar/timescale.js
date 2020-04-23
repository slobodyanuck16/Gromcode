import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
export var generateNumbersRange = function generateNumbersRange(from, to) {
  var result = [];

  for (var i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};
export var getTime = function getTime() {
  var newTime = generateNumbersRange(0, 23).map(function (num) {
    if (num - 10 < 0) {
      return "0".concat(num, ":00");
    } else {
      return "".concat(num, ":00");
    }
  });
  return newTime;
};
export var renderTimescale = function renderTimescale() {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML
  var timeScale = document.querySelector('.calendar__time-scale');
  var timePolar = document.createElement('div');
  timePolar.classList.add('calendar__time-scale-polar');
  timePolar.innerHTML = 'GMT+02';
  var timeString = getTime().map(function (time) {
    return "<div class=\"calendar__time-scale-time\" data-scale-time=\"".concat(time, "\">").concat(time, "</div>");
  }).join('');
  timeScale.innerHTML = timeString;
  timeScale.prepend(timePolar);
};
export var renderLines = function renderLines() {
  var lines = document.querySelector('.calendar__lines');
  var line = generateNumbersRange(0, 24).map(function (timeScaleLines) {
    return "<div class=\"calendar__lines-semi\" data-line=\"".concat(timeScaleLines, "\"></div>");
  }).join('');
  lines.innerHTML = line;
};
renderLines();
renderTimescale();