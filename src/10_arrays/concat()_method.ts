/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using concat() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [1, 2, 5, 67, 89, 34, 56]
var arr2:number[] = [12, 5, 6, 78, 8]

console.log(arr)
console.log(arr2)

//Adding elements of an array to another array
console.log("Adding all elements of ",arr, " to ", arr2)
arr2 = arr2.concat(arr)	
console.log(arr2)

console.log("Adding 5, 0, 13, 56, 78 to ",arr)
arr = arr.concat(5, 0, 13, 56, 78)
console.log(arr)

var cities:string[] = ["Bangalore", "kondagaon"]
var c1:string[] = ["Bilaspur","Gurgaon"]
var c2:string[] = ["Ompur", "Vyom"]

console.log("Concatenating ", c1 , " and ", c2 , " with ",cities )
cities = cities.concat(c1,c2)
console.log(cities)

/*
[ 1, 2, 5, 67, 89, 34, 56 ]
[ 12, 5, 6, 78, 8 ]
Adding all elements of  [ 1, 2, 5, 67, 89, 34, 56 ]  to  [ 12, 5, 6, 78, 8 ]
[ 12, 5, 6, 78, 8, 1, 2, 5, 67, 89, 34, 56 ]
Adding 5, 0, 13, 56, 78 to  [ 1, 2, 5, 67, 89, 34, 56 ]
[ 1, 2, 5, 67, 89, 34, 56, 5, 0, 13, 56, 78 ]
Concatenating  [ 'Bilaspur', 'Gurgaon' ]  and  [ 'Ompur', 'Vyom' ]  with  [ 'Bangalore', 'kondagaon' ]
[ 'Bangalore', 'kondagaon', 'Bilaspur', 'Gurgaon', 'Ompur', 'Vyom' ]
*/