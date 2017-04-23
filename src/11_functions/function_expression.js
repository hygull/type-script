/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Using function expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var fact = function (n) {
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
};
console.log("Factorial of 5 is ", fact(5));
console.log("Factorial of 8 is ", fact(8));
/*
Factorial of 5 is  120
Factorial of 8 is  40320
*/ 
