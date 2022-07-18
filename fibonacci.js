// Fibonacci Sequence:
// 1, 1, 2, 3, 5, 8, 13, 21, 34....

// Recursive:
function getFib(n) {
  if (n == 3) {
    return 2
  }
  if (n < 3) {
    return 1
  }
  
  return getFib(n-1) + getFib(n-2);
  
}


console.log(getFib(5))

console.log(getFib(8))