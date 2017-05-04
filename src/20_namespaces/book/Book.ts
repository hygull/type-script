/*
    {
        "created_on" : "30 April 2017",
        "aim_of_script" : "Implementaion of using namespaces(Book class)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
namespace BookNamespace{
	export class Book{	
		name : string
		author : string
		price : number
		publication : string

		//Constructor
		constructor(bookName:string, bookAuthor:string, bookPrice:number, bookPublication:string){
			this.name = bookName
			this.author = bookAuthor
			this.price = bookPrice
			this.publication = bookPublication
		}

		//To show book details
		showBookDetails():void{		//function keyword is not required here 
			console.log("Book name : ",this.name)
			console.log("Author : ", this.author)
			console.log("Price : ",this.price)
			console.log("Publication : ",this.publication)
		}
	}
}
