/*
    {
        "created_at" : "5 May 2017",
        "aim_of_script" : "Using arrow function as parameter of sort() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
console.log("Ascending order:-");
var arr = [3, 2, 1, 5, 9, 5, 8];
console.log(arr);
//Sorting array of integers in ascending order
arr.sort(function (a, b) { return a - b; });
console.log(arr);
console.log("\nDescending order:-");
arr = [3, 2, 1, 5, 9, 5, 8];
console.log(arr);
//Sorting array of integers in descending order
arr.sort(function (a, b) { return b - a; });
console.log(arr);
/*
Ascending order:-
[ 3, 2, 1, 5, 9, 5, 8 ]
[ 1, 2, 3, 5, 5, 8, 9 ]

Descending order:-
[ 3, 2, 1, 5, 9, 5, 8 ]
[ 9, 8, 5, 5, 3, 2, 1 ]
*/ 
