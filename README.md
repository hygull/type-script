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

### 4 loops and forEach() method(to iterate over arrays) in TypeScript
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

2) for/in loop
```javascript
/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using for/in in TypeScript",
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

3) while loop
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


4) do-while loop
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

5)  forEach() method 
```javascript
/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using forEach loop in TypeScript",
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

It we will not supply any value for optional argument, nothing will happen.

```javascript
//Here height is optional argument and length & width are required arguments
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
### Rest parameters
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
<hr>
<h1><img src='https://cdn2.iconfinder.com/data/icons/illustricon-tech-viii/512/task_refresh-32.png'>Todo List</h1>
<ol type="1">
<li style='color:green'>Call by reference & call by value</li>
<li style='color:green'>var & let keywords</li>
</ol>