/*
    {
        "created_at" : "25 April 2017",
        "aim_of_script" : "Checking types of data in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var a:number = 10
var f:number = 12.67
var o = { name : "Rishikesh Agrawani", age:24, langauges:["Python", "Golang", "C", "C++"] }
var arr:number[] = [ 12, 45, 6, 7 ]
var t;	//undefined as t has not been assigned any value
var city:string = "Bangalore"
var d = new Date()

console.log(typeof a)		//number
console.log(typeof f)		//number
console.log(typeof o)		//object
console.log(typeof arr)		//object
console.log(typeof t)		//undefined
console.log(typeof city)	//string
console.log(typeof d)		//object

console.log(typeof undefined)	//undefined
console.log(typeof null)	//object
console.log(typeof NaN)	//number

/*
number
number
object
object
undefined
string
object
undefined
object
number
*/