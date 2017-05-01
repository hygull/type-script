///<reference path = "Car.ts" />
class CarTest{
	showCarDetails(){
		let myCar = new CarNamespace.Car("Lamborgini","Red", 3000000000,"Toyota")
		myCar.details()
	}
}

let carTest = new CarTest()
carTest.showCarDetails()

/*
Name  :  Lamborgini
Color  :  Red
Price  :  3000000000
Company  :  Toyota
*/