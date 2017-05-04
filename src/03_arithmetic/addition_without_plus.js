/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Adding 2 integer numbers without using + operator",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function adder(number1, number2) {
    while (number2) {
        //The positions where there are similar bits, will be ON
        var carry = number1 & number2;
        //The positions where there are dissimilar bits, will be ON
        number1 = number1 ^ number2;
        //Forwarding bits to left
        number2 = carry << 1;
    }
    return number1;
}
var sum = adder(12, 14);
console.log(sum); //26
var sum2 = adder(34, 56);
console.log(sum2); //90
var sum3 = adder(56, 67);
console.log(sum3); //123
/*
26
90
123
*/ 
