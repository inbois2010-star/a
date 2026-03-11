let a=10;
let b=a;
a=15;

console.log(b);

const obj1 = {a:5,b:8};
const obj2 = obj1;

obj2.a=10;
console.log(obj1)
console.log(obj2)