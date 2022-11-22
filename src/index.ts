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
// console.log(copyObject);

// The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended

// --------------------------------------------------------------------------------
// Default Parameters
function calSum({
  number1,
  number2,
  number3,
}: {
  number1: Number;
  number2: Number;
  number3: Number;
}) {}

//Rest Parameters

function multiply(...args: number[]) {
  let mul = 2;
  for (let num of args) {
    mul = num * mul;
  }
}
// console.log(multiply(1, 2, 3, 4, 5));

// JAVASCRIPT ARRAYS;
let elements = [1, 2, 3, 4, 5, 6, 7, 8];
elements.includes(1, 3);
console.log(elements, "elements--->");
