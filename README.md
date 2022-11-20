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
