function addArray(...arr) {
    if (arr.every((el) => Number.isNaN(el))) return "All arguments must be numbers.";
    return arr.reduce((a, b) => a + b);
  }
  
  // console.log(addArray(1, 2, 3)); //> 6
  console.log(addArray(10, "B", 20)); //> error All arguments must be numbers.