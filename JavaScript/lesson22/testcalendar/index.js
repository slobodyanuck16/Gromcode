const getStartOfWeek = date => {
    const dateCopy = new Date(date);
    const dayOfWeek = dateCopy.getDay();
    const difference =
        dayOfWeek === 0
            ? -6 // for Sunday
            : 1 - dayOfWeek;
    const monday = new Date(dateCopy.setDate(date.getDate() + difference));
    return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

let storage = {
    // объект в котором должен храниться массив событий и дату понедельника отображаемой недели
    // еще понадобится хранить selectedEventId для того, чтобы показать попап с кнопкой удаления
    // другие данные хранить не нужно. Все, что необходимо для работы приложения можно посчитать
};

const setItem = (key, value) => {
    // ф-ция должна устанавливать значения в объект storage
    storage[key] = value;
};

const getItem = key => {
    // ф-ция должна возвращать по ключу значения из объекта storage
    return storage[key];
};

setItem('displayedWeekStart', getStartOfWeek(new Date()));