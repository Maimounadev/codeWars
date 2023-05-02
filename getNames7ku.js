// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.


function getNames(data) {
    let names = [];
  
    // Iterate over each element in the data array
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      
      // Retrieve the name property from the current item
      let name = item.name;
      
      // Add the name to the names array
      names.push(name);
    }
  
    // Return the names array
    return names;
  }
  
  