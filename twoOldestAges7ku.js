// The two oldest ages function/method needs to be completed. 
// It should take an array of numbers as its argument and return the two highest numbers within the array. 
// The returned value should be an array in the format [second oldest age,  oldest age].

function twoOldestAges(ages) {
  // Sort the array of ages in ascending order
  let sortedAges = ages.sort((a, b) => a - b);

  // Get the length of the sorted array
  let length = sortedAges.length;

  //  array to store the two oldest ages
  let oldestAges = [sortedAges[length - 2], sortedAges[length - 1]];

  // Return the array of oldest ages
  return oldestAges;
}
