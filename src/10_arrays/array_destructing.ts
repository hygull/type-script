/*
    {
        "created_at" : "21 April 2017",
        "aim_of_script" : "To present Array destruction in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr:number[] = [ 12, 45, 67, 98, 34, 65 ]

var [ a, b, c, d, e, f ] = arr  //Array Destruction

console.log(a, b, c, d, e, f)

/*
12 45 67 98 34 65
*/