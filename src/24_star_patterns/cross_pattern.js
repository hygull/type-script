/*
    {
        "created_at" : "14 May 2017",
        "aim_of_script" : "Printing cross pattern",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function starPattern(rows) {
    for (var row = 1; row <= rows; ++row) {
        var s = "";
        for (var column = 1; column <= rows; ++column) {
            if ((row == column) || (row + column == rows + 1))
                s += "*\t";
            else
                s += " \t";
        }
        console.log(s);
    }
}
starPattern(10);
/*
*
    *	 	 	 	 	 	 	*
        *	 	 	 	 	*
            *	 	 	*
                *	*
                *	*
            *	 	 	*
        *	 	 	 	 	*
    *	 	 	 	 	 	 	*
*/ 
