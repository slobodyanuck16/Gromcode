import { getItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';

let interval;

export function renderRedLine() {
    // если отображена текущая неделя, то отрисуйте красную линию
    // красная линия должна находиться в правильном дне и в правильном положении по времени
    // диния должна обновлять положение каждые 5 мин
    // при обновлении не забудьте удалять старую линию
    // следите за тем, чтобы все ненужные таймеры были удалены
}