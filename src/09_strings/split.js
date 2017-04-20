/*
    {
        "created_at" : "20 April 2017",
        "aim_of_script" : "Using split() method",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function splitContents(s) {
    var arr = s.split("");
    return arr;
}
var s = "Rishikesh";
console.log("Splitting  " + s);
console.log("An array containing all characters is ", splitContents(s));
