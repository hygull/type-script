/**
    {
        "created_at" : "7 May 2017",
        "aim_of_script" : "Using single inheritance in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Definition of Father class
class Father {
	name : string
	age : number

	//Constructor that creates object for Father class
	constructor(fname:string, fage:number) {
		this.name = fname
		this.age = fage
	}

	//Method that prints the name & age of the current(invoking) object
	getDetails() {
		console.log(`Name : ${this.name}`)
		console.log(`Age  : ${this.age}`)
	}
}

//Definition of Child class that extends Father
//Now attributes name, age and method getDetails() became the members of Child
class Child extends Father{
	isMarried : boolean

	//Constructor that creates object for Child class
	constructor(name:string, age:number, isMarried:boolean) {
		//Passing parameters to Parent's constructor
		super(name, age)	
		this.isMarried = isMarried
	}

	//Method that prints the marital status of the current(invoking) object
	//It is clear that Father is married so only Child need to have this method
	getMaritalStatus() {
		console.log(`Marital status : ${this.isMarried}`)
	} 
}

//Starting point
function main() {	

	//Instantiating Father class
	console.log("Father:-")
	let filip:Father = new Father("King Filip", 49)
	filip.getDetails()

	//New line
	console.log("\nChild:-")	

	//Instantiating Child class 
	let sikandar = new Child("Alexander The Great", 29, true)
	sikandar.getDetails()
	sikandar.getMaritalStatus()
}

//Calling the Starter main() function
main();

/**
Father:-
Name : King Filip
Age  : 49

Child:-
Name : Alexander The Great
Age  : 29
Marital status : true
*/
