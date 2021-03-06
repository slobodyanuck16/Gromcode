import { renderTimescale } from './calendar/timescale.js';
import { renderWeek } from './calendar/calendar.js';
import { renderRedLine } from './calendar/redLine.js';
import { renderHeader } from './calendar/header.js';
import { initNavigation } from './header/navigation.js';
import { setItem } from './common/storage.js';
import { getStartOfWeek } from './common/time.utils.js';
import { initEventForm } from './events/createEvent.js';
document.addEventListener('DOMContentLoaded', function () {
  // инициализация всех элементов
  renderTimescale();
  setItem('displayedWeekStart', getStartOfWeek(new Date()));
  renderHeader();
  renderWeek();
  initNavigation();
  initEventForm();
  renderRedLine();
});