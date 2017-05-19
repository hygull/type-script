/**
    {
        "created_at" : "19 May 2017",
        "aim_of_script" : "Converting objects to string using JSON.stringify()",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var car = { name: "Rishikesh", age: 24, langauges: ["C", "C++", "Go", "Python", "TypeScript"] };
console.log(car);
console.log();
console.log(typeof car, "\n");
var stringRepresntation = JSON.stringify(car);
console.log(stringRepresntation);
/*
{ name: 'Rishikesh',
  age: 24,
  langauges: [ 'C', 'C++', 'Go', 'Python', 'TypeScript' ] }
object

{"name":"Rishikesh","age":24,"langauges":["C","C++","Go","Python","TypeScript"]}
*/ 
