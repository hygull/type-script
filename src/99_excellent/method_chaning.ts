/*
    {
        "created_at" : "23 May 2017",
        "aim_of_script" : "Method chaning in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

let arr:number[] = [ 23, 45, 12, 32, 44, 11, 19, 14, 22 ]

console.log(arr)

console.log("\nAdding  7, 98, 89, 77, -6, -23, 50 to an existing array")

//Sorting the new array in descending order
arr =   arr.sort (
			function(num1: number, num2: number) {
				return num1-num2
			}
		).concat([ 7, 98, 89, 77, -6, -23, 50]).sort(
			function(num1: number, num2: number) {
				return num2-num1
			}
		)

console.log("\nSorting new array in descending order:-")
console.log(arr)

/*

[ 23, 45, 12, 32, 44, 11, 19, 14, 22 ]

Adding  7, 98, 89, 77, -6, -23, 50 to an existing array

Sorting new array in descending order:-
[ 98, 89, 77, 50, 45, 44, 32, 23, 22, 19, 14, 12, 11, 7, -6, -23 ]

*/