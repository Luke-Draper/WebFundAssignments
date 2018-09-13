// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns
// that same array, changed to [-1, "big", "big", -5].
function stringPositives(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>=0) {
            arr[i]="big";
        }
	}
	return arr;
}
console.log(stringPositives([-5,2,5,12]));

// Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the
// highest value in the array.
function printLowReturnHigh(arr) {
    var max = arr[0];
    var min = arr[0];
    if (arr.length<=1) {
		console.log(min);
		return max;
    }
    for (var i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
        }
        if (arr[i]<min) {
            min=arr[i];
        }
	}
	console.log(min);
	return max;
}
console.log(printLowReturnHigh([-5,2,5,12]));

// Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return
// first odd value in the array.
function printOneReturnAnother(arr) {
	var odd = 0;
	console.log(arr[arr.length-2]);
    for (var i=0; i<arr.length; i++) {
        if (Math.abs(arr[i])%2==1) {
			return arr[i];
        }
	}
	return 0;
}
console.log(printOneReturnAnother([-5,2,5,12]));

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3])
// should return [2,4,6] without changing original.
function doubleVision(arr) {
	var output = [];
	console.log(arr[arr.length-2]);
    for (var i=0; i<arr.length; i++) {
        output.push(arr[i]*2);
	}
	return output;
}
console.log(doubleVision([-5,2,5,12]));

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1])
// changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
	var acc = 0;
    for (var i=0; i<arr.length; i++) {
		if (arr[i]>=0) {
			acc++;
		}
	}
	arr[arr.length-1] = acc;
	return arr;
}
console.log(countPositives([-5,2,5,12]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the
// array has three evens in a row, print "Even more so!"
function evensAndOdds(arr) {
	var oddacc = 0;
	var evenacc = 0;
    for (var i=0; i<arr.length; i++) {
		if (Math.abs(arr[i])%2==1) {
			oddacc++;
			evenacc = 0;
		} else {
			evenacc++;
			oddacc = 0;
		}
		if (oddacc>=3) {
			console.log("That's odd!");
		}
		if (evenacc>=3) {
			console.log("Even more so!");
		}
	}
}
evensAndOdds([1,1,1,0,0,0,0,1,1,1]);

// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).
// Afterward. console.log each array value and return arr.
function incrementTheSeconds(arr) {
    for (var i=1; i<arr.length; i+=2) {
		arr[i]++;
	}
    for (var i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
	return arr;
}
console.log(incrementTheSeconds([-5,2,5,12]));

// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the
// string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function previousLengths(arr) {
    for (var i=arr.length-1; i>0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLengths(["hello", "dojo", "awesome"]));

// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSevenToMost(arr) {
    var out = [];
    for (var i=1; i<arr.length; i++) {
        out.push(arr[i]+7);
    }
    return out;
}
console.log(addSevenToMost([-5,2,5,12]));

// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(arr) {
	for (var i=0; i<(Math.floor(arr.length/2)); i++) {
		var temp=arr[i];
		arr[i]=arr[arr.length-(1+i)];
		arr[arr.length-(1+i)] = temp;
	}
	return arr;
}
console.log(reverseArray([-5,2,5,12]));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1).
// Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(arr) {
    var out = [];
    for (var i=0; i<arr.length; i++) {
        out.push(Math.abs(arr[i])*-1);
    }
    return out;
}
console.log(outlookNegative([-5,2,5,12]));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food",
// then print "I'm hungry" once.
function alwaysHungry(arr) {
	var hungry = true;
	for (var i=0; i<arr.length; i++) {
		if (arr[i] == "food") {
			console.log("yummy");
			hungry = false;
		}
	}
	if (hungry) {
		console.log("I'm hungry");
	}
}
alwaysHungry(["food", "hungry"]);
alwaysHungry(["hungry", "hungry"]);

// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapTowardCenter(arr) {
	for (var i=0; i<(Math.floor(arr.length/2)); i+=2) {
		var temp=arr[i];
		arr[i]=arr[arr.length-(1+i)];
		arr[arr.length-(1+i)] = temp;
	}
	return arr;
}
console.log(swapTowardCenter([-5,2,5,12]));

// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.
// For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleArray(arr, num) {
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i]*num;
    }
    return arr;
}
console.log(scaleArray([-5,2,5,12], 7));