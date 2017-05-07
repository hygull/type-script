# TypeScript

A typed superset of JavaScript
It is an open source technology
Source files will have extension as.ts

### Quick start
[typescriptlang.org](https://www.typescriptlang.org/docs/tutorial.html)

### TSC (TypeScript Compiler)
It is a source-to-source compiler
It is known as transcompiler or transpiler

### Environment Setup (For Windows and MAC OS X)
1.  Text editor - based on the OS (Sublime text, notepad, Notepad++, vim, vi Emacs etc.)
2.  Node.js - Download installer from [here](https://nodejs.org/en/download/)

    (a) Open terminal and execute   __node --version__ or __node -v__

    (b) Then execute __npm install -g typescript__

3.  Installation of IDEs (Optional)

```
admins-MacBook-Pro-3:TypeScript admin$ node --version
v7.0.0
```

```
admins-MacBook-Pro-3:TypeScript admin$ npm install -g typescript
/usr/local/bin/tsc -> /usr/local/lib/node_modules/typescript/bin/tsc
/usr/local/bin/tsserver -> /usr/local/lib/node_modules/typescript/bin/tsserver
/usr/local/lib
└── typescript@2.2.2 
```

Visit [here](https://www.tutorialspoint.com/typescript/typescript_environment_setup.htm) to check about the installation process on Linux.


```javascript
//hello.ts
function hello(){
 console.log("Hello world");
}

hello();
```

```
admins-MacBook-Pro-3:src admin$ tsc hello.ts 

admins-MacBook-Pro-3:src admin$ ls
hello.js    hello.ts

admins-MacBook-Pro-3:src admin$ node hello.js
Hello world
```

### TypeScript Plugin
[for sublime text 3](https://packagecontrol.io/packages/TypeScript)

### Designer 
Anders Hejlsberg [know more...](https://en.wikipedia.org/wiki/Anders_Hejlsberg)

### Features
1. Statically typed, 
2. Portable
3. It is JavaScript. Means .js files can be renamed to __.ts__

### TypeScript equals
ECMASCRIPT5 + ECMASCRIPT6 + Additional features 

### Features
Supports Inheritance & Interface

### Components
1.  Language
2.  TypeScript Compiler
3.  Language Service

### Declaration File

When a TypeScript script gets compiled, there is an option to generate a declaration 
file (with the extension d.ts) that functions as an interface to the components in the
compiled JavaScript. 
 
```
admins-MacBook-Pro-3:src admin$ tsc -d hello.ts

admins-MacBook-Pro-3:src admin$ ls
hello.d.ts  hello.js    hello.ts

admins-MacBook-Pro-3:src admin$ cat hello.d.ts 
declare function hello(): void;
```

###### Typescript playground
[Run typescript code here](https://www.typescriptlang.org/play/)

---

# Notes
### TypeScript Program
###### A TypeScript program is composed of the following:
###### 1) Modules
###### 2) Comments
###### 3) Functions
###### 4) Variables
###### 5) Statements and Expressions

### Compiler flags
###### --declaration, --out, --watch, --help, --removeComments, --target, --module.

### Valid identifiers
###### $name, _name, rishi67, rishi_1, Rishi_1 (TypeScript is case sensitive).

### Comments
###### // is used for single line comment 
###### /**/  is used for multiline comment


eg.
```javascript
    //created_on : 14 March 2017
    //coded_by : Rishikesh Agrawani
```

or

```javascript
/*
    created_on : 14 March 2017
    coded_by : Rishikesh Agrawani
*/  
```

### What is object?
###### According to Grady Brooch, every object must have 3 features, 1) State, 2) Behaviour, 3) Identity

### What is the importance of methods?
###### Methods facilitate communication between objects.

### How will I run TypeScript?
1)  Install Node.js from [here](https://nodejs.org/en/download/)
2)  npm install -g typescript  (Open terminal and run this command)
3)  Create TypeScript file  (File name's extension should be ts, eg. you created hello.ts)
4)  tsc hello.ts   (Compile TypeScript file using tsc command, it will compile to hello.js on successful compilation)
5)  node hello.js  (Run js file using node command)

### Difference between let & var keywords
Visit [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let) to read about the difference. It is nice.

### The Any Type
It is the super type of all the types in TypeScript

### All built-in types in TypeScript (There is Integer type in TypeScript and JavaScript)
1)  Number  :   Double precision 64 bit floating point values(used to represent integers and fractions)     
2)  String  :   Sequence of unicode characters
3)  Boolean :   true/false
4)  Void    :   Used as function's return type
5)  Null    :   Used to represent an intentional absence of object's value
6)  Undefined : It denotes a value given to all uninitialized variables

### Are null and undefined same?
They are not same.

### Variable
A named space in the memory that stores value.

### Declaration of variables in TypeScript (4 ways)
```javascript
var name : string = "Rishikesh";   //type & value in 1 statement, here string is type-annotaion

var name : string;  //only type, in this case name will be set to undefined

var name = "Rishikesh";     //only value, in this case name's type will be set to any

var name;  //neither type nor value, in this case name's type will be set to any and value willl be set to undefined
```

### Type Assetion
The process of changing a variable from one type to another.

eg.
```javascript
    var strNum = "1235x";
    console.log(typeof strNum)
    var num : number = <number> <any> strNum;
```

### Inferred typing
TypeScript is strongly typed 

It also encourages dynamic typing of variables 

TypeScript finds the first usgae of variable within the code, determines the type to 
which it has been initially set and then assume the same type for this variable in the 
rest of our code

### Switch cases
Switch case is an important control statement in TypeScript.

It allows us to have the functionality of if else statements.
```javascript
/*
    {
        "created_at" : "26 April 2017",
        "aim_of_script" : "Using switch cases in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var myFavNum:number = 67

switch (myFavNum) {
    case 1:
            console.log("(1) My favourite number is ",1)
            break   //Go out side of switch block
    case 67:
            console.log("(2) My favourite number is ",67)           
            break   
    case 64:
            console.log("(3) My favourite number is ",64)
            break
    default:
            console.log("You are not a fan of any number")  //If no cases mathced
}

/*
(2) My favourite number is  67
*/
```

The following code shows another example of switch case (with string parameter)
```typescript
/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "Using switch cases in TypeScript with strings",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function getMessages(name){

        switch(name){
            case "Apple":
                            console.log("Apple is my nice fruit")
                            break   //Go outside of the switch body
            case "Mango":
                            console.log("Mango is my nice fruit")
                            break   
            case "Pine Apple":
                            console.log("Pine Apple is my nice fruit")
                            break
            default:
                            console.log("There is no fruit in my bag")
        }
}

var fruits:string[] = ["Pine Apple","Apple","Popaya", "Mango"] 

for( var i:number=0; i<fruits.length; i++){
    getMessages(fruits[i] )
} 

/*
Pine Apple is my nice fruit
Apple is my nice fruit
There is no fruit in my bag
Mango is my nice fruit
*/
```

The following shows other usage of switch case (using numbers and strings)
```typescript
/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "Using complicated constant expressions as case value",
        "coded_by" : "Rishikesh Agrawani",
    }
*/



function printMessages(n:number|string){ //Unions
    switch(n){
        case 4+5:
                    console.log("This is 9")
                    break
        case (6+7)*3:
                    console.log("This is 39")
                    break
        case "Nagpur":
                    console.log("This is Nagpur")
                    break
        case 45/4:
                    console.log("This is 11.25")
                    break
        case 56+9-3:
                    console.log("This is 62")
                    break
        default:
                    console.log("I didn't find any valid number")
    }
}

var arr:number[] = [9, 39, 11.25, 62];

for(var i:number=0;i<arr.length;i++){
    printMessages( arr[i] )
}

printMessages("Nagpur")

printMessages("Raipur")
```


### 5 loops and forEach() method(to iterate over arrays) in TypeScript
1)  for loop
```javascript
/*
    {
        "created_at" : "17 April 2017",
        "aim_of_script" : "Using for loops in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr:number[] = [ 12, 34, 56, 67, 89, 98.07, 67.67 ]

var sum = 0

for(var i=0; i< arr.length;i++){
    sum += arr[i]
}

console.log("Sum of all elements of ", arr, " is ",sum)
/*
Sum of all elements of  [ 12, 34, 56, 67, 89, 98.07, 67.67 ]  is  423.74
*/
```
##### Another example
```javascript
/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Prining table of numbers in range [1,10] using for loops",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

for(var i:number=1; i<=10; i++)
{
    var s:string = ""
    for(var j:number=1; j<=10; j++)
    {
        s += i*j+"\t";  //Concatenation
    }
    console.log(s)
    console.log("\n");
}

/*
1   2   3   4   5   6   7   8   9   10  


2   4   6   8   10  12  14  16  18  20  


3   6   9   12  15  18  21  24  27  30  


4   8   12  16  20  24  28  32  36  40  


5   10  15  20  25  30  35  40  45  50  


6   12  18  24  30  36  42  48  54  60  


7   14  21  28  35  42  49  56  63  70  


8   16  24  32  40  48  56  64  72  80  


9   18  27  36  45  54  63  72  81  90  


10  20  30  40  50  60  70  80  90  100 


*/
```

2) for...in loop
```javascript
/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using for...in in TypeScript",
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
```

3) for...of loop 

This loop is introduced in ES6 as unlike for..in loop, it allows us to iterate over the 
array correctly logging out the members as expected.

```typescript
/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Using for...of loop in TypeScript(introduced in ES6)",
        "coded_by" : "Rishikesh Agrawani",
        "link" : "https://basarat.gitbooks.io/typescript/docs/for...of.html",
    }
*/

var cities = ["Bangalore", "Raipur", "Dhamtari", "Kondagaon", "Lailunga"]

for(let city of cities){
    console.log(city)
}

/*
Bangalore
Raipur
Dhamtari
Kondagaon
Lailunga
*/
```

4) while loop
```javascript
/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using while loop in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr:number[] = [67, 57, 83, 31, 97, 53]

var i:number = 0

while( i < arr.length )
{
    console.log( arr[i] )
    i += 1
}
/* 
67
57
83
31
97
53
*/
```


5) do-while loop
```javascript
/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using do-while loop in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr:number[] = [67, 57, 83, 31, 97, 53]

var i:number = 0

do
{
    console.log( arr[i] )
    i += 1
}while( i < arr.length )   //Semicolon is optional at end
```

6)  forEach() method 
```javascript
/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using forEach() method in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var arr:number[] = [1,2,3,4,5]

arr.forEach(
    function(item){
        console.log(item)
    }
)
/*
1
2
3
4
5
*/
```

### break keyword
break keyword is used to take the control out of the loop or switch case construct.

```javascript
/*
    {
        "created_at" : "25 April 2017",
        "aim_of_script" : "Using break keyword in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//Without break keyword
for (var i = 1; i <= 10; i++) {
    var s = "";
    for (var j = 1; j <= 10; j++) {
        s += (i * j) + "\t";
    }
    console.log(s);
}
console.log("\n"); //Newline
//With break keyword 
//Suppose our intension is to print only first 5 multiples of numbers in range [1-10]
for (var i = 1; i <= 10; i++) {
    if (i == 6) {
        break; //Go outside of outer for loop
    }
    var s = "";
    for (var j = 1; j <= 10; j++) {
        s += (i * j) + "\t";
    }
    console.log(s);
}
/*
1   2   3   4   5   6   7   8   9   10
2   4   6   8   10  12  14  16  18  20
3   6   9   12  15  18  21  24  27  30
4   8   12  16  20  24  28  32  36  40
5   10  15  20  25  30  35  40  45  50
6   12  18  24  30  36  42  48  54  60
7   14  21  28  35  42  49  56  63  70
8   16  24  32  40  48  56  64  72  80
9   18  27  36  45  54  63  72  81  90
10  20  30  40  50  60  70  80  90  100


1   2   3   4   5   6   7   8   9   10
2   4   6   8   10  12  14  16  18  20
3   6   9   12  15  18  21  24  27  30
4   8   12  16  20  24  28  32  36  40
5   10  15  20  25  30  35  40  45  50
*/ 
```

### continue keyword
```javascript
/*
    {
        "created_at" : "25 April 2017",
        "aim_of_script" : "Using continue keyword in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Without continue keyword
for(var i:number=1; i<=10;i++)
{
    var s = ""
    for(var j:number=1; j<=10; j++)
    {
        s += (j) + "\t"
    }
    console.log(s)
}

console.log("\n")

//With continue keyword
//Our task is to skip 1 in 1st line, 2 in 2nd line, .... 10 in 10th line.
for(var i:number=1; i<=10;i++)
{
    var s = ""
    for(var j:number=1; j<=10; j++)
    {
        if( i==j ){
            continue //Skip the execution of following code and continue with next iteration
        }       
        s += (j) + "\t"
    }
    console.log(s)
}


/*
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  
1   2   3   4   5   6   7   8   9   10  


2   3   4   5   6   7   8   9   10  
1   3   4   5   6   7   8   9   10  
1   2   4   5   6   7   8   9   10  
1   2   3   5   6   7   8   9   10  
1   2   3   4   6   7   8   9   10  
1   2   3   4   5   7   8   9   10  
1   2   3   4   5   6   8   9   10  
1   2   3   4   5   6   7   9   10  
1   2   3   4   5   6   7   8   10  
1   2   3   4   5   6   7   8   9
*/
```

### Array in  TypeScript
```javascript
//Declaration example
var arr:number[];

//Declaration & initialization example
var arr2:number[] = [ 1, 5, 7, -3, 0, 34 ]

var arr3:number[];  //Declaration
arr3 = [ 5, 8, 11 ]    //Initialization
```

##### Features (Like C/C++)
1)  Arrays are static.
2)  Elements are stored in a sequential/contiguous memory blocks.
3)  Array elements can be updated but can not be deleted.
4)  Elements are accessed using subscript/index.

```javascript
/*
    {
        "created_at" : "21 April 2017",
        "aim_of_script" : "Using array in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Creating array in TypeScript
var arr : number[] = [ 1, 67, 2, 54, 3, 89, 71, -56, 0, -1 ]

//Iterating over an array arr
for(var i=0; i<arr.length; i++){
    console.log(arr[i])
}

//Creating another array of strings
var cities:string[];
cities = [ "Raipur", "Dhamtari", "Bangalore", "Jagdalpur" ];
console.log( cities );


/*
1
67
2
54
3
89
71
-56
0
-1
[ 'Raipur', 'Dhamtari', 'Bangalore', 'Jagdalpur' ]
*/
```

##### Creating array using Array() constructor
```javascript
//Creating an array of strings using Array constructor
var languages = new Array("C", "C++", "Core Java", "Go", "Python", "PHP", "JavaScript");

console.log("I like the following programming languages")

for(var i=0; i<languages.length; i++){
    console.log((i+1)+")",languages[i])
} 

/*
I like the following programming languages
1) C
2) C++
3) Core Java
4) Go
5) Python
6) PHP
7) JavaScript
*/
```

##### Creating array using Array() constructor( 2nd way )
```javascript
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
```
##### Array destructing
It refers to breaking up the structure of an entity. TypeScript supports destructing
when used in the context of an array.
```javascript
var arr:number[] = [ 12, 45, 67, 98, 34, 65 ]

var [ a, b, c, d, e, f ] = arr  //Array Destruction

console.log(a, b, c, d, e, f)

/*
12 45 67 98 34 65
*/
```

### Functions in TypeScript
Function is defined as a self contained block that is esigned to perform a coherent task of some kind.
It is a set of statements that performs a specific task.
```javascript
/*
    {
        "created_at" : "22 April 2017",
        "aim_of_script" : "Using functions in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function printMessage()
{
    console.log("Hello programmers.")
}

function myDetails(name:string, age:number)
{
    console.log("I am "+name+". I am "+age+" years old.")
}

printMessage();

myDetails("Rishikesh Agrawani", 24);

/*
Hello programmers.
I am Rishikesh Agrawani. I am 24 years old.
*/
```

##### Optional argument 
Optional parameters are parameters that is not compulsorily passed to function while calling it.

It need not to be passed to a function compulsorily.

If we will not supply any value for optional argument, nothing will happen.

```javascript
//Here height is optional argument and length, width are required arguments
function getAreaOrVoulme(length:number, width:number, height?:number)
{
    if( height == undefined)
    {
        return (length*width) //return base area of room    
    }
    else
    {
        return (length*width*height)    //return volume of the room
    }
}

console.log("Base area of room with height 10m and width 12m will be ", getAreaOrVoulme(10,12), "sq. metre.")

console.log("Volume of room with height 23m, width 10m & height 20 will be ", getAreaOrVoulme(23, 10, 20), "cube metre.")

/*
Base area of room with height 10m and width 12m will be  120 sq. metre.
Volume of room with height 23m, width 10m & height 20 will be  4600 cube metre.
*/
```

##### Rest parameters
Rest parameters are similar to the variable number of arguments in Java. 

Rest parameters don't restrict number of parameters that we can pass to function.

Rest parameter name should be preceded with 3 dots.

All rest parameter should be of same type.

```javascript
function sum(a:number, b:number, ...rest_parameters:number[])
{
    var total = 0

    for(var i=0;i<rest_parameters.length;i++)
    {
        total += rest_parameters[i]
    }

    return (total + a + b)
}

console.log("Sum of 10 & 20 is",sum(10,20))

console.log("Sum of 10, 20, 45, 34 is ", sum(10,20,45, 34)) //2 rest parameters

console.log("Sum of 23, 45, 56, 78, 23 89 is ", sum(23, 45, 56, 78, 23, 89)) //4 rest parameters

console.log("Sum of 23.98, 89.34, 67.67 is ", sum(23.98, 89.34, 67.67)) // 1 rest parameter
/*
Sum of 10 & 20 is 30
Sum of 10, 20, 45, 34 is  109
Sum of 23, 45, 56, 78, 23 89 is  314
Sum of 23.98, 89.34, 67.67 is  180.99
*/
```

##### Default parameters
Whenever we are going to pass some common values in different functions calls by changing
the values of few parameters then we should use those common valued parameters as default 
parameters.

```javascript
/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Using default parameters in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function showDetails(name="Rishikesh Agrawani", age=24, city="Kondagaon", state="Chhattisgarh", country="India")
{
    console.log("My name is "+name)

    console.log("I am "+age+" years old.")

    console.log("I lives in "+city+".")

    console.log("Which is in "+state+ " state of country "+country+".\n")
}

showDetails()

showDetails("Suryapratap Surya")

showDetails("Hemkesh", 22)

showDetails("Virendra Sehwag", 38, "Najafgarh", "Delhi")

/*
My name is Rishikesh Agrawani
I am 24 years old.
I lives in Kondagaon.
Which is in Chhattisgarh state of country India.

My name is Suryapratap Surya
I am 24 years old.
I lives in Kondagaon.
Which is in Chhattisgarh state of country India.

My name is Hemkesh
I am 22 years old.
I lives in Kondagaon.
Which is in Chhattisgarh state of country India.

My name is Virendra Sehwag
I am 38 years old.
I lives in Najafgarh.
Which is in Delhi state of country India.

*/
```

##### Anonymous function
A function that is not bound to a name is known as an anonymous function.

Anonymous functions are dynamically declared at runtime.

```javascript
/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Anonymous function in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var printMessage = function(){  //Anonymous function with no arguments
    console.log("Hello programmers.");
}

var add = function( num1:number, num2:number){  //Anonymous function with 2 arguments of type number
    return num1 + num2; //Return sum of both numbers
}

printMessage();

console.log( add(12, 45) );

/*
Hello programmers.
57
*/
```
##### function expression
An anonymous function can be assigned to a variable, such an expression is known as
function expression.
```javascript
/*
    {
        "created_at" : "23 April 2017",
        "aim_of_script" : "Using function expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var fact = function(n:number){ //function expression
    var f = 1
    for(var i=1; i<=n;i++){
        f *= i
    }
    return f;
}

console.log("Factorial of 5 is ",fact(5))

console.log("Factorial of 8 is ",fact(8))

/*
Factorial of 5 is  120
Factorial of 8 is  40320
*/
```

##### Function constructor
Functions can also be defined using the built-in constructor named Function.

```javascript
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
//          finally I combined statements inside double quotes, removed type declarations,
//          like => var i:number, and succeeded.
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
```

##### Recursion
It is the process of defining something in terms of itself.
In recursion a function calls itself from within its body.
It is very important concept in programming as it is very useful in searching, traversing
in Trees, Graphs etc. There are many other applications too.

###### Iterative implementation
```javascript
/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Reversing digits of any +ve integer in TypeScript(using Iteration)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function reverseDigits(n:number){
    var reversedNumber = 0;

    for(  ; n!=0 ; n=Math.floor((n/10)) )  // n/10 returns float if numerator is not a factor of denominator
    {
        var remainder = n%10
        reversedNumber = (reversedNumber*10) + remainder
    }
    return reversedNumber
}

console.log("1234 reversed form is ", reverseDigits(1234))
console.log("64534 reversed form is ", reverseDigits(64534))
console.log("1912387 reversed form is ", reverseDigits(1912387))
console.log("1984645234 reversed form is ", reverseDigits(1984645234))

/*
1234 reversed form is  4321
64534 reversed form is  43546
1912387 reversed form is  7832191
1984645234 reversed form is  4325464891
*/
```

###### Recursive implementation
```javascript
/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Reversing digits of any +ve integer in TypeScript(using Recursion)",
        "coded_by" : "Rishikesh Agrawani",
        "special" : "My own approach to reverse the digits"
    }
*/

function reverseDigits(n:number){

    if( Math.floor(n/10)==0)
    {
        return Math.floor(n) + ""   //Concatenation
    }

    // "" string is required, placing "" at end will generate improper result
    return  parseInt((n%10) + "" + reverseDigits(Math.floor(n/10)) )    //Recursive call 
}

var revNum = reverseDigits(1234)

console.log("1234 reversed form is ", revNum)
console.log("Type of ",revNum," is ", typeof revNum)

console.log("64534 reversed form is ", reverseDigits(64534))
console.log("1912387 reversed form is ", reverseDigits(1912387))
console.log("1984645234 reversed form is ", reverseDigits(1984645234))

/*
1234 reversed form is  4321
Type of  4321  is  number
64534 reversed form is  43546
1912387 reversed form is  7832191
1984645234 reversed form is  4325464891
*/
```

##### Iteration (Another example)
```javascript
/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Adding digits of any +ve integer in TypeScript (using Iteration)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function getSumOfDigits(n:number){
    var s = 0

    for( ; n!=0; n=Math.floor(n/10)){
        s += n%10
    }
    return s
}

console.log( "Sum of digits in integer 129324 is ", getSumOfDigits(129324))

console.log("Sum of digits in integer 23476982 is ", getSumOfDigits(23476982))

/*
Sum of digits in integer 129324 is  21
Sum of digits in integer 23476982 is  41
*/
```
    
##### Recursion (Another example)
```javascript
/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Adding digits of any +ve integer in TypeScript (using Recursion)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function getDigitsSum(n:number){

    if(Math.floor(n/10)==0){
        return Math.floor(n)
    }

    return  (n%10) + getDigitsSum(Math.floor(n/10))
}

console.log( "Sum of digits in 348753 is ",getDigitsSum(348753))

console.log("Sum of digits in 645764523 is ",getDigitsSum(645434319))

/*
Sum of digits in 348753 is  30
Sum of digits in 645764523 is  39
*/
```

### Checking type of objects
```javascript
/*
    {
        "created_at" : "25 April 2017",
        "aim_of_script" : "Checking types of data in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var a:number = 10
var f:number = 12.67
var o = { name : "Rishikesh Agrawani", age:24, langauges:["Python", "Golang", "C", "C++"] }
var arr:number[] = [ 12, 45, 6, 7 ]
var t;  //undefined as t has not been assigned any value
var city:string = "Bangalore"
var d = new Date()

console.log(typeof a)       //number
console.log(typeof f)       //number
console.log(typeof o)       //object
console.log(typeof arr)     //object
console.log(typeof t)       //undefined
console.log(typeof city)    //string
console.log(typeof d)       //object

console.log(typeof undefined)   //undefined
console.log(typeof null)    //object
console.log(typeof NaN) //number

/*
number
number
object
object
undefined
string
object
undefined
object
number
*/
```

### Union type
Union type gives us the ability to combine one or two types.

Union types provide us a powerful way to express a value that can be one of the several types.
```javascript
/*
    {
        "created_at" : "25 April 2017",
        "aim_of_script" : "Using Union type in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var a:number|string     //Declaring Union type

a = 12;     //Assigning integer value

console.log(a)  //Printing a's value on console

console.log(typeof a)   //Checking the type of a

a = "Bangalore"     //Reassigning string value to a

console.log(a)      //Printing a's value on console

console.log(typeof a)   //Checking the type of a

/*
12
number
Bangalore
string
*/
```

### Classes 
Class is a blueprint for creating objects. A class encapsulates data for object.
TypeScript gets this feature from ES6.

More details on class can be found [here](https://www.typescriptlang.org/docs/handbook/classes.html)

class keyword is used to declare a class in TypeScript.
```typescript
/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "Using classes in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
class Book{
    name:string     //var keyword is not used while declaring a field
    price:number
    pages:number
    // author:string

    //constructor, it is responsible for allocating memory for the objects.
    constructor(bookName:string, bookPrice:number, bookPages:number){
        this.name = bookName
        this.price = bookPrice
        this.pages = bookPages
    }

    //function sometimes referred to as method
    getBookDetails():void{
        console.log("Book name    : ",this.name)
        console.log("Book's price : ",this.price)
        console.log("Book Pages   : ",this.pages)
    }
}

function main(){
    var book1:Book = new Book("Let us C", 350.50, 500)
    book1.getBookDetails()

    console.log()

    var book2:Book = new Book("Mastering C++", 459.77, 830)
    book2.getBookDetails()

}

main();

/*
Book name    :  Let us C
Book's price :  350.5
Book Pages   :  500

Book name    :  Mastering C++
Book's price :  459.77
Book Pages   :  830
*/
```

this keyword avoids the ambiguity in case when the field names are same as the parameter names of constructor. 
```javascript
/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "To represent the importance of this keyword in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

class College{
    name:string
    branches:string[]
    likes:number
    totalStudents:number

    //Here this keyword overcomes ambiguity as local parameter names is same as field names
    constructor(name,branches, likes, totalStudents){
        this.name = name
        this.branches = branches
        this.likes = likes
        this.totalStudents = totalStudents
    }

    getCollegeDetails():void{   //function keyword is not required here
        console.log("Colege name : ",this.name)
        console.log("Branches : ",this.branches)
        console.log("Likes : ", this.likes)
        console.log("Total numebr of students : ",this.totalStudents)
    }
}

function main(){
    //Instantiation
    var nitCollege = new College("NIT Raipur", ["CSE", "IT", "MECHANICAL"], 200000, 4000)
    var scienceCollege = new College("Science College", ["PCM", "CZG", "CBZ"], 700000, 8000)

    //Calling getCollegeDetails() method
    nitCollege.getCollegeDetails()

    console.log()   //Newline

    scienceCollege.getCollegeDetails()
}

main();

/*
Colege name :  NIT Raipur
Branches :  [ 'CSE', 'IT', 'MECHANICAL' ]
Likes :  200000
Total numebr of students :  4000

Colege name :  Science College
Branches :  [ 'PCM', 'CZG', 'CBZ' ]
Likes :  700000
Total numebr of students :  8000
*/
```

### Inheritance

Inheritance is defined as the mechanism of deriving a new class from the existing one.

Inheritance extends the capability of Child class by adding some additional features or attributes to it. Visit to [quick look at wiki](https://github.com/hygull/type-script/wiki/inheritance).

```typescript
    /**
    {
        "created_at" : "7 May 2017",
        "aim_of_script" : "Using inheritance in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Definition of Father class
class Father {
    name : string
    age : number

    //Constructor that creates object for Father class
    constructor(fname:string, fage:number) {
        this.name = fname
        this.age = fage
    }

    //Method that prints the name & age of the current(invoking) object
    getDetails() {
        console.log(`Name : ${this.name}`)
        console.log(`Age  : ${this.age}`)
    }
}

//Definition of Child class that extends Father
//Now attributes name, age and method getDetails() became the members of Child
class Child extends Father{
    isMarried : boolean

    //Constructor that creates object for Child class
    constructor(name:string, age:number, isMarried:boolean) {
        //Passing parameters to Parent's constructor
        super(name, age)
        this.isMarried = isMarried
    }

    //Method that prints the marital status of the current(invoking) object
    //It is clear that Father is married so only Child need to have this method
    getMaritalStatus() {
        console.log(`Marital status : ${this.isMarried}`)
    } 
}

//Starting point
function main() {   

    //Instantiating Father class
    console.log("Father:-")
    let filip:Father = new Father("King Filip", 49)
    filip.getDetails()

    //New line
    console.log("\nChild:-")    

    //Instantiating Child class 
    let sikandar = new Child("Alexander The Great", 29, true)
    sikandar.getDetails()
    sikandar.getMaritalStatus()
}

//Calling the Starter main() function
main();


/**
Father:-
Name : King Filip
Age  : 49

Child:-
Name : Alexander The Great
Age  : 29
Marital status : true
*/
```

### Interfaces
An interface is a syntactical construct that an entity should conform to.

An interface defines the syntax that an entity must adhere to.
```javascript
/*
    {
        "created_at" : "28 April 2017",
        "aim_of_script" : "Using interfaces in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

interface TwoDimensional{
    length:number
    width:number

    getArea: (a:number, b:number)=>number
}

//Recatangle
var rectangle:TwoDimensional = {
    length:40,
    width:25,

    getArea: (a:number,b:number) : number => {
        return a*b
    }

}

//Square
var square:TwoDimensional = {
    length:40,
    width:40,

    getArea: (a:number,b:number) : number => {
        return a*b
    }

}

var area:number 

area = rectangle.getArea(rectangle.length, rectangle.width)
console.log("A rectangle with length ", rectangle.length,"metre and width "
            ,rectangle.width, "metre has area = ",area," sq. metre." )  //40x25 = 1000

area = square.getArea(square.length, square.width)
console.log("A square with length ", square.length,"metre and width "
            ,square.width, "metre has area = ",area," sq. metre." ) //40x40 = 1600

/*
A rectangle with length  40 metre and width  25 metre has area =  1000  sq. metre.
A square with length  40 metre and width  40 metre has area =  1600  sq. metre.
*/
```

Another simple example of using interfaces in TypeScript
```typescript
/*
    {
        "created_at" : "28 April 2017",
        "aim_of_script" : "Using interfaces in TypeScript(Vehicle example)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
interface Vehicle{
    name : string
    price : number
    color : string
}

function vehicleCreater(vehicleName:string, vehiclePrice:number, vehicleColor:string):Vehicle
{

    var vehicle:Vehicle = {
        name:vehicleName,
        price:vehiclePrice,
        color:vehicleColor,
    }

    return vehicle
}

var lamborgini = vehicleCreater("Lamborgini", 3000000000, "Red")

var hondaCity  = vehicleCreater("Honda city",7000000000, "Black")

console.log("Details of Lamborgini :- ")
console.log(lamborgini.name, lamborgini.price, lamborgini.color)

console.log() //Newline

console.log("Details of Honada city :- ")
console.log(hondaCity.name, hondaCity.price, hondaCity.color)

/*
Details of Lamborgini :- 
Lamborgini 3000000000 Red

Details of Honada city :- 
Honda city 7000000000 Black
*/
```

### Objects
An object is defined as an instance which contains set of key-value pairs.

The values can be scalar values, functions, structures like tuples, an array of other objects etc.

```typescript
/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "Using object in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Defining object named car
var car = {
    name : "Lamborgini",
    price : "36000000000",
    color : "Red",
    country : "India",
    company : "Toyota"
}

console.log()   //Newline

//Printing car object
console.log(car)

console.log()   //Newline

//Printing specific values
console.log(car.name)
console.log(car.price)
console.log(car.color)
console.log(car.country)
console.log(car.company)

console.log()   //Newline

//Printing keys using for-in loop
for (var key in car){   //key in car => will not work
    console.log(key)
}

console.log()   //Newline

//Printing values usng for-in loop
for(var key in car){
    console.log( car[key] )
}


/*

{ name: 'Lamborgini',
  price: '36000000000',
  color: 'Red',
  country: 'India',
  company: 'Toyota' }

Lamborgini
36000000000
Red
India
Toyota

name
price
color
country
company

Lamborgini
36000000000
Red
India
Toyota
*/
```

### Type Template
JavaScript code (In TypeScript the same code will not work)
```javascript
//Creating object named car
var car = {
    name: "Lamborgini",
    price: "36000000000",
    color: "Red",
    country: "India",
    company: "Toyota",
};

//Printing 1st 10 even numbers
car.printEvens = function () {
    for (var num = 2; num < 21; num += 2) {
        console.log(num);
    }
};
//Printing 1st 10  odd numbers
car.printOdds = function () {
    for (var num = 1; num < 20; num += 2) {
        console.log(num);
    }
};
//Printing keys of an object
car.printKeys = function (carObj) {
    for (var key in carObj) {
        console.log(key);
    }
};
```

TypeScript code (Type templates)
```typescript
//Creating object named car
var car = {
    name : "Lamborgini",
    price : "36000000000",
    color : "Red",
    country : "India",
    company : "Toyota",

    //Type templates
    printEvens : function() {}, //In JavaScript, this line is not required 
    printOdds : function() {},  //...
    printKeys : function(carObj) {},  //...
}

//Printing 1st 10 even numbers
car.printEvens = function(){
    for(var num:number=2; num<21; num+=2){
        console.log(num)
    }
}

//Printing 1st 10  odd numbers
car.printOdds = function(){
    for(var num:number=1; num<20; num+=2){
        console.log(num)
    }
}

//Printing keys of an object
car.printKeys = function(carObj){
    for(var key in carObj){
        console.log(key)
    }
}
```

Full example with output(in TypeScript)
```typescript
/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "Type Template, adding members to object(JavaScript allows but TypeScript doesn't)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//Creating object named car
var car = {
    name : "Lamborgini",
    price : "36000000000",
    color : "Red",
    country : "India",
    company : "Toyota",

    //Type templates
    printEvens : function() {}, //In JavaScript, this line is not required 
    printOdds : function() {},  //...
    printKeys : function(carObj) {},  //...
}

//Printing 1st 10 even numbers
car.printEvens = function(){
    for(var num:number=2; num<21; num+=2){
        console.log(num)
    }
}

//Printing 1st 10  odd numbers
car.printOdds = function(){
    for(var num:number=1; num<20; num+=2){
        console.log(num)
    }
}

//Printing keys of an object
car.printKeys = function(carObj){
    for(var key in carObj){
        console.log(key)
    }
}

//Starter function
function main(){
    car.printEvens();

    console.log()   //Newline

    car.printOdds();

    console.log()   //Newline

    car.printKeys(car)
}

//Calling starter function to start the execution of this script
main()

/*
2
4
6
8
10
12
14
16
18
20

1
3
5
7
9
11
13
15
17
19

name
price
color
country
company
printEvens
printOdds
printKeys
*/
```

### Anonymous object
```typescript
/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "To represent the use of anonymous object in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var addComplex = function(complexObj1 : {real:number, imaginary:number}, complexObj2 : {real:number, imaginary:number}){
    return {real:(complexObj1.real+complexObj2.real), imaginary: (complexObj1.imaginary+complexObj2.imaginary) }
}

//Passing 2 anonymous type objects
console.log( addComplex({real:10.5, imaginary:23.6}, {real:5.6, imaginary:67.6}) )  

//Passing 2 anonymous type objects
console.log( addComplex({real:15, imaginary:236}, {real:5.6, imaginary:67}) )

/*
{ real: 16.1, imaginary: 91.19999999999999 }
{ real: 20.6, imaginary: 303 }
*/
```

### Duck Typing
Two objects are considered to be of same types if they share the common 
set of properties.

Duck typing verifies the presence of certain types of properties in the object, rather than their actual type, to check their suitability. Visit [here](https://www.tutorialspoint.com/typescript/typescript_objects.htm) to read more about Duck Typing.

```typescript
/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "To represent Duck Typing in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

interface Book{
    name : string,
    author : string,
    price : number,
    isAvailable : boolean,
    version : number,
}

//Duck typing
function showBookDetails(book:Book){
    var names:string[] = ["Book name", "Author", "Price", "Is available", "Version"]
    var i:number=0
    for (var key in book){
        console.log(names[i]," : ", book[key])
        i += 1
    }
}

showBookDetails(    {   name:"Let us C", author:"Y.P Kanetkar",
                        price:450,isAvailable:true, version:11.01 
                    }
                ); 

/*
Book name  :  Let us C
Author  :  Y.P Kanetkar
Price  :  450
Is available  :  true
Version  :  11.01
*/
```

### Namespaces
Namespace is defined a way to logically group related code.

I has been introduced in TypeScript to overcome *Global namespace pollution problem* in JavaScript.

Visit [typescriptlang.org](http://www.typescriptlang.org/docs/handbook/namespaces.html) and
[tutorialspoint.com](https://www.tutorialspoint.com/typescript/typescript_namespaces.htm) to have a clear picture about the usage of namespaces.

*I am about to show you Book example that I have implemented using 2 different files named *Book.js* and *BookUser.js*.*

*The following code at the top of *BookUser.js* allows it to use the Classes and Namespaces defined in *Book.js**

> /// &lt;reference path = "Book.ts" /&gt;

*I compiled both the files *Book.ts* and *BookUser.ts* into a single JavaScript file named *BookCompiled.js* with following sequence of commands(ls is not required).*

> $ ls

> Book.ts     BookUser.ts

> $ tsc --outFile BookCompiled.js BookUser.ts 

> $ ls

> Book.ts     BookCompiled.js BookUser.ts

Finally I ran it using the follwing command.

> $ node BookCompiled.js 

> Book name :  Let us C

> Author :  Y.P Kanetkar

> Price :  450

> Publication :  TATA MacGraw Hill

Now let us look at the TypeScript code available in *Book.ts* and *BookUser.js*

> Book.js

```typescript
/*
    {
        "created_on" : "30 April 2017",
        "aim_of_script" : "Implementaion of using namespaces(Book class)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
namespace BookNamespace{
    export class Book{  
        name : string
        author : string
        price : number
        publication : string

        //Constructor
        constructor(bookName:string, bookAuthor:string, bookPrice:number, bookPublication:string){
            this.name = bookName
            this.author = bookAuthor
            this.price = bookPrice
            this.publication = bookPublication
        }

        //To show book details
        showBookDetails():void{     //function keyword is not required here 
            console.log("Book name : ",this.name)
            console.log("Author : ", this.author)
            console.log("Price : ",this.price)
            console.log("Publication : ",this.publication)
        }
    }
}
```

> BookUser.js

```typescript
/// <reference path = "Book.ts" />          

class BookUser{
        myBookDetails(){
            let letUsC = new BookNamespace.Book("Let us C","Y.P Kanetkar", 450, "TATA MacGraw Hill")
            letUsC.showBookDetails()
        }
}

var rishi = new BookUser()
rishi.myBookDetails()

/*
Book name :  Let us C
Author :  Y.P Kanetkar
Price :  450
Publication :  TATA MacGraw Hill
*/
```

> BookCompiled.js   (Generated by : tsc --outFile BookCompiled.js BookUser.js)

```typescript
/*
    {
        "created_on" : "30 April 2017",
        "aim_of_script" : "Implementaion of using namespaces(Book class)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var BookNamespace;
(function (BookNamespace) {
    var Book = (function () {
        //Constructor
        function Book(bookName, bookAuthor, bookPrice, bookPublication) {
            this.name = bookName;
            this.author = bookAuthor;
            this.price = bookPrice;
            this.publication = bookPublication;
        }
        //To show book details
        Book.prototype.showBookDetails = function () {
            console.log("Book name : ", this.name);
            console.log("Author : ", this.author);
            console.log("Price : ", this.price);
            console.log("Publication : ", this.publication);
        };
        return Book;
    }());
    BookNamespace.Book = Book;
})(BookNamespace || (BookNamespace = {}));
/// <reference path = "Book.ts" />          
var BookUser = (function () {
    function BookUser() {
    }
    BookUser.prototype.myBookDetails = function () {
        var letUsC = new BookNamespace.Book("Let us C", "Y.P Kanetkar", 450, "TATA MacGraw Hill");
        letUsC.showBookDetails();
    };
    return BookUser;
}());
var rishi = new BookUser();
rishi.myBookDetails();
/*
Book name :  Let us C
Author :  Y.P Kanetkar
Price :  450
Publication :  TATA MacGraw Hill
*/
```

Let us look at another example. 

Here I will show you how to use the **Person** class defined above with **Book** class.

First look at the file organization inside 19_namespaces.
```python
19_namespaces
├── book
│   ├── Book.ts
│   ├── BookCompiled.js
│   └── BookUser.ts
└── person
    ├── Person.ts
    ├── PersonCompiled.js
    └── PersonTest.ts
```

> Person.ts

```typescript
/*
    {
        "created_on" : "1 May 2017",
        "aim_of_script" : "To define the Person class inside PersonNamespace and use it with Person class",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

///<reference path = "../book/Book.ts" />

namespace PersonNamespace{
    export class Person{
        name : string 
        age : number
        mobileNumber : number
        hobbies : string[]
        favBooks : BookNamespace.Book[]

        constructor(pName:string,pAge:number,pMobileNumber:number,pHobbies:string[], pFavBooks:BookNamespace.Book[]){
            this.name = pName
            this.age = pAge
            this.mobileNumber = pMobileNumber
            this.hobbies = pHobbies
            this.favBooks = pFavBooks
        }   

        details(){
            let features:string[] = ["Name", "Age", "Mobile Number", "Hobbies", "Favourite Books"]
            let i:number = 0
            for(var property in this) {
                if(typeof this[property] == "function"){
                    continue
                }
                console.log(features[i]," : ",this[property])
                console.log(".........................................")
                i += 1
            }
        }
    }
}
```

> PersonTest.ts

```typescript
///<reference path = "Person.ts" />
///<reference path = "../book/Book.ts"/>

class PersonTest{
    showPersonDetails(obj:PersonNamespace.Person){
        obj.details()
    }
}

var book1:BookNamespace.Book = new BookNamespace.Book("Let us C","Y.P Kanetkar", 450.67, "TATA Macgraw Hill")
var book2:BookNamespace.Book = new BookNamespace.Book("Matering C++","Venugopal", 550.80, "Siksha publication")
var books:BookNamespace.Book[] = [book1, book2]

var hobbies:string[] = ["Programmig", "Playing chess", "Reading Books", "Watching Cricket"]

var person = new PersonNamespace.Person("Rishikesh Agrawani", 24, 7353787704, hobbies, books)

var personTest:PersonTest = new PersonTest()
personTest.showPersonDetails(person) 

/*
Name  :  Rishikesh Agrawani
.........................................
Age  :  24
.........................................
Mobile Number  :  7353787704
.........................................
Hobbies  :  [ 'Programmig',
  'Playing chess',
  'Reading Books',
  'Watching Cricket' ]
.........................................
Favourite Books  :  [ Book {
    name: 'Let us C',
    author: 'Y.P Kanetkar',
    price: 450.67,
    publication: 'TATA Macgraw Hill' },
  Book {
    name: 'Matering C++',
    author: 'Venugopal',
    price: 550.8,
    publication: 'Siksha publication' } ]
.........................................
*/
```

Compile and run 

> $ tsc --outFile PersonCompiled.js PersonTest.ts 

> $ node PersonCompiled.js


Now I am going to present another simple example for you. That is nice and concise.

This is a simple example using a class named Car which resides within CarNamespace.

Now look at the code of 2 files *Car.ts* and *CarTest.ts*

> Car.ts

```typescript
/*
    {
        "created_on" : "1 May 2017",
        "aim_of_script" : "Using namespaces in TypeScript(Car example)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

namespace CarNamespace{
    export class Car{
        name : string
        color : string
        price : number
        company : string
    

        constructor(cName:string, cColor:string,cPrice:number,cCompany:string){
            this.name = cName
            this.color = cColor
            this.price = cPrice
            this.company = cCompany
        }


        details():void{
            let features:string[] = ["Name", "Color", "Price", "Company"]
            let i = 0
            for(let property in this){
                if(typeof this[property] == "function")
                    continue

                console.log(features[i]," : ",this[property])
                i += 1
            }
        }
    }
}
```

> CarTest.ts

```typescript
///<reference path = "Car.ts" />
class CarTest{
    showCarDetails(){
        let myCar = new CarNamespace.Car("Lamborgini","Red", 3000000000,"Toyota")
        myCar.details()
    }
}

let carTest = new CarTest()
carTest.showCarDetails()

/*
Name  :  Lamborgini
Color  :  Red
Price  :  3000000000
Company  :  Toyota
*/
```

Compile and run

> $ ls

Car.ts      CarCompiled.js  CarTest.ts

> $ tsc --outFile CarCompiled.js  CarTest.ts 

> $ node CarCompiled.js 

Name  :  Lamborgini

Color  :  Red

Price  :  3000000000

Company  :  Toyota

### Strings
A string is defined as a sequence of characters.

Let us use String() constructor to construct the String object.

```typescript
/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Using String() constructor to create strings",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var myName:String = new String("Rogert Rendrick Jemen Cartel Neuron")

var nStr:string = myName.valueOf()  //valueOf() returns the primitive value of String object

console.log(nStr)   

/*
Rogert Rendrick Jemen Cartel Neuron
*/
```

### Regular expressions

Example 1

```typescript
/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the positive integers like 123, 234, 1, 34 etc. 
var intRegex = /^\d+$/

var s:string = "123"

if(intRegex.test(s)){   //true
    console.log(s+" is a +ve integer")
}else{
    console.log(s+" is not a +ve integer that matches /^\d+$/")
}

s = "-123"
if(intRegex.test(s)){   //false
    console.log(s+" is a +ve integer")
}else{
    console.log(s+" is not a +ve integer that matches /^\d+$/")
}

/*
123 is a +ve integer
-123 is not a +ve integer that matches /^d+$/
*/
```


Example 2
```typescript
/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the positive integers like 123, 234, 1, 34, +67, +345 etc. 
var intRegex = /^(\+)?\d+$/

var s:string = "123"

if(intRegex.test(s)){   //true
    console.log(s+" is a +ve integer")
}else{
    console.log(s+" is not a +ve integer that matches /^(\+)?\d+$/")
}

s = "-123"
if(intRegex.test(s)){   //false
    console.log(s+" is a +ve integer")
}else{
    console.log(s+" is not a +ve integer that matches  /^(\+)?\d+$/")
}

s = "+123"
if(intRegex.test(s)){   //true
    console.log(s+" is a +ve integer")
}else{
    console.log(s+" is not a +ve integer that matches  /^(\+)?\d+$/")
}

/*
123 is a +ve integer
-123 is not a +ve integer that matches  /^(+)?d+$/
+123 is a +ve integer
*/
```

Example 3
```typescript
/*
    {
        "created_at" : "3 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the positive integers like 12334, 64545, 87656, 67674 etc. 
var intRegex = /^\d{5}$/

var s:string = "12345"

if(intRegex.test(s)){   //true
    console.log(s+" is a +ve integer with 5 digits")
}else{
    console.log(s+" is not a +ve integer that matches /^\d{5}$/")
}

s = "1623"
if(intRegex.test(s)){   //false
    console.log(s+" is a +ve integer with 5 digits")
}else{
    console.log(s+" is not a +ve integer that matches  /^\d{5}$/")
}

s = "975657"
if(intRegex.test(s)){   //false
    console.log(s+" is a +ve integer with 5 digits")
}else{
    console.log(s+" is not a +ve integer that matches   /^\d{5}$/")
}

/*
12345 is a +ve integer with 5 digits
1623 is not a +ve integer that matches  /^d{5}$/
975657 is not a +ve integer that matches   /^d{5}$/
*/
```

Example 4
```typescript
/*
    {
        "created_at" : "3 May 2017",
        "aim_of_script" : "Using regular expression in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

//To match the strings with only like abcd, rishi, rojert.
//Strings like Rishikesh, Abcd, ABCD won't be matched.

var intRegex = /^[a-z]+$/ 

var s:string = "rogert"

if(intRegex.test(s)){   //true
    console.log(s+" contains only small case letters")
}else{
    console.log(s+" is not a string that matches /^[a-z]+$/")
}

s = "Rishikesh"
if(intRegex.test(s)){   //false
    console.log(s+" contains only small case letters")
}else{
    console.log(s+" is not a string that matches /^[a-z]+$/")
}

s = "abcd#"
if(intRegex.test(s)){   //false
    console.log(s+" contains only small case letters")
}else{
    console.log(s+" is not a string that matches /^[a-z]+$/")
}

/*
rogert contains only small case letters
Rishikesh is not a string that matches /^[a-z]+$/
abcd# is not a string that matches /^[a-z]+$/
*/
```

<h1>More examples</h1>

### Adding 2 integers without using + operator

Example 1

```typescript
/*
    {
        "created_at" : "2 May 2017",
        "aim_of_script" : "Adding 2 integer numbers without using + operator",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function adder(number1:number, number2:number){
    while(number2){
        //The positions where there are similar bits, will be ON
        var carry = number1 & number2

        //The positions where there are dissimilar bits, will be ON
        number1 = number1 ^ number2

        //Forwording bits to left
        number2 = carry << 1
    }
    return number1
}

var sum:number = adder(12,14)
console.log(sum)    //26

var sum2:number = adder(34,56)
console.log(sum2)   //90

var sum3:number = adder(56,67)
console.log(sum3)   //123

/*
26
90
123
*/
```

### Addition and concatenation( using unions in TypeScript)
```typescript
/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using Union of arrays in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var anyArr : number[] | string[]

//Creating an array of integers
anyArr = [ 1, 45, 67, 89 ]

//Adding all the numbers in array
let s:number = 0
for(var value of anyArr){
    s += value
}

console.log("Sum of all the elements in ",anyArr, " is ", s)

//Creating an array of strings
anyArr = ["Bangalore", " is ", " cool ", " place."]
let s2:string = ""

for(let city of anyArr){
    s2 += city
}

console.log("A sentence formed using ",anyArr, " is ",s2)

/*
Sum of all the elements in  [ 1, 45, 67, 89 ]  is  202
A sentence formed using  [ 'Bangalore', ' is ', ' cool ', ' place.' ]  is  Bangalore is  cool  place.
*/
```

### Selection sort on arrays of integers

```typescript
/*
    {
        "created_at" : "3 May 2017",
        "aim_of_script" : "To implement selection sort",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function selectionSort(a:number[]){
    let n:number = a.length

    for(let i=0; i<(n-1);i++){
        let minIndex:number = i

        for(let j=i+1; j<n; j++){ //Finding the index with minimum value
            if(a[j] < a[minIndex]){
                minIndex = j
            }
        }

        let temp:number = a[minIndex]
        a[minIndex] = a[i]
        a[i] = temp
    }
}

console.log("Example 1")
let arr:number[] = [12, 34, 5, 0, 40, 2, 7, 50, 42]
console.log(arr)

selectionSort(arr)  //reference, arrays are objects
console.log(arr)

console.log("Example 2")
let arr2:number[] = [99,-2, 12, -1, 55, 34, 5, 0, 8]
console.log(arr2)

selectionSort(arr2) //reference, arrays are objects
console.log(arr2)

/*
Example 1
[ 12, 34, 5, 0, 40, 2, 7, 50, 42 ]
[ 0, 2, 5, 7, 12, 34, 40, 42, 50 ]
Example 2
[ 99, -2, 12, -1, 55, 34, 5, 0, 8 ]
[ -2, -1, 0, 5, 8, 12, 34, 55, 99 ]
*/
```

### Finding the maximum integer among 3 integers using nested if-else
```typescript
/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Finding the maximum integer among 3 integers using nested if-else",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function maximum(a:number, b:number, c:number){
    var maxNumber:number = a
    
    if(a > b){
        if(c >a) {
            maxNumber = c
        }
    }else{
        if(b > c){
            maxNumber = b
        } else {
            maxNumber = c
        }
    }

    return maxNumber
}

console.log(maximum(12, 45, 56) + " is maximum among 12, 45 & 56")
console.log(maximum(1, 56, 56) + " is maximum among 1, 56 & 56")
console.log(maximum(12, 5, 6) + " is maximum among 12, 5 & 6")
console.log(maximum(12, 45, 5) + " is maximum among 12, 45 & 5")
console.log(maximum(12, 12, 56) + " is maximum among 12, 12 & 56")
console.log(maximum(-1, -4, -6) + " is maximum among -1, -4 & -6")

/*
56 is maximum among 12, 45 & 56
56 is maximum among 1, 56 & 56
12 is maximum among 12, 5 & 6
45 is maximum among 12, 45 & 5
56 is maximum among 12, 12 & 56
-1 is maximum among -1, -4 & -6
*/
```

### Using push() method on array
```typescript
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
```

### Using splice() method on array
```typescript
/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using splice() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [1, 2, 5, 67, 89, 34, 56]

console.log(arr)

//Adding elements to array
console.log("Adding 12 at position 3...")
arr.splice(3, 0, 12)    //postion(required), no. of items to be removed, item(s) to be added
console.log(arr)

console.log("Adding 13, 56, 78 starting at postion 5...")
arr.splice(5, 0, 13, 56, 78)
console.log(arr)

//Removing elements from array
console.log("Removing item from position 4...")
arr.splice(4, 1)
console.log(arr)

console.log("Removing 2 contiguous items starting from index 2...")
arr.splice(2, 2)
console.log(arr)

/*
[ 1, 2, 5, 67, 89, 34, 56 ]
Adding 12 at position 3...
[ 1, 2, 5, 12, 67, 89, 34, 56 ]
Adding 13, 56, 78 starting at postion 5...
[ 1, 2, 5, 12, 67, 13, 56, 78, 89, 34, 56 ]
Removing item from position 4...
[ 1, 2, 5, 12, 13, 56, 78, 89, 34, 56 ]
Removing 2 contiguous items starting from index 2...
[ 1, 2, 13, 56, 78, 89, 34, 56 ]
*/
```

### Using concat() method on array
```typescript
/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using concat() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [1, 2, 5, 67, 89, 34, 56]
var arr2:number[] = [12, 5, 6, 78, 8]

console.log(arr)
console.log(arr2)

//Adding elements of an array to another array
console.log("Adding all elements of ",arr, " to ", arr2)
arr2 = arr2.concat(arr) 
console.log(arr2)

console.log("Adding 5, 0, 13, 56, 78 to ",arr)
arr = arr.concat(5, 0, 13, 56, 78)
console.log(arr)

var cities:string[] = ["Bangalore", "kondagaon"]
var c1:string[] = ["Bilaspur","Gurgaon"]
var c2:string[] = ["Ompur", "Vyom"]

console.log("Concatenating ", c1 , " and ", c2 , " with ",cities )
cities = cities.concat(c1,c2)
console.log(cities)

/*
[ 1, 2, 5, 67, 89, 34, 56 ]
[ 12, 5, 6, 78, 8 ]
Adding all elements of  [ 1, 2, 5, 67, 89, 34, 56 ]  to  [ 12, 5, 6, 78, 8 ]
[ 12, 5, 6, 78, 8, 1, 2, 5, 67, 89, 34, 56 ]
Adding 5, 0, 13, 56, 78 to  [ 1, 2, 5, 67, 89, 34, 56 ]
[ 1, 2, 5, 67, 89, 34, 56, 5, 0, 13, 56, 78 ]
Concatenating  [ 'Bilaspur', 'Gurgaon' ]  and  [ 'Ompur', 'Vyom' ]  with  [ 'Bangalore', 'kondagaon' ]
[ 'Bangalore', 'kondagaon', 'Bilaspur', 'Gurgaon', 'Ompur', 'Vyom' ]
*/
```

### Arrow function (simplest form)
```
/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using simple arrow function in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var addition:Function = (a:number, b:number) => a+b
/*
    function addition(a:number, b:number){
        return a+b
    }
*/

console.log("Addition :-")
console.log(addition( 12, 45) )
console.log(addition( 45, -67))

var factorial:Function = n => {
    if (n==0||n==1){
        return 1
    }

    var f:number = 2
    for(var i:number=3; i <= n; i++){
        f = f*i
    }
    return f
}

console.log("Factorial :-")
console.log( factorial(5))
console.log( factorial(6))
console.log( factorial(0))
console.log( factorial(1))

/*
Addition :-
57
-22
Factorial :-
120
720
1
1
*/

```

### Using sort() method on array

```typescript
/*
    {
        "created_at" : "4 May 2017",
        "aim_of_script" : "Using sort() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [8, 12, 2, 34, 1, 56, 78, 7]
console.log("Ascending order :-")
console.log(arr)

//Sorting the array in ascending order(integer array)
arr.sort(function(a,b){
    return a-b
})

console.log(arr)

var arr:number[] = [8, 12, 2, 34, 1, 56, 78, 7]
console.log("Descending order :-")
console.log(arr)

//Sorting the array in descending order(integer array)
arr.sort(function(a,b){
    return b-a
})

console.log(arr)

//Sorting array of strings
var cities:string[] = ["Bangalore","Dentolla" ,"Amarpur", "Colbia", "Bamgarh"]
console.log(cities)

cities.sort()
console.log(cities)

/*
Ascending order :-
[ 8, 12, 2, 34, 1, 56, 78, 7 ]
[ 1, 2, 7, 8, 12, 34, 56, 78 ]
Descending order :-
[ 8, 12, 2, 34, 1, 56, 78, 7 ]
[ 78, 56, 34, 12, 8, 7, 2, 1 ]
[ 'Bangalore', 'Dentolla', 'Amarpur', 'Colbia', 'Bamgarh' ]
[ 'Amarpur', 'Bamgarh', 'Bangalore', 'Colbia', 'Dentolla' ]
*/
```

### Arrow function with sort() method.

```typescript
/*
    {
        "created_at" : "5 May 2017",
        "aim_of_script" : "Using arrow function as parameter of sort() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

console.log("Ascending order:-")
var arr:number[] =  [3, 2, 1, 5, 9, 5, 8]

console.log(arr)

//Sorting array of integers in ascending order
arr.sort( (a,b) => a-b )
console.log(arr)

console.log("\nDescending order:-")
arr = [3, 2, 1, 5, 9, 5, 8]
console.log(arr)

//Sorting array of integers in descending order
arr.sort( (a,b) => b-a)
console.log(arr)

/*
Ascending order:-
[ 3, 2, 1, 5, 9, 5, 8 ]
[ 1, 2, 3, 5, 5, 8, 9 ]

Descending order:-
[ 3, 2, 1, 5, 9, 5, 8 ]
[ 9, 8, 5, 5, 3, 2, 1 ]
*/
```

# Notes

> Function decalration & function expression are not synonymous.Unlike a function
expression, function declaration is bound by the function name.
The fundamental difference between the two is that, function declarations are parsed 
before their execution. On the other hand, function expressions are parsed only when the
script encounters it during execution. 

> var nstr = (&lt;HTMLInputElement&gt;document.getElementById("inp1")).value<br>Visit [here](http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement)

#### Regular expression - examples

```typescript
> /^[0-9]+$/.test("123")
true
> /^[0-9]+$/.test("123a")
false
> /^[0-9]+$/.test("123#")
false
> /^[0-9]+$/.test("00012")
true
> /^[0-9]+$/.test("+12")
false
> 
> /^(\+)?[0-9]+$/.test("+12")
true
> /^(\+)?[0-9]+$/.test("12")
true
> /^(\+)?[0-9]+$/.test("++12")
false
> /^(\+)?[0-9]+$/.test("-12")
false
> 
> /^(\+|\-)?[0-9]+$/.test("-12")
true
> /^(\+|\-)?[0-9]+$/.test("+12")
true
> /^(\+|\-)?[0-9]+$/.test("12")
true
> 
> /^[a-z]+$/.test("abcd")
true
> /^[a-z]+$/.test("Abcd")
false
> /^[a-z]+$/.test("rishikesh")
true
> /^[a-z]+$/.test("rishikesh67")
false
> 
> /^[a-z0-9]+$/.test("rishikesh67")
true
> /^[a-z0-9]+$/.test("rogert67rendrick1729")
true
> /^[a-z0-9]+$/.test("rogert67rendrick1729@gmail")
false
> /^[a-z0-9]+$/.test("rogert#$")
false
> 
> /^[A-Z]+$/.test("rishikesh")
false
> /^[A-Z]+$/.test("RISHIKESH")
true
> /^[A-Z]+$/.test("RISH1729I")
false
```

#### continue keyword

Example 1

```typescript
/*
    {
        "created_at" : "6 May 2017",
        "aim_of_script" : "Displaying all the numbers(of an array) greater than 60",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var arr:number[] = [12, 67, 4, 0, 56, 98, 25, 61, 6,-2,70]

for(var item of arr) {
    if(item > 60) {
        console.log(item)
    }else{
        continue  //Continue with next iteration and skip the execution of succeeding statement(s)
    }
    console.log("Programming is awesome.")
}

/*
67
Programming is awesome.
98
Programming is awesome.
61
Programming is awesome.
70
Programming is awesome.
*/
```

Example 2 (Removing duplications from array of integers)

```typescript
/**
    {
        "created_at" : "7 May 2017",
        "aim_of_script" : "Removing duplicates of an array in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

function removeDuplicates(arr:number[]):number[] {
    //Defining a blank array
    let tempArr:number[] = []

    for(let item of arr) {
        if(tempArr.indexOf(item) > -1) {
            //If item already exists then do not add it and continue
            continue    
        }
        tempArr.splice(tempArr.length,  0, item)
    }
    return tempArr
}

//Definintion of main() function
function main(){
    let array = [34, 5, 1, 34, 67, 23, 6, 67, 5, 1, 3, 5, 67, 34]
    console.log("Array1:-")
    console.log(array)
    console.log("Removing duplicates...")
    console.log(removeDuplicates( array ))

    console.log()

    let array2 = [ 3, 55, -1, 66, 67, 34, 67, -33, 55, 5, 1, -33, -1, 5, 67, 3 ]
    console.log("Array2:-")
    console.log(array2)
    console.log("Removing duplicates...")
    console.log(removeDuplicates( array2 ))
}

//Calling starter { main() } function
main()

/**
Array1:-
[ 34, 5, 1, 34, 67, 23, 6, 67, 5, 1, 3, 5, 67, 34 ]
Removing duplicates...
[ 34, 5, 1, 67, 23, 6, 3 ]

Array2:-
[ 3, 55, -1, 66, 67, 34, 67, -33, 55, 5, 1, -33, -1, 5, 67, 3 ]
Removing duplicates...
[ 3, 55, -1, 66, 67, 34, -33, 5, 1 ]
*/
```

<h1>Todo List</h1>
<ol type="1">
    <li style='color:green'>Call by reference & call by value</li>
    <li style='color:green'>var & let keywords</li>
    <li>Global namespace pollution problem in JavaScript (namespace as a solution in TypeScript)</li>
</ol>

