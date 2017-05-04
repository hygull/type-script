/*
    {
        "created_at" : "3 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the strings with only like abcd, rishi, rojert.
//Strings like Rishikesh, Abcd, ABCD won't be matched.

var intRegex = /^[a-z]+$/ 

var s:string = "rogert"

if(intRegex.test(s)){	//true
	console.log(s+" contains only small case letters")
}else{
	console.log(s+" is not a string that matches /^[a-z]+$/")
}

s = "Rishikesh"
if(intRegex.test(s)){	//false
	console.log(s+" contains only small case letters")
}else{
	console.log(s+" is not a string that matches /^[a-z]+$/")
}

s = "abcd#"
if(intRegex.test(s)){	//false
	console.log(s+" contains only small case letters")
}else{
	console.log(s+" is not a string that matches /^[a-z]+$/")
}

/*
rogert contains only small case letters
Rishikesh is not a string that matches /^[a-z]+$/
abcd# is not a string that matches /^[a-z]+$/
*/