/**
    {
        "created_at": "27 May 2017",
        "aim_of_script": "getting cubes & squares of all integers of an array in a new array",
        "coded_by": "Rishikesh Agrawani",
    }
*/


//A function that returns square of passed parameter
var square = function(n) {
	return n*n
}

//A function that returns cube of passed parameter
var cube = function(n) {
	return n*n*n
}

var arr = [1, 4, 6, 8, 9, 10, 11, 91, 99, 75]

var newSquaredArr = arr.map(square)
var newCubedArr	= arr.map(cube)

console.log("ARRAY:-")
console.log(arr)
console.log("SQUARED ARRAY:-")
console.log(newSquaredArr)
console.log("CUBED ARRAY:-")
console.log(newCubedArr)

/*
ARRAY:-
[ 1, 4, 6, 8, 9, 10, 11, 91, 99, 75 ]
SQUARED ARRAY:-
[ 1, 16, 36, 64, 81, 100, 121, 8281, 9801, 5625 ]
CUBED ARRAY:-
[ 1, 64, 216, 512, 729, 1000, 1331, 753571, 970299, 421875 ]
*/