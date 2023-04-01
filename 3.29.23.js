// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const bmi= weight/ (height * height)
    return bmi <= 18.5 ?  "Underweight" : 
    bmi <= 25 ?  "Normal" :
    bmi <= 30 ?  "Overweight" :
    bmi > 30 ? "Obese":
    ""

  }