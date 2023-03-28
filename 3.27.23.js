//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

//Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    if (!numbers || numbers.length === 0) {
      return [];
    }
  
    
    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[minIndex]) {
        minIndex = i;
      }
    }
  
    
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      if (i !== minIndex) {
        result.push(numbers[i]);
      }
    }
  
    return result;
  }
  
