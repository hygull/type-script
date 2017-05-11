```typescript
> arr = [1, 3, 5, 8, 4, 9, 13, 56, 54]
[ 1, 3, 5, 8, 4, 9, 13, 56, 54 ]
> function isEven(num) {
...    return num % 2 == 0
... }
undefined
> //Get first even element
undefined
> arr.find( isEven )
8
> 
> arr = [1, 3, 0, 5, 8, 4, 9, 13, 56, 21, 54, 63, 67, 88]
[ 1, 3, 0, 5, 8, 4, 9, 13, 56, 21, 54, 63, 67, 88 ]
> 
> //Getting(Printing) all the even elements of an array using find() method
undefined
> function isEven(num){
...  return num%2 == 0
... }
undefined
> 
> function getAllEvens(){
... while (1) {
.....  	value = arr.find( isEven )
.....  	if( value!== undefined ) {	//if(value) ==> if(value == undefined) 
.......   		console.log(value)
.......   		arr.splice(arr.indexOf(value), 1)
.......  	}else{
.......       	 break
.......  	}
.....  }
... }
undefined
> getAllEvens()
0
8
4
56
54
88
undefined
> 
```