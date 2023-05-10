// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):

// line 2 is adding a new array method called remove_
Array.prototype.remove_ = function(integer_list, values_list){
    //if the current integer is not in this array, then i want to keep it
    function shouldKeep(currentInteger, values_list) {// trying to figure out if we should keep current integer which is one number 
      for (let i = 0; i < values_list.length; i++) {
        // example of values_list [1, 3]
        // example of values_list[i] 1
        // example of currentInteger 1
        if (currentInteger === values_list[i]) {
          return false
        }
      }
      console.log(currentInteger, values_list)
      return true
    }
    
    
    // start with a for loop with conditional statements, 
    let newArr = []
    for (let i = 0; i < integer_list.length; i++) {
      // we will need to remove from the first array
      console.log(integer_list[i])
      
      let currentInt = integer_list[i] // the interger list is holding one item as the for lopp iterates over the array
     // if currentInt is equal to 1 or equal to 3 in array, remove from array 
      if(shouldKeep(currentInt, values_list)) {
        newArr.push(currentInt)// 
      }
    }
    console.log(newArr)
    return newArr// returning new array of Numbers that we want to keep
  }
  
  