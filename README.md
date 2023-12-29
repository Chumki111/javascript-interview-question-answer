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
## Question - 7 : 

` `
````Js 

What is the output of the following code ? 

console .log(typeof NaN)

A."NaN"          B."string"
C."number"       D."undefined"

// Answer : C.number

````
## Question - 8 : 

````Js
What does the NaN value represent in JavaScript ? 

A."NaN"          B."Not a Number"
C."number"       D."undefined"

// Answer : B.Not a Number

````
`Explanation : The NaN value in JavaScript represents 'Not a Number' and is returned when a mathematical operations fails to produce a valid number .`

## Question - 9 : 

````Js
What is the output ? 

setTimeout(() =>{
console.log(1);
},0)

queueMicrotask(() =>{
    console.log(2);
})

Promise.resolve().then(()=>{
    console.log(3);
})

console.log(4);

// Answer : 4,2,3,1

````
`Explanation : `

## Question - 10 : 

### JavaScript Object constructor knowledge

````Js

What is the output ?  

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

// Answer : 10 , 20

````
`Explanation :` Object.freeze(obj) freezes the object obj. This makes the object's properties immutable, meaning they cannot be added, deleted, or modified . </br>
(const newObj = obj) creates a new constant variable named newObj and assigns it the reference to the existing object obj. This means that both obj and newObj point to the same object in memory. </br>
So the answer is 10 and 20

## Question - 11 : 

### JavaScript Object deep clone knowledge

````Js

What is the output ? 

const obj1 ={
    name : 'Chumki',
    address:{
        country : 'Bangladesh',
        city : 'Rajshahi',
        ['post office'] : {
            one : 'mou'
        }
    }
};

// const obj2 = structuredClone (obj1)

const obj2 = {...obj1}
obj2.address['post office'].one = 'Sholua'
console.log(obj1.address['post office'].one)


// Answer : Sholua

````
`Explanation :` const obj2 = structuredClone(obj1); লাইন কমেন্ট করা অবস্থায় ১৮ নাম্বার লাইনে Sholua প্রিন্ট হবে। </br>
এবং `const obj2 = structuredClone(obj1);` লাইন আনকমেন্ট এবং `const obj2 = {...obj1}` লাইন কমেন্ট করলে ১৮ নাম্বার লাইনে mou প্রিন্ট হবে। </br>
কারণঃ </br>
spread Operator {...obj1} এটা deep clone support করে না। এজন্য আমরা এখানে যখন `const obj2 = { ...obj1 }` লাইনে, </br>
 করে নতুন একটি অবজেক্ট তৈরি করার চেষ্টা করলাম তখন এটি মুলত নতুন এটি Object (obj2) তৈরি করেছে ঠিকিই। তবে এটি শুধু মাত্র এক স্তর পর্জন্ত কাজ করে। মানে এটি Nested object এর ক্ষত্রে deeply clone করতে পারে না।
এজন্য আমরা যদি `(obj1 === obj2)` করি তাহলে এটি false return করবে ঠিকিই তবে যদি object এর গভীরে গিয়ে চেক করি যেমন;- </br>
`(obj1.address["post office"] === obj2.address["post office"])` তাহলে এটি অবিশ্বাস্যভাবে true return করবে। </br>
অর্থাৎ এক্ষেত্রে obj2 এর address property এর অন্তর্গত `["post office"]` টা, এবং obj1 এর address property এর অন্তর্গত `["post office"]` একই পয়েন্ট কে indicate করছে। </br>
এজন্য `obj2.address["post office"].one = "Sadar";` করার ফলে  `obj1.address["post office"].one` লাইনে,
`obj1.address["post office"].one` এর value "mou" টি implicitly ভাবে "Sholua" দিয়ে mutate হয়ে যাচ্ছে। </br>
আর structuredClone(obj1) ক্ষেত্রে, </br>
`const obj2 = structuredClone(obj1);` এই method টি যেহেতু deep clone support করে তাই এটি Nested object গুলোকেও পুরোপুরি ভাবে কপি করে ফলে । </br>
জার জন্য এসময় `obj2.address["post office"].one = "Sadar";` করলেও এটি `obj1.address["post office"].one `এর value কে Mutate করতে পারে না। ফলে `obj1.address["post office"].one `লাইনে "mou" প্রিন্ট করবে। </br>
আর সবার শেষে `structuredClone()` ওই web API টি মুলত গভীরভাবে নেস্টেট পর্জন্ত deeply object clone করার জন্য ব্যবহার হয়। 

## Question - 12 : 

### JavaScript Object constructor Function knowledge

````Js

What is the output ?  

const obj1 = { a : 1 , b : 2};
const obj2 = { b : 4 , c: 5}

const newObj = Object.assign(obj1 , obj2);

console.log(newObj);    // Answer : {a : 1 , b:4 , c: 5}
console.log( obj1 === newObj);    // Answer :  true

````
`Explanation :` 

## Question - 13 : 

### JavaScript Regular function knowledge

````Js

What is the output ?  

function test(a,b){
    console.log(a);
}
test(10);

// Answer : 10

````
`Explanation :` 

## Question - 14 : 

### JavaScript Regular function knowledge

````Js

What is the difference between `==` and `===` ?  

console.log(1 == '1')   // Answer : true
console.log(1 === '1')   // Answer : false
console.log(1 === 1)   // Answer : true

````
`Explanation :` The `==` equality operator converts the operands if the are not of the same type , then applies strict comparison . The `===` strict quality operator only considers values equal that have the same type .

## Question - 15 : 

### JavaScript Regular function knowledge

````Js

What is the difference between `map()` and `forEach()` methods ?  

`Answer :` The 'map()' method creates a new array with the results of calling provided function on every element in the calling array . 

Whereas, the forEach() method executes a provided function once for each array element.

````

## Question - 16 : 

### JavaScript Regular knowledge

````Js

What is the difference between `var`, `let`, and `const` in JavaScript ?  

`Answer :` In JavaScript , `var` is function-scoped and was traditionally used to declare variables .

`let` and `const` are block-scoped .

The key difference between `let` and `const` is that `let` allows for reassignment while `const` creates a read only reference . 
 
````
## Question - 17 : 

### JavaScript Regular knowledge

````Js

What are the different ways to declare a variable in JavaScript ?  

`Answer :` There are three ways to declare a variable in javaScript 

1. `var`
2. `let`
3. `const` 
 
````
## Question - 18 : 

### JavaScript Regular knowledge

````Js

What is the difference between `null` and `undefined`? ?  

`Answer :` 

null : The `null` is an assignment value . It can be assigned to a variable as a representation of no value . 

undefined : The `undefined` is a primitive value that represents the absence of a value , or a variable that has not been assigned value . 

 ````
## Question - 19 : 

### JavaScript Regular knowledge

````Js

What is JavaScript ?  

`Answer :` 

JavaScript : JavaScript is a high-level , versatile , and widely-used programming language primarily known for its role in web development . It enables interactive and dynamic behavior on websites . 

 ````
## Question - 20 : 

### JavaScript Regular knowledge

````Js

Does `map()` method mutate the original array ?  

`Answer :` No, the `map()` method does not mutate the original array . It returns a new array with the results of calling the provided function on every element in the calling element .  

 const roadMaps = ['JavaScript' , 'React' , 'Node.js']

const reNamedRoadMaps  = roadMaps.map((roadmap) => {
    return `${roadmap} Roadmap`;
})

console.log(roadMaps); // ['JavaScript', 'React', 'Node.js']
console.log(reNamedRoadMaps); // ['JavaScript Roadmap', 'React Roadmap', 'Node.js Roadmap']

 ````
## Question - 21 : 

### JavaScript Regular knowledge

````Js

Can you merge multiple arrays in JavaScript ?  

`Answer :` Yes , you can marge multiple arrays into one array using `concat()` method , or the spreed operator `...`

concat() : 

The `concat()` method is used to marge two or more arrays . This method does not change the existing arrays , but instead returns a new array . 

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr1.concat(arr2);
console.log(arr3);   // Answer :  [1, 2, 3, 4, 5, 6]



Spread operator : 

The spread operator `...` is used to expand an iterable object into the list of arguments . 
 
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1 , ...arr2];
console.log(arr3); // Answer :  [1, 2, 3, 4, 5, 6]

 ````
## Question - 22 : 

### Uses of `break` and `continue` statements in JavaScript?

````Js

`Answer :` You can use `break` and `continue` in loops to alter the flow of the loop . 

`break` will stop the loop from continuing .
`continue` will skip the current iteration and continue the loop .


break : 

for (let i = 0; i < 5; i++){
   if(i === 1){
    break;   //stop the loop
   }
   console.log(` i : ${i}`)        //Answer----> i:0
}


continue : 

for (let i = 0; i< 5; i++){
    if(i === 1){
        continue;    // skips the rest of the code in the loop
    }
  console.log(`i:${i}`)
}

// Output:
// i: 0
// i: 2
// i: 3
// i: 4

 ````
## Question - 23 : 

### How to define multiline strings in JavaScript ?

````Js

`Answer :` 

In order to define multiline strings in JavaScript, you need to use template literals. Template literals are enclosed by the backtick (` `) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`).

 ````
## Question - 24 : 

### How does Event Loop work in JavaScript ?

````Js

`Answer :` The Event loop has two main components: the Call stack and the Callback queue.

Call Stack : 

The Call stack is a data structure that stores the tasks that need to be executed. It is a LIFO (Last In, First Out) data structure, which means that the last task that was added to the Call stack will be the first one to be executed.

Callback Queue : 

The Callback queue is a data structure that stores the tasks that have been completed and are ready to be executed. It is a FIFO (First In, First Out) data structure, which means that the first task that was added to the Callback queue will be the first one to be executed.

Event Loop's Workflow :

1.Executes tasks from the Call Stack.
2.For an asynchronous task, such as a timer, it runs in the background. JavaScript proceeds to the next task without waiting.
3.When the asynchronous task concludes, its callback function is added to the Callback Queue.
4.If the Call Stack is empty and there are tasks in the Callback Queue, the Event Loop transfers the first task from the Queue to the Call Stack for execution.

setTimeout(() => console.log('Hello from the timer'), 0);
console.log('Hello from the main code');

1.setTimeout is processed, and because it's asynchronous, its callback is placed in the Callback Queue.
2.The next line, console.log("Hello from the main code"), is logged immediately.
3.Although the timer duration is 0 milliseconds, its callback has to wait until the Call Stack is empty. After the main code logs, the callback is moved from the Callback Queue to the Call Stack and executed.
4.The result is "Hello from the main code" being logged before "Hello from the timer".

 ````
## Question - 25 : 

### How to accept variable number of arguments in a JavaScript function ?

````Js

`Answer :` In JavaScript you can accept a variable number of arguments in a function using the `arguments` or object or the rest parameter `(...)`.

Using the `arguments` object : 

The `arguments` is an array-like object that holds of the passed arguments . They are only available inside the function body .

function displayArgs (){
    for (let i = 0; i <arguments.length; i++){
        console.log(arguments[i]);
    }
}

displayArgs(1,2,3,4);     // Answer : 1,2,3,4

Using the rest parameter :

Tje rest parameter allows you to represent an indefinite number of arguments as an array . 

function displayArgs(...args){
     args.forEach(arg => console.log(arg))
}

displayArgs(1,2,3,4);    // Answer : 1,2,3,4


The rest parameter `(...args in the example)` is generally more modern and flexible , it provides an actual array , unlike the array-like `arguments` object . 

 ````
## Question - 26 : 

### How to get viewport dimensions in JavaScript?

````Js

`Answer :` You can see `window.innerWidth` and `window.innerHeight` to get the viewport dimensions .

 ````

## Question - 27 : 

### How to use `do...while` loop in JavaScript ?

Answer : The `do...while` statement create a loop that executes a block of code once ,before checking if the condition is `true` , then it will repeat the loop as long as the condition is `true`

````Js

let i = 0;

do{
    console.log(i);
    i++;
} while (i < 3)

//output 
// 0
// 1
// 2
 ````

## Question - 28 : 

### What is Event Loop in JavaScript ?

`Answer` : The Event loop is one the most important aspect to understand in JavaScript. It is the mechanism that allows JavaScript to perform non-blocking operations. It is the reason why we can use asynchronous code in JavaScript. The Event loop is a loop that constantly checks if there are any tasks that need to be executed. If there are, it will execute them. If there are no tasks to execute, it will wait for new tasks to arrive.

## Question - 29 : 

### What is ternary operator in JavaScript ?

`Answer` : The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the if statement.

````Js

console.log(condition ? true : false);

 ````
## Question - 30 : 

### What is ternary operator in JavaScript ?

`Answer` : JavaScript is an interpreted language. This means that the JavaScript code is not compiled before it is executed. Instead, the JavaScript engine interprets the code at runtime.

## Question - 31 : 

### Is Java and JavaScript the same ?

`Answer` : No, Java and JavaScript are distinct languages. Their similarity in name is coincidental, much like car and carpet. Java is often used for backend and mobile apps, while JavaScript powers web interactivity and backend.

## Question - 32 : 

### What is a JavaScript promise ?

`Answer` : A Promise in JavaScript represents a value that may not be available yet but will be at some point. Promises provide a way to handle asynchronous operations, offering methods like `.then()` and `.catch()` to register callbacks for success and failure.

## Question - 33 : 

### What is `preventDefault()` method in JavaScript ?

`Answer` : The `event.preventDefault()` method is used to prevent the default action of an event. For example, when you click on a link, the default action is to navigate to the link's URL. But, if you want to prevent the navigation, you can use `event.preventDefault()` method.

````Js

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Clicked on link!');
});

 ````
## Question - 34 : 

### What is the output of the flowing code?

````Js

console.log(2**3);

A.5        B.6
C.8        D.9

//Answer : C.8

console.log(2*3);

A.5        B.6
C.8        D.9

//Answer : B.6

 ````

