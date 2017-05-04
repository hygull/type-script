/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using simple arrow function in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var addition:Function = (a:number, b:number) => a+b
/*
	function addition(a:number, b:number){
		return a+b
	}
*/

console.log("Addition :-")
console.log(addition( 12, 45) )
console.log(addition( 45, -67))

var factorial:Function = n => {
	if (n==0||n==1){
		return 1
	}

	var f:number = 2
	for(var i:number=3; i <= n; i++){
		f = f*i
	}
	return f
}

console.log("Factorial :-")
console.log( factorial(5))
console.log( factorial(6))
console.log( factorial(0))
console.log( factorial(1))

/*
Addition :-
57
-22
Factorial :-
120
720
1
1
*/
