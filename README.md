# javascript cheat sheet

## Object

##### Cloning an Object;

```js
interface user {
  name: string;
  age: number;
}
const user: user = {
  name: "kazi",
  age: 34,
};
let key: keyof user;
for (key in user) {
  console.log(key, user[key]);
}
// cloning object
const copyObject = Object.assign({}, user);
console.log(copyObject);
```

##### What are the possible ways to create objects in JavaScript

###### There are many ways to create objects in javascript as below

- Object constructor:

###### The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

```javascript
var object = new Object();
```

- Object's create method:

###### The create method of Object creates a new object by passing the prototype object as a parameter

```javascript
var object = Object.create(null);
```

- Object literal syntax

###### The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

```javascript
var object = {
     name: "junky",
     age: 24
};

Object literal property values can be of any data type, including array, function, and nested object.
```

- Function constructor:

###### Create any function and apply the new operator to create object instances,

```javascript
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("junky");
```

- Function constructor with prototype:

###### This is similar to function constructor but it uses prototype for their properties and methods,

```javascript
function Person() {}
Person.prototype.name = "junky";
var object = new Person();
```

###### This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

```javascript
function func() {}
new func(x, y, z);
```

##### Rest Parameters

```javascript
function multiply(...args: number[]) {
  let mul = 2;
  for (let num of args) {
    mul = num * mul;
  }
}
console.log(multiply(1, 2, 3, 4, 5));
```

## ARRAYS;

The includes() method takes in two parameters – item and fromIndex
1- item is the particular item you are searching for.
2- fromIndex, which is an optional parameter, specifies the index from

```javascript
const nums = [1, 3, 5, 7];
console.log(nums.includes(3));
// true
```

```javascript
const nums = [1, 3, 5, 7];
console.log(nums.includes(8));
// false
```

Array.includes() Starting From a Specified Index
In the last section, we saw how to check if an item existed in an array without using the second parameter in the includes() method.
As a reminder, the second parameter is used to specify the index to start from when searching for an item in an array.
The index of an array starts from 0. So the first item is 0, the second item is 1, the third item is 2, and so on.
Here's an example to show how we can use the includes() method's second parameter:

```javascript
const nums = [1, 3, 5, 7];
console.log(nums.includes(3, 2));
// false
```

The example above returned false even though we had 3 as an item in the array. Here's why:

Using the second parameter, we told the includes() method to search for the number 3 but starting from index 2: nums.includes(3,2).

```javascript
This is the array:  [ 1, 3, 5, 7]

Index 0 = 1.

Index 1 = 3.

Index 2 =  5.

Index 3 = 7.
```

So starting from the second index which is 5, we have only 5 and 7 ([5,7]) to be searched through. This is why searching for 3 from index 2 returned false.

If you change the index to start the search from to 1 then you'd get true returned because 3 can be found within that range. That is:

```javascript
const nums = [1, 3, 5, 7];
console.log(nums.includes(3, 1));
// true
```

Substring is in a String in JavaScript Using the includes() Method
string.includes(substring, fromIndex)

```javascript
const bio = "I am a web developer";
console.log(bio.includes("web"));
// true
```
