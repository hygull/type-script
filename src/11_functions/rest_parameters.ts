/*
    {
        "created_at" : "22 April 2017",
        "aim_of_script" : "Using rest parameters in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function sum(a:number, b:number, ...rest_parameters:number[])
{
	var total = 0

	for(var i=0;i<rest_parameters.length;i++)
	{
		total += rest_parameters[i]
	}

	return (total + a + b)
}

console.log("Sum of 10 & 20 is",sum(10,20))

console.log("Sum of 10, 20, 45, 34 is ", sum(10,20,45, 34)) //2 rest parameters

console.log("Sum of 23, 45, 56, 78, 23 89 is ", sum(23, 45, 56, 78, 23, 89)) //4 rest parameters

console.log("Sum of 23.98, 89.34, 67.67 is ", sum(23.98, 89.34, 67.67)) // 1 rest parameter
/*
Sum of 10 & 20 is 30
Sum of 10, 20, 45, 34 is  109
Sum of 23, 45, 56, 78, 23 89 is  314
Sum of 23.98, 89.34, 67.67 is  180.99
*/