interface Vehicle {
    name: string;
    price: number;
    color: string;
}
declare function vehicleCreater(vehicleName: string, vehiclePrice: number, vehicleColor: string): Vehicle;
declare var lamborgini: Vehicle;
declare var hondaCity: Vehicle;
