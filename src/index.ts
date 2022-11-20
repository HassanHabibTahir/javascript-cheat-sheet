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
// The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended
