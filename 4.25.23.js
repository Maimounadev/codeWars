// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result = result * 2 + arr[i];
    }
    return result;
  };
  