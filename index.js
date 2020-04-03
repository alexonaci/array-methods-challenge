/** Array Functions **/
/*
0. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function typeCastAndAdd(params) {
    params = params.map(Number);
    params = params.map(element => element +2)
    return params
};

console.log('Array methods challenge: 0');
console.log('Typecast: ',typeCastAndAdd(strArr));
console.log('*************************************************************************');



/* 
1. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
// */


const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

function pluck(arr, key) {  
  arr = arr.map(el => el[key]);
  return arr;
};

console.log('Array methods challenge: 1');
console.log(pluck(demoArr, 'color'));
console.log('*************************************************************************');



/*
2. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

function calculateArea(arr) {
  arr = arr.map(el => el.height * el.width);
  return arr;
};
console.log('Array methods challenge: 2');
console.log(calculateArea(demoArr));
console.log('*************************************************************************');

/*
3. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

function filterArr(arr) {
    arr = arr.map(el => el.height * el.width);
    arr = arr.filter(el => el<=100);
    return arr;
};
console.log('Array methods challenge: 3');
console.log(filterArr(demoArr));
console.log('*************************************************************************');


/*
4. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

let arr = [];
  const reject = (objArr, callBack) => {
    objArr.forEach(item => {
        if (!callBack(item)) {
            arr.push(item);
        }
    });
    return arr;
};
let iterator = elem => (elem["height"] >= 10 ? true : false); // return an array of objects with height < 10

console.log('Array methods challenge: 4');
console.log(reject(demoArr, iterator));  // return an array of objects with height < 10
console.log('*************************************************************************');




/*
5. Write a function that return the element with the color 'crimson'
*/

function findColor(arr, key) {
    arr = arr.map((el)=> {
        el = el.color;
        if (el == key){
          arr = arr.find(el => el.color == key);
          console.log(arr);
        }
        return arr;
    });
    return arr;
  };

console.log('Array methods challenge: 5'); 
findColor(demoArr, 'crimson'); 
console.log('*************************************************************************');
// NOT WORKING WITH RED ( Multiple same values)




/*
6. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.

*/

function areasAreBigger(arr, num) {
  arr = arr.map(el => el.height * el.width);
  let result = arr.every(function (e) {
      if (e >= num) {
          return true;
      }
    });
  console.log(result);
};

console.log('Array methods challenge: 6'); 
areasAreBigger(demoArr, 10);
console.log('*************************************************************************');



/*
7. Write a function that returns true if at least one of the array elements has the color 'green';
*/
function atLeastOneIsOfColor(arr, colorKey) {
  const result = arr.filter(el => el.color == colorKey);
  return (result.length > 0 ? true : false);
};

console.log('Array methods challenge: 7'); 
console.log(atLeastOneIsOfColor(demoArr, 'balarie'));
console.log('*************************************************************************');


/*
8. Write a function that returns the total distance (the sum of the element distances)
*/


function sumOfDistances(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum = sum + arr[i].distance;
  };
  return sum;
};

console.log('Array methods challenge: 8'); 
console.log('Sum of distances: ', sumOfDistances(demoArr));
console.log('*************************************************************************');



/*
9. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/


function noColors (objArr) {
  let count = {};
  objArr.forEach(elem => {
      count[elem.color] = (count[elem.color] || 0) + 1;
  });
  return count;
};

console.log('Array methods challenge: 9'); 
console.log('Number of colors: ', noColors(demoArr));
console.log('*************************************************************************');


/*
10. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/
// console.log('Unique Colors: ', uniqueColors(demoArr));
function uniqueColors(arr) { 
  let resArr = [];
  arr.filter(function(item){
    let i = resArr.findIndex(x => x.color == item.color);
    if(i <= -1){
      resArr.push({id: item.id, color: item.color, height: item.height, width: item.height, distance: item.distance});
    };
  });
  return resArr;
};


console.log('Array methods challenge: 10'); 
console.log('Unique Colors: ', uniqueColors(demoArr));
console.log('*************************************************************************');




/*
11. Write a function which inverts two numbers.
*/

let a = 5, b = 8;

(function invertNumbers() {
  [a, b] = [b, a];
})();

// Am incercat cu o functie cu parametrii x, y, dar cum a si b sunt declarate global cand fac console imi da valorile initiale. Nu stiu cum sa fac altfel :) 

console.log('Array methods challenge: 11'); 
console.log('A:', a, 'B:', b);
console.log('*************************************************************************');




/*
12. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];


let arrayOfObjects = classes.map(elem => {
  return { subject: elem[0], time: elem[1], teacher: elem[2] }
});


console.log('Array methods challenge: 12'); 
console.log(arrayOfObjects);
console.log('*************************************************************************');


console.log('********************** THE END ******************************************');