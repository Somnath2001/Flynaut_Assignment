// 3) Modifying an object and its reference
let obj1 = { greeting: "hello" };
let obj2 = obj1;

obj1["greeting"] = "Bye";

console.log(obj1); // { "greeting": "Bye" }
console.log(obj2); // { "greeting": "Bye" }
