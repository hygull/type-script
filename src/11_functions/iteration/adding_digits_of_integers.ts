/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Adding digits of any +ve integer in TypeScript (using Iteration)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function getSumOfDigits(n:number){
	var s = 0

	for( ; n!=0; n=Math.floor(n/10)){
		s += n%10
	}
	return s
}

console.log( "Sum of digits in integer 129324 is ", getSumOfDigits(129324))

console.log("Sum of digits in integer 23476982 is ", getSumOfDigits(23476982))

/*
Sum of digits in integer 129324 is  21
Sum of digits in integer 23476982 is  41
*/