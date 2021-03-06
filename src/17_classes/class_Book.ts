/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "Using classes in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
class Book{
    name:string     //var keyword is not used while declaring a field
    price:number
    pages:number
    // author:string

    //constructor, it is responsible for allocating memory for the objects.
    constructor(bookName:string, bookPrice:number, bookPages:number){
        this.name = bookName
        this.price = bookPrice
        this.pages = bookPages
    }

    //function sometimes referred to as method
    getBookDetails():void{
        console.log("Book name    : ",this.name)
        console.log("Book's price : ",this.price)
        console.log("Book Pages   : ",this.pages)
    }
}

function main(){
    var book1:Book = new Book("Let us C", 350.50, 500)
    book1.getBookDetails()

    console.log()

    var book2:Book = new Book("Mastering C++", 459.77, 830)
    book2.getBookDetails()

}

main();

/*
Book name    :  Let us C
Book's price :  350.5
Book Pages   :  500

Book name    :  Mastering C++
Book's price :  459.77
Book Pages   :  830
*/