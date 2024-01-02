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

const roadMaps = ['JavaScript', 'React', 'Node.js']

roadMaps.forEach((roadMap) =>{
    console.log(roadMap);
})