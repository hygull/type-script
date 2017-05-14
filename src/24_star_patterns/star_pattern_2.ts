/*
    {
        "created_at" : "14 May 2017",
        "aim_of_script" : "Printing start pattern (Type2)",
        "coded_by" : "Rishikesh Agrawani",
	}
*/

function starPattern(rows:number) {
	for( let row:number=1; row <= rows; ++row) {
			let s = ""
			for( let column:number=1; column<=rows; ++column) {
				if( (row+column) >= (rows+1) )
					s += "*\t"
				else
					s += " \t"
			}
			console.log(s)
	}
}

starPattern(10)

/*
 	 	 	 	 	 	 	 	 	*	
 	 	 	 	 	 	 	 	*	*	
 	 	 	 	 	 	 	*	*	*	
 	 	 	 	 	 	*	*	*	*	
 	 	 	 	 	*	*	*	*	*	
 	 	 	 	*	*	*	*	*	*	
 	 	 	*	*	*	*	*	*	*	
 	 	*	*	*	*	*	*	*	*	
 	*	*	*	*	*	*	*	*	*	
*	*	*	*	*	*	*	*	*	*	

*/