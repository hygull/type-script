/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "To represent the use of nonymous object in TypeScript",
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