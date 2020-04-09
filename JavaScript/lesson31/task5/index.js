export const delay = time => new Promise((resolve) => {
  setTimeout(() => {
      resolve(delay);
  }, time)
})
// export const delay = time => new Promise((resolve) => {
//       resolve(setTimeout(() => {

//       }),time);
// })

delay(3000).then((console.log('Done')));