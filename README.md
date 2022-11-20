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
