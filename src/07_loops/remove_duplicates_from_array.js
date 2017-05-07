/**
    {
        "created_at" : "7 May 2017",
        "aim_of_script" : "Removing duplicates of an array in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function removeDuplicates(arr) {
    //Defining a blank array
    var tempArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (tempArr.indexOf(item) > -1) {
            //If item already exists then do not add it and continue
            continue;
        }
        tempArr.splice(tempArr.length, 0, item);
    }
    return tempArr;
}
//Definintion of main() function
function main() {
    var array = [34, 5, 1, 34, 67, 23, 6, 67, 5, 1, 3, 5, 67, 34];
    console.log("Array1:-");
    console.log(array);
    console.log("Removing duplicates...");
    console.log(removeDuplicates(array));
    console.log();
    var array2 = [3, 55, -1, 66, 67, 34, 67, -33, 55, 5, 1, -33, -1, 5, 67, 3];
    console.log("Array2:-");
    console.log(array2);
    console.log("Removing duplicates...");
    console.log(removeDuplicates(array2));
}
//Calling starter { main() } function
main();
