/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Finding the maximum integer among 3 integers using nested if-else",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function maximum(a, b, c) {
    var maxNumber = a;
    if (a > b) {
        if (c > a) {
            maxNumber = c;
        }
    }
    else {
        if (b > c) {
            maxNumber = b;
        }
        else {
            maxNumber = c;
        }
    }
    return maxNumber;
}
console.log(maximum(12, 45, 56) + " is maximum among 12, 45 & 56");
console.log(maximum(1, 56, 56) + " is maximum among 1, 56 & 56");
console.log(maximum(12, 5, 6) + " is maximum among 12, 5 & 6");
console.log(maximum(12, 45, 5) + " is maximum among 12, 45 & 5");
console.log(maximum(12, 12, 56) + " is maximum among 12, 12 & 56");
console.log(maximum(-1, -4, -6) + " is maximum among -1, -4 & -6");
/*
56 is maximum among 12, 45 & 56
56 is maximum among 1, 56 & 56
12 is maximum among 12, 5 & 6
45 is maximum among 12, 45 & 5
56 is maximum among 12, 12 & 56
-1 is maximum among -1, -4 & -6
*/ 
