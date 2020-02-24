const arr = [3, 4, 5, 6, 7, 8];

function reverseArray(arr) {
    if(!Array.isArray(arr)){
        return null
    }
   let result = [];
   for (let i of arr) {
       result.unshift(i);
   }
   return result;
}