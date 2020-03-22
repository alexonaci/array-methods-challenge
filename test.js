
const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];


function pluck(arr, key) {
  arr = arr.map(el => el.color)
  return arr;
}

console.log(pluck(demoArr, 'color'));  // NOT working with other key, for exam: id, or width


function calculateArea(arr) {
    arr = arr.map(el => el.height * el.width)
    arr = arr.filter(el => el<=100)
    return arr;
}
  
console.log(calculateArea(demoArr))


// /*
// 4. Implement a function called reject, which receives an array and an iterator function.
// The iterator function receives each element in the array as a parameter and must return true or false. 
// If it returns true, the element will not be included by the parent function in the resulting array.
// If returns false it will be included.
// */

// function reject(arr, iteration()) {
//     function iteration

// }
// console.log(reject(demoArr, iterator)); // return an array of objects with height < 10


/*
5. Write a function that return the element with the color 'crimson'
*/

// function findColor(arr, value){
// arr = arr
// }
// console.log(findColor(demoArr, 'crimson'));

// function pluck(arr, key) {
//     arr = arr.map(el => el.color)
//     return arr;
//   }