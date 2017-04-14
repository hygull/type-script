/*
    {
        "created_at" : "14 April 2017",
        "aim_of_script" : "Difference between let & var keywords",
        "coded_by" : "Rishikesh Agrawani",
        "link" : "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let"
    }
*/

//var keyword
function printElementsVar(arr:number[])
{
	var i = 11
	console.log("value(i) : ",i)

	{
		var i = 1 //global scope, same variable i
		arr.forEach(
			function(item){
				console.log(i,item)
				i += 1
			}
		)
	}

	console.log("value(i) : ",i) //7
}
printElementsVar( [ 11 ,23, 37, 43, 57, 63])

console.log("------------------------------")

//let keyword
function printElementsLet(arr:number[])
{
	let i = 11
	console.log("value(i) : ",i)
	
	{
		let i = 1  //local scope, a new variable i
		arr.forEach(
			function(item){
				console.log(i,item)
				i += 1
			}
		)
	}

	console.log("value(i) : ",i) //11
}

printElementsLet( [ 11 ,23, 37, 43, 57, 63])

/*
value(i) :  11
1 11
2 23
3 37
4 43
5 57
6 63
value(i) :  7
------------------------------
value(i) :  11
1 11
2 23
3 37
4 43
5 57
6 63
value(i) :  11
*/