function fn(...array) {
  if (!array.every((item) => typeof item === "number"))
    throw "All arguments must be numbers.";
  return array.reduce((acc, curr) => acc + curr);
  console.log(acc, curr);
}

// fn(1, 2, 3)); //> 6
// fn(10, "B", 20); //> error All arguments must be numbers.
