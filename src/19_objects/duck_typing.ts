/*
    {
        "created_at" : "30 April 2017",
        "aim_of_script" : "To represent Duck Typing in TypeScript",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

interface Book{
	name : string,
	author : string,
	price : number,
	isAvailable : boolean,
	version : number,
}

//Duck typing
function showBookDetails(book:Book){
	var names:string[] = ["Book name", "Author", "Price", "Is available", "Version"]
	var i:number=0
	for (var key in book){
		console.log(names[i]," : ", book[key])
		i += 1
	}
}

showBookDetails( 	
					{	name:"Let us C", author:"Y.P Kanetkar",
						price:450,isAvailable:true, version:11.01 
					}
				); 

/*
Book name  :  Let us C
Author  :  Y.P Kanetkar
Price  :  450
Is available  :  true
Version  :  11.01
*/