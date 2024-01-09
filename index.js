// function add(item ,array){
//     return array.push(item)
// }

// const result1 = add('a',['b','c'])
// console.log(result1);

// async function getValue(){
//     return 'i love javascript'
// }

// const result2 = getValue();
// console.log(result2);

// async function getResult(){
//     const result = await getValue();
//     console.log(result);
// }
// getResult();

// console.log(typeof NaN);
// setTimeout(() =>{
// console.log(1);
// },0)

// queueMicrotask(() =>{
//     console.log(2);
// })

// Promise.resolve().then(()=>{
//     console.log(3);
// })

// console.log(4);

// const obj ={
//     x : 10,
//     y : 20
// };

// Object.freeze(obj);
// const newObj = obj;
// newObj.x = 50;
// newObj.y = 60;

// console.log(newObj.x);
// console.log(newObj.y);

// const obj1 ={
//     name : 'Chumki',
//     address:{
//         country : 'Bangladesh',
//         city : 'Rajshahi',
//         ['post office'] : {
//             one : 'mou'
//         }
//     }
// };

// const obj2 = structuredClone (obj1)

// const obj2 = {...obj1}
// obj2.address['post office'].one = 'Sholua'
// console.log(obj1.address['post office'].one)

// const obj1 = { a : 1 , b : 2};
// const obj2 = { b : 4 , c: 5}

// const newObj = Object.assign(obj1 , obj2);

// console.log(newObj);
// console.log( obj1 === newObj);

// function test(a,b){
//     console.log(a);
// }
// test(10);

// const roadMaps = ['JavaScript' , 'React' , 'Node.js']

// const reNamedRoadMaps  = roadMaps.map((roadmap) => {
//     return `${roadmap} Roadmap`;
// })

// console.log(roadMaps); // ['JavaScript', 'React', 'Node.js']
// console.log(reNamedRoadMaps); // ['JavaScript Roadmap', 'React Roadmap', 'Node.js Roadmap']

// function displayArgs (){
//     for (let i = 0; i <arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }

// displayArgs(1,2,3,4)

// function displayArgs(...args){
//      args.forEach(arg => console.log(arg))
// }

// displayArgs(1,2,3,4)

// let i = 0;

// do{
//     console.log(i);
//     i++;
// } while (i < 3)

// console.log(2*3);

// console.log('before');

// setTimeOut(() =>{
//     console.log('hello');
// },1000);

// console.log('after')

// console.log('hello'|| 0); 
// console.log(false || 'hello'); 
// console.log('hello'|| 'world'); 
// hello

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(number =>{
//     return number % 2 === 0
// })

// console.log(numbers); 
//[1, 2, 3, 44, 5, 6]
// console.log(evenNumbers);
// //[2, 4, 6]

// let x = 1;

// console.log(x++);         //Answer : 1
// console.log(x);           //Answer : 2


// let x = 1;

// console.log(++x);         //Answer : 2
// console.log(x);


// function add(a,b){
//     return a+b;
// }

// let result = add(10,5)
// console.log(result);
//  console.log(add(10,5))

// const roadMaps = ['JavaScript', 'React', 'Node.js']

// roadMaps.forEach((roadMap) =>{
//     console.log(roadMap);
// })

// const numbers = [1, 2, 3, 4, 5, 6]

// const sum = numbers.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue
// } , 0)

// console.log(sum);


// const number = [1, 2, 3];
// number.push(4,5);
// console.log(number)
// const number = [1, 2, 3];
// const includesThree = number.includes(3)
// console.log(includesThree)

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort();
// console.log(fruits);

// const numbers = [100, 20, 200, 30];
// numbers.sort((a,b) => (a-b));
// console.log(numbers);

// const numbers = [1, 2, 3];
// const lastNumbers = numbers.pop();
// console.log(lastNumbers);

// const numbers = [1, 2, 3];
// numbers.unshift(0,-1);
// console.log(numbers);

// const numbers = [1, 2, 3];
// const mapNumbers = numbers.map(number => number *2)
// console.log(mapNumbers);
// const numbers = [1, 2, 3, 4, 5];
// const sliceNumbers = numbers.slice(0,3);
// console.log(sliceNumbers);
// const numbers = [1, 2, 3, 4, 5];
// const eventNumbers = numbers.filter(number => number % 2 === 0);
// console.log(eventNumbers);
// const numbers = [1, 2, 3, 4, 5];
// const foundNumbers = numbers.find(number => number > 5);
// console.log(foundNumbers);

// function outPut(number) {
//     return number / 2 !== 0;
//   }
  
//   function number() {
//     for (let i = 1; i <= 50; i++) {
//       if (outPut(i)) {
//         console.log(i);
//       }
//     }
//   }
  
//   number();

// function cubes(a) {
// 	return a ** 3
// }
// const cubes =(a) =>  {
//  return a ** 3  
// }
// console.log(cubes(3));
  
// function squaed(b) {
// 	return b * b
// }
// console.log(squaed(5));

// const price = 26.5;
// const taxRate = 0.082;

// Calculate total after tax to two decimal places
// const totalPrice = price + (price * taxRate);
// console.log(totalPrice);     // Answer -----> 28.673000000000002 (number)

// const fixedPrice = parseInt(totalPrice.toFixed(2));
// console.log(fixedPrice);

// const fixedPrice = totalPrice.toFixed(2);
// console.log(fixedPrice); 


// const num = '32';
// const number1 = parseInt(num);
// console.log(typeof(number1));

// console.log(10 ** 5);     /// Answer ----> 100000

// console.log(10 * 10 * 10 * 10 * 10);    // Answer ----> 100000
// console.log(Math.pow(10, 5));  // Answer ----> 100000


// function remainder(a, b) {
//     return a % b;
// }

// Example usage:
// console.log(remainder(5,5));

// const fruits = ['apple', 'banana','dfdf','zzxc', 'orange', 'grape'];
// fruits.sort();
// console.log(fruits);

// const numbers = [10, 4, 3, 28, 24, 13, 1, 2,0, 50,45];
// numbers.unshift(35);
// console.log(numbers);
//Return only numbers in the years array greater than 1950.
// const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020];

// function getYears(years) {
//   return years.filter(year => year > 1950);
// }

// const filteredYears = getYears(years);
// console.log(filteredYears); // Output: [1972, 1984, 2020]

console.log(a);
var a= 1;
