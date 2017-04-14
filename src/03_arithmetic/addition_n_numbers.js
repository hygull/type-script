/*
    {
        "created_at" : "11 April 2017 (before 02:26 am)",
        "aim_of_script" : "Variable number of arguments(REST ARGUMENTS)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function addition(num1, num2) {
    var nums_arr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums_arr[_i - 2] = arguments[_i];
    }
    var total = num1 + num2;
    if (nums_arr.length != 0) {
        for (var i = 0; i < nums_arr.length; i++) {
            total += nums_arr[i];
        }
    }
    return total;
}
console.log(addition(23, 47));
console.log(addition(23, 27, 67.99));
console.log(addition(45.67, 45.99, 23.45, 45, 50, 5));
/*
70
117.99
215.11
*/
