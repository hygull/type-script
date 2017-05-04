/*
    {
        "created_on" : "1 May 2017",
        "aim_of_script" : "To define the Person class inside PersonNamespace and use it with Person class",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

///<reference path = "../book/Book.ts" />

namespace PersonNamespace{
	export class Person{
		name : string 
		age : number
		mobileNumber : number
		hobbies : string[]
		favBooks : BookNamespace.Book[]

		constructor(pName:string,pAge:number,pMobileNumber:number,pHobbies:string[], pFavBooks:BookNamespace.Book[]){
			this.name = pName
			this.age = pAge
			this.mobileNumber = pMobileNumber
			this.hobbies = pHobbies
			this.favBooks = pFavBooks
		}	

		details(){
			let features:string[] = ["Name", "Age", "Mobile Number", "Hobbies", "Favourite Books"]
			let i:number = 0
			for(var property in this) {
				if(typeof this[property] == "function"){
					continue
				}
				console.log(features[i]," : ",this[property])
				console.log(".........................................")
				i += 1
			}
		}
	}
}