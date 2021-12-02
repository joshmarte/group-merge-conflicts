
// function fn(...arr) {
//     if (arr.some((el) => Number.isNaN(Number(el)))) return "All arguments must be numbers.";
//     return arr.reduce((a, b) => a + b);
//   }
  
  // console.log(fn(1, 2, 3)); //> 6
 // console.log(fn(10, "B", 20)); //> error All arguments must be numbers.

function fn(...array) {
  if (!array.every((item) => typeof item === "number"))
    throw "All arguments must be numbers.";
  return array.reduce((acc, curr) => acc + curr);
  console.log(acc, curr);
}

