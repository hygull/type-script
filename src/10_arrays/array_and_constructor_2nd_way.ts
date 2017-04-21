/*
    {
        "created_at" : "21 April 2017",
        "aim_of_script" : "Creating array using Array() constructor in TypeScript(2nd way)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = new Array(7);

for (var i=0; i<arr.length; i++){
	arr[i] = i+1
	console.log(arr[i])
}

console.log(arr)

/*
1
2
3
4
5
6
7
[ 1, 2, 3, 4, 5, 6, 7 ]
*/