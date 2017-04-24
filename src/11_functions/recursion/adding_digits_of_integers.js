/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Adding digits of any +ve integer in TypeScript (using Recursion)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function getDigitsSum(n) {
    if (Math.floor(n / 10) == 0) {
        return Math.floor(n);
    }
    return (n % 10) + getDigitsSum(Math.floor(n / 10));
}
console.log("Sum of digits in 348753 is ", getDigitsSum(348753));
console.log("Sum of digits in 645764523 is ", getDigitsSum(645434319));
/*
Sum of digits in 348753 is  30
Sum of digits in 45764523 is  30
*/ 
