/*
    {
        "created_on" : "30 April 2017",
        "aim_of_script" : "Implementaion of using namespaces(Book class)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
var BookNamespace;
(function (BookNamespace) {
    var Book = (function () {
        //Constructor
        function Book(bookName, bookAuthor, bookPrice, bookPublication) {
            this.name = bookName;
            this.author = bookAuthor;
            this.price = bookPrice;
            this.publication = bookPublication;
        }
        //To show book details
        Book.prototype.showBookDetails = function () {
            console.log("Book name : ", this.name);
            console.log("Author : ", this.author);
            console.log("Price : ", this.price);
            console.log("Publication : ", this.publication);
        };
        return Book;
    }());
    BookNamespace.Book = Book;
})(BookNamespace || (BookNamespace = {}));
/// <reference path = "Book.ts" />			
var BookUser = (function () {
    function BookUser() {
    }
    BookUser.prototype.myBookDetails = function () {
        var letUsC = new BookNamespace.Book("Let us C", "Y.P Kanetkar", 450, "TATA MacGraw Hill");
        letUsC.showBookDetails();
    };
    return BookUser;
}());
var rishi = new BookUser();
rishi.myBookDetails();
/*
Book name :  Let us C
Author :  Y.P Kanetkar
Price :  450
Publication :  TATA MacGraw Hill
*/
