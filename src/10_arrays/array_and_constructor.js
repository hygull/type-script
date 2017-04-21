/*
    {
        "created_at" : "21 April 2017",
        "aim_of_script" : "Creating array using Array() constructor in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//Creating an array of strings using Array() constructor
var languages = new Array("C", "C++", "Core Java", "Go", "Python", "PHP", "JavaScript");
console.log("I like the following programming languages");
for (var i = 0; i < languages.length; i++) {
    console.log((i + 1) + ")", languages[i]);
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
