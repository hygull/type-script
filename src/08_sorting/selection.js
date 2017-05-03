/*
    {
        "created_at" : "3 May 2017",
        "aim_of_script" : "To implement selection sort",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function selectionSort(a) {
    var n = a.length;
    for (var i = 0; i < (n - 1); i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        var temp = a[minIndex];
        a[minIndex] = a[i];
        a[i] = temp;
    }
}
console.log("Example 1");
var arr = [12, 34, 5, 0, 40, 2, 7, 50, 42];
console.log(arr);
selectionSort(arr); //reference, arrays are objects
console.log(arr);
console.log("Example 2");
var arr2 = [99, -2, 12, -1, 55, 34, 5, 0, 8];
console.log(arr2);
selectionSort(arr2); //reference, arrays are objects
console.log(arr2);
/*
Example 1
[ 12, 34, 5, 0, 40, 2, 7, 50, 42 ]
[ 0, 2, 5, 7, 12, 34, 40, 42, 50 ]
Example 2
[ 99, -2, 12, -1, 55, 34, 5, 0, 8 ]
[ -2, -1, 0, 5, 8, 12, 34, 55, 99 ]
*/ 
