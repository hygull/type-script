```typescript
admins-MacBook-Pro-3:TypeScript admin$ node
> var cities = ["Bangalore", 'Dhamtari', 'Raipur', 'MicoHlux']
undefined
> for(var index=0; index<cities.length; index++){
... console.log( cities[index] )
... }
Bangalore
Dhamtari
Raipur
MicoHlux
undefined
> 
> var i = 0
undefined
> while(i < cities.length){
... console.log( cities[i])
... i += 1
... }
Bangalore
Dhamtari
Raipur
MicoHlux
4
> while(i < cities.length){
... console.log( cities[i])
... i++
... }
undefined
> var i = 0
undefined
> while(i < cities.length){
... console.log( cities[i])
... i++
... }
Bangalore
Dhamtari
Raipur
MicoHlux
3
> i
4
> 
```