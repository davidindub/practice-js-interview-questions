arr = ["The quick brown fox jumped over the sleeping dog", "Oozy rat in a sanitary zoo", "Carla loves chocolate"]

// Palindrome: Sequence of letters the same forwards and backwards.
// Remove punctuation and spaces
// Lowercase

arr.forEach(element => {
  element = element.toLowerCase();
  element = element.replaceAll(" ", "");
  backwards_el = element.split("").reverse().join("")
  if (element == backwards_el) {
    console.log("Is a palindrome!")
    return true
  } else {
    console.log("Not a palindrome")
    return false
  }
})