// Write a function that accepts an array of 10 integers
//  (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    // Extract the first set of numbers (index 0 to 2) and join them into a string
    let firstSet = numbers.slice(0,3).join('');
    console.log(firstSet);
    
    // Extract the second set of numbers (index 3 to 5) and join them into a string
    let secondSet = numbers.slice(3,6).join('');
    console.log(secondSet);
    
    // Extract the third set of numbers (index 6 to 9) and join them into a string
    let thirdSet = numbers.slice(6,10).join('');
    console.log(thirdSet);
    
    // Return the phone number string in the required format
    return `(${firstSet}) ${secondSet}-${thirdSet}`;
}
