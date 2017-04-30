```typescript
admins-MacBook-Pro-3:src admin$ node
> 
> //Creating objects in JavaScript
undefined
> var person = { name:"Darshan Sidar", "age":24, "languages":["C", "C++", "Golang", "Python", "JavaScript"] }
undefined
> console.log( person.name )
Darshan Sidar
undefined
> console.log( person["name"] )  //Another way to print the same
Darshan Sidar
undefined
> person
{ name: 'Darshan Sidar',
  age: 24,
  languages: [ 'C', 'C++', 'Golang', 'Python', 'JavaScript' ] }
> 
> for (item in person){
... console.log(item)
... }
name
age
languages
undefined
> 
> //Printing the values
undefined
> for (item in person){
... console.log(item)
> 
> 
> for (key in person){
... console.log(key)
... }
name
age
languages
undefined
> //Printing the values
undefined
> for (key in person){
... console.log(person.key)
... }
undefined
undefined
undefined
undefined
>
>
> for (key in person){
... console.log(person[key])
... }
Darshan Sidar
24
[ 'C', 'C++', 'Golang', 'Python', 'JavaScript' ]
undefined
> 
```