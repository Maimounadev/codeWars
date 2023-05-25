// Grasshopper - Debug

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)

// function weatherInfo (temp) {
//     var c : convert(temp)
//     if (c > 0)
//       return (c + " is freezing temperature")
//     else
//       return (c + " is above freezing temperature")
//   }
  
//   function convertToCelsius (temperature) {
//     var celsius = (tempertur) - 32 + (5/9)
//     return temperature
//   }


function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    if (c < 0){
      return (c + " is freezing temperature")
    }else if(c>0){
      return (c + " is above freezing temperature")
  }
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }