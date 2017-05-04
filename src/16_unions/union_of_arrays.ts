/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using Union of arrays in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var anyArr : number[] | string[]

//Creating an array of integers
anyArr = [ 1, 45, 67, 89 ]

//Adding all the numbers in array
let s:number = 0
for(var value of anyArr){
	s += value
}

console.log("Sum of all the elements in ",anyArr, " is ", s)

//Creating an array of strings
anyArr = ["Bangalore", " is ", " cool ", " place."]
let s2:string = ""

for(let city of anyArr){
	s2 += city
}

console.log("A sentence formed using ",anyArr, " is ",s2)

/*
Sum of all the elements in  [ 1, 45, 67, 89 ]  is  202
A sentence formed using  [ 'Bangalore', ' is ', ' cool ', ' place.' ]  is  Bangalore is  cool  place.
*/
