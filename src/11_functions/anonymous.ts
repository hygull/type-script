/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Anonymous function in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var printMessage = function(){	//Anonymous function with no arguments
	console.log("Hello programmers.");
}

var add = function( num1:number, num2:number){  //Anonymous function with 2 arguments of type number
	return num1 + num2; //Return sum of both numbers
}

printMessage();

console.log( add(12, 45) );

/*
Hello programmers.
57
*/