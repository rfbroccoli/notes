console.log("normalFunction: ", normalFunction);
console.log("toString: ", normalFunction.toString());
console.log("typeof: ", typeof normalFunction);
console.log("")

function normalFunction() {
  console.log("start of normalFunction");
  console.log("this is a normal function");
  console.log("end of normalFunction");
}

// const hello = "hello"
// console.log(hello)

// console.log(normalFunction());
// console.log("namelessFunction: ", namelessFunction);
// console.log("toString: ", namelessFunction.toString());
// console.log("typeof: ", typeof namelessFunction);

const namelessFunction = function () {
  console.log("start of namelessFunction");
  console.log("this is a nameless function");
  console.log("end of namelessFunction");
};

console.log("namelessFunction: ", namelessFunction);
console.log("toString: ", namelessFunction.toString());
console.log("typeof: ", typeof namelessFunction);
console.log("")

const arrowFunction = () => {
  console.log("start of arrowFunction");
  console.log("this is a arrow function");
  console.log("end of arrowFunction");
};

console.log("arrowFunction: ", arrowFunction);
console.log("toString: ", arrowFunction.toString());
console.log("typeof: ", typeof arrowFunction);
console.log("")

//normalFunction()

function greet(userName) {
  console.log(`hello ${userName}`);
}

function add(num1, num2) {
  return num1 + num2;
}

greet("broccoli");

console.log(add(2, 3));
