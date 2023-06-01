// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let zeroes = []
    let others = []
    for(let i=0; i<arr.length; i++){
      if(arr[i]===0){
        zeroes.push(arr[i])
      }else{
        others.push(arr[i])
      }
    }console.log(zeroes,others)
    return others.concat(zeroes)
  }