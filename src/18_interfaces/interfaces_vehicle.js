function vehicleCreater(vehicleName, vehiclePrice, vehicleColor) {
    var vehicle = {
        name: vehicleName,
        price: vehiclePrice,
        color: vehicleColor
    };
    return vehicle;
}
var lamborgini = vehicleCreater("Lamborgini", 3000000000, "Red");
var hondaCity = vehicleCreater("Honda city", 7000000000, "Black");
console.log("Details of Lamborgini :- ");
console.log(lamborgini.name, lamborgini.price, lamborgini.color);
console.log(); //Newline
console.log("Details of Honada city :- ");
console.log(hondaCity.name, hondaCity.price, hondaCity.color);
/*
Details of Lamborgini :-
Lamborgini 3000000000 Red

Details of Honada city :-
Honda city 7000000000 Black
*/ 
