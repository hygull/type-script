/**
    {
        "created_at" : "20 May 2017",
        "aim_of_script" : "Converting string representation of object to object JSON.parse()",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
interface Person{
	name: string
	age: number
	languages: string[]
}

let details:string = '{"name":"Rishikesh", "age":25, "languages":["C", "C++", "Python", "Go", "TypeScript"]}'

//If you will forget to specify any of name, age or languages in the `details` string
//then `console.log(person["name"])` will print undefined.
var person:Person = JSON.parse(details)

console.log(person.name)

//Another way to access the object attributes
console.log(person["name"])
console.log(person.languages)

/*
Rishikesh
Rishikesh
[ 'C', 'C++', 'Python', 'Go', 'TypeScript' ]
*/