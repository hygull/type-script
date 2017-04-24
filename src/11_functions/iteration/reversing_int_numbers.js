/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Reversing digits of any +ve integer in TypeScript(using Iteration)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function reverseDigits(n) {
    var reversedNumber = 0;
    for (; n != 0; n = Math.floor((n / 10))) {
        var remainder = n % 10;
        reversedNumber = (reversedNumber * 10) + remainder;
    }
    return reversedNumber;
}
console.log("1234 reversed form is ", reverseDigits(1234));
console.log("64534 reversed form is ", reverseDigits(64534));
console.log("1912387 reversed form is ", reverseDigits(1912387));
console.log("1984645234 reversed form is ", reverseDigits(1984645234));
/*
1234 reversed form is  4321
64534 reversed form is  43546
1912387 reversed form is  7832191
1984645234 reversed form is  4325464891
*/ 
