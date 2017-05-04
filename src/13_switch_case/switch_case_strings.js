/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "Using switch cases in TypeScript with strings",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
function getMessages(name) {
    switch (name) {
        case "Apple":
            console.log("Apple is my nice fruit");
            break; //Go outside of the switch body
        case "Mango":
            console.log("Mango is my nice fruit");
            break;
        case "Pine Apple":
            console.log("Pine Apple is my nice fruit");
            break;
        default:
            console.log("There is no fruit in my bag");
    }
}
var fruits = ["Pine Apple", "Apple", "Popaya", "Mango"];
for (var i = 0; i < fruits.length; i++) {
    getMessages(fruits[i]);
}
/*
Pine Apple is my nice fruit
Apple is my nice fruit
There is no fruit in my bag
Mango is my nice fruit
*/ 
