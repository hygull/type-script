/*
    {
        "created_at" : "14 May 2017",
        "aim_of_script" : "Printing start pattern (Type1)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function starPattern(rows) {
    for (var row = 1; row < rows; ++row) {
        var s = "";
        for (var column = 1; column <= row; ++column) {
            s += "*\t";
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
