/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "Type Template, adding members to object(JavaScript allows but TypeScript doesn't)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Creating object named car
var car = {
	name : "Lamborgini",
	price : "36000000000",
	color : "Red",
	country : "India",
	company : "Toyota",

	//Type templates
	printEvens : function() {},	//In JavaScript, this line is not required 
	printOdds : function() {},	//...
	printKeys : function(carObj) {},  //...
}

//Printing 1st 10 even numbers
car.printEvens = function(){
	for(var num:number=2; num<21; num+=2){
		console.log(num)
	}
}

//Printing 1st 10  odd numbers
car.printOdds = function(){
	for(var num:number=1; num<20; num+=2){
		console.log(num)
	}
}

//Printing keys of an object
car.printKeys = function(carObj){
	for(var key in carObj){
		console.log(key)
	}
}

//Starter function
function main(){
	car.printEvens();

	console.log()	//Newline

	car.printOdds();

	console.log()	//Newline

	car.printKeys(car)
}

//Calling starter function to start the execution of this script
main()

/*
2
4
6
8
10
12
14
16
18
20

1
3
5
7
9
11
13
15
17
19

name
price
color
country
company
printEvens
printOdds
printKeys
*/