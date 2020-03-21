



/* 
1. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/
const demoArr = [
    {id: 1, color: 'red', height: 15, width: 20, distance: 10},
    {id: 2, color: 'green', height: 5, width: 30, distance: 15},
    {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
    {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
    {id: 5, color: 'red', height: 10, width: 10, distance: 2},
    {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
  ];
  





  function pluck(arr, key) {
    if (typeof arr[0].key !== "undefined" ) {
        console.log('exists');
    } else {
        console.log('does not exist');
    }
  }
pluck(demoArr, demoArr[0].color)



// function pluck(arr, color) {
//       for (let i=0; i<arr.length; i++) {
      
//         console.log(arr[i].color)
//     }
// }

// pluck(demoArr)

  


  //console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];
