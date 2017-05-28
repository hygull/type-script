/**
    {
        "created_at": "27 May 2017",
        "aim_of_script": "creating tables of numbers(as a 2D array) in range [1,10] using map() method",
        "coded_by": "Rishikesh Agrawani",
    }
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var twoDArr = 	arr.map( 
					function(r1){
									//Returning an array
									return arr.map(
													function(c1){
														return r1*c1
													}
											)
								}
				)

console.log(twoDArr)
