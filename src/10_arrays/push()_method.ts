/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using push() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [1, 2, 5, 67, 89, 34, 56]

console.log(arr)

//Adding(Pushing elements to array)
console.log("Pushing 12...")
arr.push(12)
console.log(arr)

console.log("Pushing 13, 56, 78...")
arr.push(13, 56, 78)
console.log(arr)

/*
[ 1, 2, 5, 67, 89, 34, 56 ]
Pushing 12...
[ 1, 2, 5, 67, 89, 34, 56, 12 ]
Pushing 13, 56, 78...
[ 1, 2, 5, 67, 89, 34, 56, 12, 13, 56, 78 ]
*/