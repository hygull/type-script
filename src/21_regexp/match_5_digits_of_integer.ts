/*
    {
        "created_at" : "3 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the positive integers like 12334, 64545, 87656, 67674 etc. 
var intRegex = /^\d{5}$/

var s:string = "12345"

if(intRegex.test(s)){	//true
	console.log(s+" is a +ve integer with 5 digits")
}else{
	console.log(s+" is not a +ve integer that matches /^\d{5}$/")
}

s = "1623"
if(intRegex.test(s)){	//false
	console.log(s+" is a +ve integer with 5 digits")
}else{
	console.log(s+" is not a +ve integer that matches  /^\d{5}$/")
}

s = "975657"
if(intRegex.test(s)){	//false
	console.log(s+" is a +ve integer with 5 digits")
}else{
	console.log(s+" is not a +ve integer that matches   /^\d{5}$/")
}

/*
12345 is a +ve integer with 5 digits
1623 is not a +ve integer that matches  /^d{5}$/
975657 is not a +ve integer that matches   /^d{5}$/
*/