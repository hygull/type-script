/*
    {
        "created_at" : "14 April 2017",
        "aim_of_script" : "To represent Type Assertion in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var strNum = "1235x";
console.log(typeof strNum);
/*
    type_assertion.ts(10,5): error TS2322:
    Type 'string' is not assignable to type 'number'.
*/
//var num : number = strNum; 		/*Uncomment this line to see the above error*/
//or 
//var num : number = <number>strNum /*Uncomment this line to see the above error*/
var num = strNum;
console.log(typeof num);
console.log(num + 4231);
