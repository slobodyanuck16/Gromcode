/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */

const makePromise = (value) => new Promise(resolve => {
  setTimeout(() => {
      resolve(value);
  }, 0);
});

/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });