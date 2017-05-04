///<reference path = "Person.ts" />
///<reference path = "../book/Book.ts"/>

class PersonTest{
	showPersonDetails(obj:PersonNamespace.Person){
		obj.details()
	}
}

var book1:BookNamespace.Book = new BookNamespace.Book("Let us C","Y.P Kanetkar", 450.67, "TATA Macgraw Hill")
var book2:BookNamespace.Book = new BookNamespace.Book("Matering C++","Venugopal", 550.80, "Siksha publication")
var books:BookNamespace.Book[] = [book1, book2]

var hobbies:string[] = ["Programmig", "Playing chess", "Reading Books", "Watching Cricket"]

var person = new PersonNamespace.Person("Rishikesh Agrawani", 24, 7353787704, hobbies, books)

var personTest:PersonTest = new PersonTest()
personTest.showPersonDetails(person) 

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