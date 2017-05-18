/**
    {
        "created_at" : "18 May 2017",
        "aim_of_script" : "Creating classes with function in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function Father(fname, lname, fage) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = fage;
}
//Starting point
function main() {
    console.log("Father:-");
    //Instantiating Father class
    var filip = new Father("King", "Filip", 49); //filip:Father, it won't work
    console.log("Firstname : ", filip.firstname);
    console.log("Lastname  : ", filip.lastname);
    console.log("Age       : ", filip.age);
    console.log(typeof filip);
}
//Calling the Starter main() function
main();
/*
Father:-
Firstname :  King
Lastname  :  Filip
Age       :  49
*/ 
