/*
    {
        "created_at" : "28 April 2017",
        "aim_of_script" : "Using interfaces in TypeScript(Vehicle example)",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
interface Vehicle{
	name : string
	price : number
	color : string
}

function vehicleCreater(vehicleName:string, vehiclePrice:number, vehicleColor:string):Vehicle
{

	var vehicle:Vehicle = {
		name:vehicleName,
		price:vehiclePrice,
		color:vehicleColor,
	}

	return vehicle
}

var lamborgini = vehicleCreater("Lamborgini", 3000000000, "Red")

var hondaCity  = vehicleCreater("Honda city",7000000000, "Black")

console.log("Details of Lamborgini :- ")
console.log(lamborgini.name, lamborgini.price, lamborgini.color)

console.log() //Newline

console.log("Details of Honada city :- ")
console.log(hondaCity.name, hondaCity.price, hondaCity.color)

/*
Details of Lamborgini :- 
Lamborgini 3000000000 Red

Details of Honada city :- 
Honda city 7000000000 Black
*/