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

<hr>
<h1 style='color:green'>Notes</h1>
<ol type="1">
    <li>
        Function decalration & function expression are not synonymous.Unlike a function
    expression, function declaration is bound by the function name.
    The fundamental difference between the two is that, function declarations are parsed 
    before their execution. On the other hand, function expressions are parsed only when the script encounters it during execution. 
    </li>

</ol>

<h1><img src='https://cdn2.iconfinder.com/data/icons/illustricon-tech-viii/512/task_refresh-32.png'>Todo List</h1>
<ol type="1">
    <li style='color:green'>Call by reference & call by value</li>
    <li style='color:green'>var & let keywords</li>
</ol>

