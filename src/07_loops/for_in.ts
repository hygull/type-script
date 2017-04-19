/*
    {
        "created_at" : "19 April 2017",
        "aim_of_script" : "Using for/in in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr:number[] = [ 12, 34, 56, 67, 89, 98.07, 67.67 ]


var index
for(index in arr){
	console.log(arr[index])
}


/*
12
34
56
67
89
98.07
67.67
*/