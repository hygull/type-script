// var i:number = 1
// while(i<=10)
// {
// 	console.log(i)
// 	i += 1
// }
//-----
// for(var i:number=1; i<=10; i++){
//    console.log(i)
// }
//-----
// var i:number = 1
// do
// {
// 	console.log(i)
// 	i += 1
// }while(i<=10);
//----
// var arr:number[] = [34, 67, 89, -56, 98.45, 0, 65]
// for(var i=0; i<arr.length; i++){
// 	console.log(arr[i])
// }
/*
34
67
89
-56
98.45
0
65
*/
var arr = [34, 67, 89, -56, 98.45, 0, 65];
for (var index in arr) {
    console.log(arr[index]);
}
