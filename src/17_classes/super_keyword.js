/**
    {
        "created_at" : "6 May 2017",
        "aim_of_script" : "Using super keyword (to call parent's method) in TypeScript",
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
    function Father() {
    }
    //supply() method of parent that prints the Food details and message by Child
    Father.prototype.supply = function (food) {
        console.log("Hi Father, I have sent you the food with the following details:-");
        console.log("Food name   : " + food.food_name);
        console.log("Food weight : " + food.food_weight);
        console.log("Food type   : " + food.food_type);
    };
    return Father;
}());
//Definition of Child class
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //supply() method that supplies food to Father
    Child.prototype.supply = function (food) {
        //Calling parent's supply() method
        //super keyword
        _super.prototype.supply.call(this, food);
    };
    return Child;
}(Father));
//Starter main() function's definition
function main() {
    //Creating an instance of Child class
    var jackson = new Child();
    console.log("Hello, I am Jackson.");
    console.log("Now I am supplying food to my Father.");
    console.log("=====================================");
    //Calling supply() method of Child class... 
    //Duck typing...
    jackson.supply({ food_type: "Indian", food_name: "Fried Rice", food_weight: "200 grams" });
}
//Calling main() function
main();
/**
Hello, I am Jackson.
Now I am supplying food to my Father.
=====================================
Hi Father, I have sent you the food with the following details:-
Food name   : Fried Rice
Food weight : 200 grams
Food type   : Indian
*/
