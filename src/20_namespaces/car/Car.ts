/*
    {
        "created_on" : "1 May 2017",
        "aim_of_script" : "Using namespaces in TypeScript(Car example)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/

namespace CarNamespace{
	export class Car{
		name : string
		color : string
		price : number
		company : string
	

		constructor(cName:string, cColor:string,cPrice:number,cCompany:string){
			this.name = cName
			this.color = cColor
			this.price = cPrice
			this.company = cCompany
		}


		details():void{
			let features:string[] = ["Name", "Color", "Price", "Company"]
			let i = 0
	 		for(let property in this){
	 			if(typeof this[property] == "function")
	 				continue

	 			console.log(features[i]," : ",this[property])
	 			i += 1
	 		}
		}
	}
}