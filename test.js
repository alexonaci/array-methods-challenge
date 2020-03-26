// WORK ON 4, 5, 7,  9, 10, 12 
//IMPROVE : 6 


/*
4. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/
// console.log(reject(demoArr, iterator)); // return an array of objects with height < 10

/*
5. Write a function that return the element with the color 'crimson'
*/

/*
7. Write a function that returns true if at least one of the array elements has the color 'green';
*/
// console.log(atLeastOneIsOfColor(demoArr, 'balarie'));

/*
10. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/
// console.log('Unique Colors: ', uniqueColors(demoArr));


/*
12. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];

// const objClasses = [];

// console.log(objClasses);





/*
9. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/
// console.log('Number of colors: ', noColors(demoArr));
  

const demoArr = [
    {id: 1, color: 'red', height: 15, width: 20, distance: 10},
    {id: 2, color: 'green', height: 5, width: 30, distance: 15},
    {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
    {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
    {id: 5, color: 'red', height: 10, width: 10, distance: 2},
    {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
  ];
 

  function noColors(array, color) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].color == array[color]) {
            count++;
        }
    }
    return count;
}

// noColors(list, 2); // returns 2
// noColors(list, 1); 



 noColors(demoArr, red)
