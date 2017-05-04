/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using Union of arrays in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var anyArr;
//Creating an array of integers
anyArr = [1, 45, 67, 89];
//Adding all the numbers in array
var s = 0;
for (var _i = 0, anyArr_1 = anyArr; _i < anyArr_1.length; _i++) {
    var value = anyArr_1[_i];
    s += value;
}
console.log("Sum of all the elements in ", anyArr, " is ", s);
//Creating an array of strings
anyArr = ["Bangalore", " is ", " cool ", " place."];
var s2 = "";
for (var _a = 0, anyArr_2 = anyArr; _a < anyArr_2.length; _a++) {
    var city = anyArr_2[_a];
    s2 += city;
}
console.log("A sentence formed using ", anyArr, " is ", s2);
/*
Sum of all the elements in  [ 1, 45, 67, 89 ]  is  202
A sentence formed using  [ 'Bangalore', ' is ', ' cool ', ' place.' ]  is  Bangalore is  cool  place.
*/
