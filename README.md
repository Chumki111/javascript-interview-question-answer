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
spread Operator {...obj1} এটা deep clone support করে না। এজন্য আমরা এখানে যখন ১৪ নাম্বার লাইনে, </br>
`const obj2 = { ...obj1 }` করে নতুন একটি অবজেক্ট তৈরি করার চেষ্টা করলাম তখন এটি মুলত নতুন এটি Object (obj2) তৈরি করেছে ঠিকিই। তবে এটি শুধু মাত্র এক স্তর পর্জন্ত কাজ করে। মানে এটি Nested object এর ক্ষত্রে deeply clone করতে পারে না।
এজন্য আমরা যদি (obj1 === obj2) করি তাহলে এটি false return করবে ঠিকিই তবে যদি object এর গভীরে গিয়ে চেক করি যেমন;- </br>
`(obj1.address["post office"] === obj2.address["post office"])` তাহলে এটি অবিশ্বাস্যভাবে true return করবে। </br>
অর্থাৎ এক্ষেত্রে obj2 এর address property এর অন্তর্গত ["post office"] টা, এবং obj1 এর address property এর অন্তর্গত ["post office"] একই পয়েন্ট কে indicate করছে। </br>
এজন্য `obj2.address["post office"].one = "Sadar";` করার ফলে ১৮ নাম্বার লাইনে,
`obj1.address["post office"].one` এর value "Rupsha" টি implicitly ভাবে "Sadar" দিয়ে mutate হয়ে যাচ্ছে। </br>
আর structuredClone(obj1) ক্ষেত্রে, </br>
`const obj2 = structuredClone(obj1);` এই method টি যেহেতু deep clone support করে তাই এটি Nested object গুলোকেও পুরোপুরি ভাবে কপি করে ফলে । </br>
জার জন্য এসময় `obj2.address["post office"].one = "Sadar";` করলেও এটি `obj1.address["post office"].one `এর value কে Mutate করতে পারে না। ফলে ১৮ নাম্বার লাইনে "Rupsha" প্রিন্ট করবে। </br>
আর সবার শেষে `structuredClone()` ওই web API টি মুলত গভীরভাবে নেস্টেট পর্জন্ত deeply object clone করার জন্য ব্যবহার হয়। 