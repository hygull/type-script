/*
    {
        "created_at" : "14 May 2017",
        "aim_of_script" : "cross inside box pattern",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function starPattern(rows:number) {
	for( let row:number=1; row <= rows; ++row) {
			let s=""
			for( let column:number=1; column <= rows; ++column) {
				if( (row ==1 || row == rows || column == 1 || 
					column == rows || row == column) || (row + column == rows +1) )
					s += "* "
				else
					s += "  "
			}
			console.log(s)
	}
}

starPattern(10)

/*

* * * * * * * * * * 
* *             * * 
*   *         *   * 
*     *     *     * 
*       * *       * 
*       * *       * 
*     *     *     * 
*   *         *   * 
* *             * * 
* * * * * * * * * * 

*/