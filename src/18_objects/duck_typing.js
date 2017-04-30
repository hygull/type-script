/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "To represent Duck Typing in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
//Duck typing
function showBookDetails(book) {
    var names = ["Book name", "Author", "Price", "Is available", "Version"];
    var i = 0;
    for (var key in book) {
        console.log(names[i], " : ", book[key]);
        i += 1;
    }
}
showBookDetails({ name: "Let us C", author: "Y.P Kanetkar",
    price: 450, isAvailable: true, version: 11.01
});
/*
Book name  :  Let us C
Author  :  Y.P Kanetkar
Price  :  450
Is available  :  true
Version  :  11.01
*/ 
