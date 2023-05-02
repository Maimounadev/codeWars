// An isogram is a word that has no repeating letters, consecutive or non-
// consecutive. Implement a function that determines whether a string that
// contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(string) {
    // Convert the string to lowercase to ignore letter case
    string = string.toLowerCase();
    
    // Create a Set to store unique letters
    let uniqueLetters = new Set();
    
    // Iterate over each letter in the string
    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      
      // If the letter is already in the Set, return false
      if (uniqueLetters.has(letter)) {
        return false;
      }
      
      // Otherwise, add the letter to the Set
      uniqueLetters.add(letter);
    }
    
    // If we made it through the loop without returning false, it's an isogram
    return true;
  }
  console.log(isIsogram("Alphabet")); // true
  console.log(isIsogram("isogram")); // true
  console.log(isIsogram("hello")); // false
  console.log(isIsogram("world")); // false
  console.log(isIsogram("")); // true- empty string is isogram
    