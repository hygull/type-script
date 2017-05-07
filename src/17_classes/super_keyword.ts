/**
    {
        "created_at" : "6 May 2017",
        "aim_of_script" : "Using super keyword (to call parent's method) in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
	}
*/

//Interface that describes the structure of food
interface Food {
	food_type:string,
	food_weight:string,
	food_name:string,
}

//Definition of Father class
class Father {

	//supply() method of parent that prints the Food details and message by Child
	supply(food:Food) {
		console.log("Hi Father, I have sent you the food with the following details:-")
		console.log(`Food name   : ${food.food_name}`)
		console.log(`Food weight : ${food.food_weight}`)
		console.log(`Food type   : ${food.food_type}`)
	}
}

//Definition of Child class
class Child extends Father {

	//supply() method that supplies food to Father
	supply(food:Food) {
		//Calling parent's supply() method
		//super keyword
		super.supply(food)	
	}
}

//Starter main() function's definition
function main() {

	//Creating an instance of Child class
	let jackson:Child = new Child()

	console.log("Hello, I am Jackson.")
	console.log("Now I am supplying food to my Father.")
	console.log("=====================================")

	//Calling supply() method of Child class... 
	//Duck typing...
	jackson.supply({food_type : "Indian", food_name : "Fried Rice", food_weight : "200 grams"})
}

//Calling main() function
main()


/**
Hello, I am Jackson.
Now I am supplying food to my Father.
=====================================
Hi Father, I have sent you the food with the following details:-
Food name   : Fried Rice
Food weight : 200 grams
Food type   : Indian
*/
