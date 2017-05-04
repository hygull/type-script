/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using splice() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr = [1, 2, 5, 67, 89, 34, 56];
console.log(arr);
//Adding elements to array
console.log("Adding 12 at position 3...");
arr.splice(3, 0, 12); //postion(required), no. of items to be removed, item to be added
console.log(arr);
console.log("Adding 13, 56, 78 starting at postion 5...");
arr.splice(5, 0, 13, 56, 78);
console.log(arr);
//Removing elements from array
console.log("Removing item from position 4...");
arr.splice(4, 1);
console.log(arr);
console.log("Removing 2 contiguous items starting from index 2...");
arr.splice(2, 2);
console.log(arr);
/*

*/ 
