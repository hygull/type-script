/*
    {
        "created_at" : "26 April 2017",
        "aim_of_script" : "Using switch cases in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var myFavNum:number = 67

switch (myFavNum) {
	case 1:
			console.log("(1) My favourite number is ",1)
			break	//Go out side of switch block
	case 67:
			console.log("(2) My favourite number is ",67)			
			break	
	case 64:
			console.log("(3) My favourite number is ",64)
			break
	default:
			console.log("You are not a fan of any number")	//If no cases mathced
}

/*
(2) My favourite number is  67
*/