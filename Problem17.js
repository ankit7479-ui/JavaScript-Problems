/* Create an object `user` and test the behavior of
`Object.freeze()` and `Object.seal()` by adding/changing keys. */

let user = {
    name: "alice",
    age: 25 ,
    status: "active",
    email:"alice@gmail.com"
};
Object.freeze(user);
user.age = 30; // This will not change the age property
user.email = "";
console.log(user); // { name: 'alice', age: 25, status: 'active' }
Object.seal(user);
user.status = "inactive"; // This will change the status property