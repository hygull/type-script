/*
    {
        "created_at" : "14 April 2017",
        "aim_of_script" : "To present 4 ways of variable declartion in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

var myName : string = "Rishikesh";	//1st way
console.log(typeof myName, myName)	//string Rishikesh

var myCity = "Raipur";  //2nd way
console.log(typeof myCity, myCity);	//any Raipur

var myVillage : string	//3rd way
console.log(typeof myVillage, myVillage) //string undefined

var mySalary;	//4th way
console.log(typeof mySalary, mySalary)  //any undefined


/*
string Rishikesh
string Raipur
undefined undefined
undefined undefined
*/