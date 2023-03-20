// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year){
  if (year.toString().length < 3) return 1;
  const c = +year.toString().slice(0, -2)
  if (year % 100 === 0) return c;
  return c + 1;
  }
