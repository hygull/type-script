/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Using Function constructor in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Example1
var difference = new Function("a", "b","return a-b") //"a:number" or "b:number" won't work

console.log( difference(12,5) );	
console.log( difference(67,98) );
console.log() //newline

//Example2 (my thought based)
var printNumbers = new Function("n","for(var i=0;i<=n;i++){console.log(i)}")
printNumbers(5)
console.log() //newline

//Example3 (my thought based, I searched on internet but failed to get any info related to the use of var args,
//			finally I combined statements inside double quotes, removed type declarations,
//			like => var i:number, and succeeded.
var sum = new Function("...arr", "var s=0; for(var i=0; i< arr.length; i++){ s+= arr[i]}; return s") 

console.log("Sum of 1, 5, 7, 34, 56, 67 & 98 is ",sum(1, 5, 7, 34, 56, 67, 98) )

/*
7
-31

0
1
2
3
4
5

Sum of 1, 5, 7, 34, 56, 67 & 98 is  268
*/