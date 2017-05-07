/**
    {
        "created_at" : "7 May 2017",
        "aim_of_script" : "Using inheritance in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Definition of Father class
var Father = (function () {
    //Constructor that creates object for Father class
    function Father(fname, fage) {
        this.name = fname;
        this.age = fage;
    }
    //Method that prints the name & age of the current(invoking) object
    Father.prototype.getDetails = function () {
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
    };
    return Father;
}());
//Definition of Child class that extends Father
//Now attributes name, age and method getDetails() became the members of Child
var Child = (function (_super) {
    __extends(Child, _super);
    //Constructor that creates object for Child class
    function Child(name, age, isMarried) {
        var _this = _super.call(this, name, age) || this;
        _this.isMarried = isMarried;
        return _this;
    }
    //Method that prints the mariatl status of the current(invoking) object
    //It is clear that Father is married so only Child need to have this method
    Child.prototype.getMaritalStatus = function () {
        console.log("Marital status : " + this.isMarried);
    };
    return Child;
}(Father));
//Starting point
function main() {
    //Instantiating Father class
    console.log("Father:-");
    var filip = new Father("King Filip", 49);
    filip.getDetails();
    //New line
    console.log("\nChild:-");
    //Instantiating Child class 
    var sikandar = new Child("Alexander The Great", 29, true);
    sikandar.getDetails();
    sikandar.getMaritalStatus();
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
