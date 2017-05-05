/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using sort() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr = [8, 12, 2, 34, 1, 56, 78, 7];
console.log("Ascending order :-");
console.log(arr);
//Sorting the array in ascending order(integer array)
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
var arr = [8, 12, 2, 34, 1, 56, 78, 7];
console.log("Descending order :-");
console.log(arr);
//Sorting the array in descending order(integer array)
arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);
//Sorting array of strings
var cities = ["Bangalore", "Dentolla", "Amarpur", "Colbia", "Bamgarh"];
console.log(cities);
cities.sort();
console.log(cities);
/*
Ascending order :-
[ 8, 12, 2, 34, 1, 56, 78, 7 ]
[ 1, 2, 7, 8, 12, 34, 56, 78 ]
Descending order :-
[ 8, 12, 2, 34, 1, 56, 78, 7 ]
[ 78, 56, 34, 12, 8, 7, 2, 1 ]
[ 'Bangalore', 'Dentolla', 'Amarpur', 'Colbia', 'Bamgarh' ]
[ 'Amarpur', 'Bamgarh', 'Bangalore', 'Colbia', 'Dentolla' ]
*/ 
