/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using join() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function getJoindString(a)
{
	return a.join("")
}

var arr = [ 67, " is ", " Roll Number.",]
console.log("Joined string representation of ",arr, " => ",getJoindString(arr))

var evens = [2, 44, 0, 98, 2486, 7455432]
console.log("Joined string representation of ",evens, " => ",getJoindString(evens))

/*
Joined string representation of  [ 67, ' is ', ' Roll Number.' ]  =>  67 is  Roll Number.
Joined string representation of  [ 2, 44, 0, 98, 2486, 7455432 ]  =>  24409824867455432
*/