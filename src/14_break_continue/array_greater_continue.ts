/*
    {
        "created_at" : "6 May 2017",
        "aim_of_script" : "Displaying all the numbers(of an array) greater than 60",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [12, 67, 4, 0, 56, 98, 25, 61, 6,-2,70]

for(var item of arr) {
	if(item > 60) {
		console.log(item)
	}else{
		continue  //Continue with next iteration and skip the execution of succeeding statement(s)
	}
	console.log("Programming is awesome.")
}

/*
67
Programming is awesome.
98
Programming is awesome.
61
Programming is awesome.
70
Programming is awesome.
*/