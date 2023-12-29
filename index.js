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

function test(a,b){
    console.log(a);
}
test(10);