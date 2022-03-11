const arr = [11, 4, 5, 4, 32, 14, 5, 61];
// const arr = ["hello", "world", "javascript", "nodejs"];

// map
const mappedArr = arr.map((val, idx) => val * idx);
console.log("map: ", mappedArr);

// filter
const filteredArr = arr.filter((val, idx) => val !== 3);
console.log("filter: ", filteredArr);

// reduce
// const initialVal = 0
const reducedArr = arr.reduce((prevVal, curVal, curIdx) => {
  // console.log("index", curIdx)
  // console.log("preVal", prevVal)
  // console.log("curVal", curVal)
  // console.log("")
  // return prevVal + curVal
  if (curVal === 3) {
    return prevVal;
  }
  return prevVal.concat(curVal);
}, []);

console.log("reduce: ", reducedArr);

const sortedArr = arr.sort((a, b) => a - b);
console.log("sort: ", sortedArr);

const everyVal = arr.every((val, idx) => val > 60);
console.log("every: ", everyVal);

const someVal = arr.some((val, idx) => val > 70);
console.log("some: ", someVal);

console.log("arr", arr);
