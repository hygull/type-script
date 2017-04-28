/*
    {
        "created_at" : "28 April 2017",
        "aim_of_script" : "Using interfaces in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//Recatangle
var rectangle = {
    length: 40,
    width: 25,
    getArea: function (a, b) {
        return a * b;
    }
};
//Square
var square = {
    length: 40,
    width: 40,
    getArea: function (a, b) {
        return a * b;
    }
};
var area;
area = rectangle.getArea(rectangle.length, rectangle.width);
console.log("A rectangle with length ", rectangle.length, "metre and width ", rectangle.width, "metre has area = ", area, " sq. metre."); //40x25 = 1000
area = square.getArea(square.length, square.width);
console.log("A square with length ", square.length, "metre and width ", square.width, "metre has area = ", area, " sq. metre."); //40x40 = 1600
/*
A rectangle with length  40 metre and width  25 metre has area =  1000  sq. metre.
A square with length  40 metre and width  40 metre has area =  1600  sq. metre.
*/
