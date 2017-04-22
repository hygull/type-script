/*
    {
        "created_at" : "22 April 2017",
        "aim_of_script" : "Using optional arguments in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//Here height is optional argument and length & width are required arguments
function getAreaOrVoulme(length, width, height) {
    if (height == undefined) {
        return (length * width); //return base area of room	
    }
    else {
        return (length * width * height); //return volume of the room
    }
}
console.log("Base area of room with height 10m and width 12m will be ", getAreaOrVoulme(10, 12), "sq. metre.");
console.log("Volume of room with height 23m, width 10m & height 20 will be ", getAreaOrVoulme(23, 10, 20), "cube metre.");
/*
Base area of room with height 10m and width 12m will be  120 sq. metre.
Volume of room with height 23m, width 10m & height 20 will be  4600 cube metre.
*/ 
