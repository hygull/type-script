```typescript
> getTrue = () => true
[Function: getTrue]
> 
> message = ( ) => { if(getTrue()){
... console.log("Great thought")
... } else {
... console.log("Nice place")
... }
... }
[Function: message]
> 
> message()
Great thought
undefined
> getFalse = (a,b) => (a < b)
[Function: getFalse]
> 
> function result(a, b){
... if( getFalse(12, 45) ){
..... console.log("Hello programmers")
..... } else {
..... console.log("Clever fish")
..... }
... }
undefined
> result(45,67)
Hello programmers
undefined
> 
```