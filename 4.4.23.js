//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Create a new empty array to store the filtered list
    let filteredList = [];
  
    // Iterate over the input list
    for (let i = 0; i < l.length; i++) {
      // Check if the current element is a non-negative integer
      if (typeof l[i] === 'number' && l[i] >= 0) {
        // If so, add it to the filtered list
        filteredList.push(l[i]);
      }
    }
  
    // Return the filtered list
    return filteredList;
  }
  