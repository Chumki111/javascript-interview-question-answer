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

const obj ={
    x : 10,
    y : 20
};

Object.freeze(obj);
const newObj = obj;
newObj.x = 50;
newObj.y = 60;

console.log(newObj.x);
console.log(newObj.y);