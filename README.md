# javascript-interview-question-answer

[Got to top](#let-start-javascript-interview-question-answer)

## Question-1 : 
```Js
function add(item ,array){
    return array.push(item)
}

const result1 = add('a',['b','c'])
console.log(result1);

// Answer : 3
```
`The push method modifies the original array by adding an element to it and returns the updated length of the array after the addition.`

## Question-2 : 
```Js
async function getValue(){
    return 'i love javascript'
}

const result2 = getValue();
console.log(result2);

// Answer : Promise {' i love javascript'}
```
`Since getValue is an async function and returns a promise due to the use of the async keyword, the return value is a Promise object .`

## Question-3 : 
```Js
async function getValue(){
    return 'i love javascript'
}

async function getResult(){
    const result = await getValue();
    console.log(result);
}
getResult();

// Answer : i love javascript
```
`If you want to retrieve the value from the Promise, you can use async/await or .then() to handle the resolved value .`

## Question - 4 : 

````Js
var x = 6;
var y = 3;

 ( x < 10 && y > 1)

 // Answer : true

````

## Question - 5 : 

````Js
var x = 2 + 2 - '2';
console.log(x)

// Answer : 2

````
## Question - 6 : 

````Js
var x = "2" + "2" - "2;
console.log(x)

// Answer : 20

````
