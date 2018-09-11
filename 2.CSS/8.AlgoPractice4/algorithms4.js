// Algorithm IV

// Given an array and a value Y, count and print the number of array values greater than Y.
function numAbove(arr, Y) {
    var acc = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>Y) {
            acc++;
        }
    }
    console.log(acc);
}

// Given an array, print the max, min and average values for that array.
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    if (arr.length<=1) {
        console.log(max);
        console.log(min);
        console.log(sum);
        return;
    }
    for (var i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
        }
        if (arr[i]<min) {
            min=arr[i];
        }
        sum+=arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum/arr.length);
}

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(arr) {
    var out = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>=0) {
            out.push(arr[i]);
        } else {
            out.push("Dojo");
        }
    }
    return out;
}


// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeFrom(arr, start, end) {
    //return arr.splice(start, end-start); // excludes end
    //return arr.splice(start+1, (end-start)+1); // excludes start
    return arr.splice(start, (end-start)+1); // inclusive
}



