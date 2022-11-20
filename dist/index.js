"use strict";
const user = {
    name: "kazi",
    age: 34,
};
let key;
for (key in user) {
    console.log(key, user[key]);
}
// cloning object
const copyObject = Object.assign({}, user);
console.log(copyObject);
