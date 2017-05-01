/*
    {
        "created_on" : "1 May 2017",
        "aim_of_script" : "Using namespaces in TypeScript(Car example)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var CarNamespace;
(function (CarNamespace) {
    var Car = (function () {
        function Car(cName, cColor, cPrice, cCompany) {
            this.name = cName;
            this.color = cColor;
            this.price = cPrice;
            this.company = cCompany;
        }
        Car.prototype.details = function () {
            var features = ["Name", "Color", "Price", "Company"];
            var i = 0;
            for (var property in this) {
                if (typeof this[property] == "function")
                    continue;
                console.log(features[i], " : ", this[property]);
                i += 1;
            }
        };
        return Car;
    }());
    CarNamespace.Car = Car;
})(CarNamespace || (CarNamespace = {}));
///<reference path = "Car.ts" />
var CarTest = (function () {
    function CarTest() {
    }
    CarTest.prototype.showCarDetails = function () {
        var myCar = new CarNamespace.Car("Lamborgini", "Red", 3000000000, "Toyota");
        myCar.details();
    };
    return CarTest;
}());
var carTest = new CarTest();
carTest.showCarDetails();
/*
Name  :  Lamborgini
Color  :  Red
Price  :  3000000000
Company  :  Toyota
*/ 
