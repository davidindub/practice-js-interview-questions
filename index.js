// Given 2 Arrays, Create a function that lets the user know (true/false) whether these two arrays contain any common items:

const array1 = ["a", "b", "c", "x"]
const array2 = ["z", "y", "i"]

const array3 = ["a", "b", "c", "x"]
const array4 = ["z", "y", "x"]


// Questions

function compareArray(arr1, arr2) {
  let commonElements = arr1.filter(element => arr2.indexOf(element) !== -1)
  if (commonElements.length > 0) {
    return true }
    
  else {
    return false
  }
}
  


console.log(compareArray(array1, array2))
console.log(compareArray(array3, array4))