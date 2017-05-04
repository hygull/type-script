/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "Using object in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Defining object named car
var car = {
	name : "Lamborgini",
	price : "36000000000",
	color : "Red",
	country : "India",
	company : "Toyota"
}

console.log()	//Newline

//Printing car object
console.log(car)

console.log()	//Newline

//Printing specific values
console.log(car.name)
console.log(car.price)
console.log(car.color)
console.log(car.country)
console.log(car.company)

console.log()	//Newline

//Printing keys using for-in loop
for (var key in car){	//key in car => will not work
	console.log(key)
}

console.log()	//Newline

//Printing values usng for-in loop
for(var key in car){
	console.log( car[key] )
}


/*

{ name: 'Lamborgini',
  price: '36000000000',
  color: 'Red',
  country: 'India',
  company: 'Toyota' }

Lamborgini
36000000000
Red
India
Toyota

name
price
color
country
company

Lamborgini
36000000000
Red
India
Toyota
*/



