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
/*
    {
        "created_on" : "1 May 2017",
        "aim_of_script" : "To define the Person class inside PersonNamespace and use it with Person class",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
///<reference path = "../book/Book.ts" />
var PersonNamespace;
(function (PersonNamespace) {
    var Person = (function () {
        function Person(pName, pAge, pMobileNumber, pHobbies, pFavBooks) {
            this.name = pName;
            this.age = pAge;
            this.mobileNumber = pMobileNumber;
            this.hobbies = pHobbies;
            this.favBooks = pFavBooks;
        }
        Person.prototype.details = function () {
            var features = ["Name", "Age", "Mobile Number", "Hobbies", "Favourite Books"];
            var i = 0;
            for (var property in this) {
                if (typeof this[property] == "function") {
                    continue;
                }
                console.log(features[i], " : ", this[property]);
                console.log(".........................................");
                i += 1;
            }
        };
        return Person;
    }());
    PersonNamespace.Person = Person;
})(PersonNamespace || (PersonNamespace = {}));
///<reference path = "Person.ts" />
///<reference path = "../book/Book.ts"/>
var PersonTest = (function () {
    function PersonTest() {
    }
    PersonTest.prototype.showPersonDetails = function (obj) {
        obj.details();
    };
    return PersonTest;
}());
var book1 = new BookNamespace.Book("Let us C", "Y.P Kanetkar", 450.67, "TATA Macgraw Hill");
var book2 = new BookNamespace.Book("Matering C++", "Venugopal", 550.80, "Siksha publication");
var books = [book1, book2];
var hobbies = ["Programmig", "Playing chess", "Reading Books", "Watching Cricket"];
var person = new PersonNamespace.Person("Rishikesh Agrawani", 24, 7353787704, hobbies, books);
var personTest = new PersonTest();
personTest.showPersonDetails(person);
/*
Name  :  Rishikesh Agrawani
.........................................
Age  :  24
.........................................
Mobile Number  :  7353787704
.........................................
Hobbies  :  [ 'Programmig',
  'Playing chess',
  'Reading Books',
  'Watching Cricket' ]
.........................................
Favourite Books  :  [ Book {
    name: 'Let us C',
    author: 'Y.P Kanetkar',
    price: 450.67,
    publication: 'TATA Macgraw Hill' },
  Book {
    name: 'Matering C++',
    author: 'Venugopal',
    price: 550.8,
    publication: 'Siksha publication' } ]
.........................................
*/ 
