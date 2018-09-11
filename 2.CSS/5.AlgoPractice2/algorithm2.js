// Part 2
// Print 1 to x
// Please complete the codes below to have the function print all the integers from 1 to x.  If x is negative, have it print/log "negative number' and have the function return false.

function printUpTo(x){
  if (x<=0) {
    return false;
  }
  for(var i=1; i<=x; i++) {
    console.log(i);
  }
  return true;
}
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false

// PrintSum
// Please complete the code below to have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
  var sum = 0;
  for(var i=0; i<=x; i++) {
    sum += i;
    console.log(sum);
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640

// PrintSumArray
// Please complete the code below to have the function return the sum of all the values in a given array

function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6

// Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.
function printMaxArray(x){
  var max = x[0];
  for(var i=0; i<x.length; i++) {
    if (x[i]>max) {
      max=x[i];
    }
  }
  return max;
}
console.log( printMaxArray([1,2,3]) ); // should log 3