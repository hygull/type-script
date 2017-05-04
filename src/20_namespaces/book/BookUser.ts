/// <reference path = "Book.ts" />			

class BookUser{
		myBookDetails(){
			let letUsC = new BookNamespace.Book("Let us C","Y.P Kanetkar", 450, "TATA MacGraw Hill")
			letUsC.showBookDetails()
		}
}

var rishi = new BookUser()
rishi.myBookDetails()

/*
Book name :  Let us C
Author :  Y.P Kanetkar
Price :  450
Publication :  TATA MacGraw Hill
*/
