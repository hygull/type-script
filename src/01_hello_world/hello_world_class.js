/*
    {
        "created_at" : "13 March 2017",
        "aim_of_script" : "Hello World using class",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.hello = function () {
        console.log("Hello World!!!"); //Semicolon at end is optional
    };
    return HelloWorld;
}());
var obj = new HelloWorld();
obj.hello();
