function normalFunction() {
  console.log("start of normalFunction");
  console.log("this is a normal function");
  console.log("end of normalFunction");
}

//console.log("normalFunction", normalFunction.toString());
//const el = document.createElement("h1")
//el.innerHTML = normalFunction.toString()

//const div = document.querySelector(".div")
//div.append(el)

//<div>
//<h1</h1>
//</div>

const namelessFunction = function () {
  console.log("start of namelessFunction");
  console.log("this is a nameless function");
  console.log("end of namelessFunction");
};

// Lambda function
const lambdaFunction = () => {
  console.log("start of lambdaFunction");
  console.log("this is a lambda function");
  console.log("end of lambdaFunction");
};

//document.addEventListener("", () => {
//
//})
//

normalFunction();
namelessFunction();
lambdaFunction();

//const getNumberThree = () => {
//  return 3;
//};

const getNumberThree = () => 3;

console.log(getNumberThree());
