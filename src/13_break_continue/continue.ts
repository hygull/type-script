/*
    {
        "created_at" : "25 April 2017",
        "aim_of_script" : "Using continue keyword in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Without continue keyword
for(var i:number=1; i<=10;i++)
{
	var s = ""
	for(var j:number=1; j<=10; j++)
	{
		s += (j) + "\t"
	}
	console.log(s)
}

console.log("\n")

//With continue keyword
//Our task is to skip 1 in 1st line, 2 in 2nd line, .... 10 in 10th line.
for(var i:number=1; i<=10;i++)
{
	var s = ""
	for(var j:number=1; j<=10; j++)
	{
		if( i==j ){
			continue //Skip the execution of following code and continue with next iteration
		}		
		s += (j) + "\t"
	}
	console.log(s)
}


/*
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	
1	2	3	4	5	6	7	8	9	10	


2	3	4	5	6	7	8	9	10	
1	3	4	5	6	7	8	9	10	
1	2	4	5	6	7	8	9	10	
1	2	3	5	6	7	8	9	10	
1	2	3	4	6	7	8	9	10	
1	2	3	4	5	7	8	9	10	
1	2	3	4	5	6	8	9	10	
1	2	3	4	5	6	7	9	10	
1	2	3	4	5	6	7	8	10	
1	2	3	4	5	6	7	8	9
*/
