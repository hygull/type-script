/*
    {
        "created_at" : "19 April 2017",
        "aim_of_script" : "To implement bubble sort",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function bubbleSort(a) {
    var n = a.length;
    for (var i = n - 2; i >= 0; i--) {
        var swapped = false;
        for (var j = 0; j <= i; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
var arr = [7, 6, -1, 10, 5, 8, -4, 11, 2, 13, -3, 9];
console.log("Before sorting : ", arr);
bubbleSort(arr); //Pass by reference (Arrays are objects)
console.log("After sorting  : ", arr);
