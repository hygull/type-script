/*
    {
        "created_at" : "11 May 2017",
        "aim_of_script" : "To implement insertion sort in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function insertionSort(a:number[]){
	let n:number = a.length

	//If number of elements in an array is 0 or 1, then sorting is not required.
	//return the array as it is.
	if (a.length <= 1) {
		return a
	}

	//If there are more than 1 elements in an array.
	for(let i:number = 1; i < n; i++) {
		let item:number = a[i]; 
		let j:number = i-1;

		while(j>=0 && a[j] > item) {
			a[j+1] = a[j]
			j = j-1
		}
		a[j+1] = item
	}

	return a
}

//Stater 
function main() {
	console.log("Example 1")
	let arr:number[] = [-12, -34, 5, -0, 40, -2, 7, 50, 42]
	console.log(arr)

	insertionSort(arr)	//reference, arrays are objects
	console.log(arr)

	console.log("Example 2")
	let arr2:number[] = [99,-2, 9801, -1, 55, 34, -5, 0, -81, 324]
	console.log(arr2)

	insertionSort(arr2)	
	console.log(arr2)

	console.log("Example 3")
	let arr3:number[] = [-67]
	console.log(arr3)

	insertionSort(arr3)	
	console.log(arr3)
}

main();

/*
Example 1
[ -12, -34, 5, -0, 40, -2, 7, 50, 42 ]
[ -34, -12, -2, -0, 5, 7, 40, 42, 50 ]
Example 2
[ 99, -2, 9801, -1, 55, 34, -5, 0, -81, 324 ]
[ -81, -5, -2, -1, 0, 34, 55, 99, 324, 9801 ]
Example 3
[ -67 ]
[ -67 ]
*/