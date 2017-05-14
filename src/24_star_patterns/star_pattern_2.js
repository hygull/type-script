/*
    {
        "created_at" : "14 May 2017",
        "aim_of_script" : "Printing start pattern (Type2)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function starPattern(rows) {
    for (var row = 1; row <= rows; ++row) {
        var s = "";
        for (var column = 1; column <= rows; ++column) {
            if ((row + column) >= (rows + 1))
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
                                *	*
                            *	*	*
                        *	*	*	*
                    *	*	*	*	*
                *	*	*	*	*	*
            *	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
    *	*	*	*	*	*	*	*	*
*/ 
