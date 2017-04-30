```typescript
admins-MacBook-Pro-3:hygull.github.io admin$ node
> 
> var car = {
... name : "Lamborgini",
... price : 56000000000,
... wheels : 4,
... color : "Red",
... company : "Toyota",
... country : "India",
... }
undefined
> car
{ name: 'Lamborgini',
  price: 56000000000,
  wheels: 4,
  color: 'Red',
  company: 'Toyota',
  country: 'India' }
> 
> typeof car
'object'
> 
> string_car = JSON.stringify(car)
'{"name":"Lamborgini","price":56000000000,"wheels":4,"color":"Red","company":"Toyota","country":"India"}'
> 
> typeof string_car
'string'
> 
> car.name
'Lamborgini'
> car.price
56000000000
> car.wheels
4
> car.company
'Toyota'
> car.country
'India'
> car.color
'Red'
> 
> //Converting the string representation to the object
undefined
> var myCarObj = JSON.parse(string_car)
undefined
> //Let us check whether myCarObj contains all the keys and values or not
undefined
> myCarObj.name
'Lamborgini'
> //Great, it is coming
undefined
> myCarObj.wheels
4
> myCarObj.country
'India'
> myCarObj.color
'Red'
> myCarObj.price
56000000000
> 
```