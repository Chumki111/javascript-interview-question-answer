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

`Answer :` No, the `map()` method does not mutate the original array . </br> It returns a new array with the results of calling the provided function on every element in the calling element .  

 const roadMaps = ['JavaScript' , 'React' , 'Node.js']

const reNamedRoadMaps  = roadMaps.map((roadmap) => {
    return `${roadmap} Roadmap`;
})

console.log(roadMaps); // ['JavaScript', 'React', 'Node.js']
console.log(reNamedRoadMaps); // ['JavaScript Roadmap', 'React Roadmap', 'Node.js Roadmap']

 ````
