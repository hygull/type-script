/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using split() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function splitContents(s:string)
{
	var arr = s.split("")
	return arr
}

var s = "Rishikesh"
console.log("Splitting  " + s)
console.log("An array containing all characters is ",splitContents(s))

/*
Splitting  Rishikesh
An array containing all characters is  [ 'R', 'i', 's', 'h', 'i', 'k', 'e', 's', 'h' ]
*/