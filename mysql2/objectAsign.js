const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(source,"/////1111111");
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === source);
console.log(returnedTarget,"!!!!!!!!!!!!!!!!!!!!!!!!");
// Expected output: true
