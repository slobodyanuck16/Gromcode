let arr = [' 1.9 ', '16.4', 17, '1 dollar '];
const cleanTransactionsList = arr => {
    let numArr = arr.filter(item => {
        if (typeof(+item) === 'number' && !isNaN(item)) {
            return item
        }
    })
    return numArr.map(item => {
        return '$' + (+item).toFixed(2)
    })
}
console.log(cleanTransactionsList(arr));



// 1 Проходимся по масиву, преобразовываем строки(элементы масива) в числа
// 2 Добавляем знаки после запятой (и знак $ перед числами (может в 3 шаге 3???))
// 3 Преобразовываем числа (элементы масива) назад в строки
// 4 Возвращаем масив