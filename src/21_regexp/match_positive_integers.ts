/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the positive integers like 123, 234, 1, 34 etc. 
var intRegex = /^\d+$/

var s:string = "123"

if(intRegex.test(s)){	//true
	console.log(s+" is a +ve integer")
}else{
	console.log(s+" is not a +ve integer that matches /^\d+$/")
}

s = "-123"
if(intRegex.test(s)){	//false
	console.log(s+" is a +ve integer")
}else{
	console.log(s+" is not a +ve integer that matches /^\d+$/")
}

/*
123 is a +ve integer
-123 is not a +ve integer that matches /^d+$/
*/