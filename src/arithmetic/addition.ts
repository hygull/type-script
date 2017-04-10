/*
    {
        "created_at" : "11 April 2017 (before 02:05 am)",
        "aim_of_script" : "To add 2 numbers",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function addition(num1:number, num2:number)
{
	return (num1 + num2)
}

console.log("Sum(12, 23) = " + addition(12, 23))

console.log("Sum(23.67, 26.33) = " + addition(23.67, 26.33))

console.log("Sum(23.67, 26.3) = " + addition(23.67, 26.3))

console.log("Sum(237, 26.33) = " + addition(237, 26.33))

/*
Sum(12, 23) = 35
Sum(23.67, 26.33) = 50
Sum(23.67, 26.3) = 49.97
Sum(237, 26.33) = 263.33
*/