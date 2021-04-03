// modifiers funcionam em classe.

interface Car {
    model: string;
    year: number;
    readonly manufacturer: string;
    price: number;
    country?: string; //optional field
    offerCar: () => void;
};

const gol: Car = {
    model: "Gol",
    year: 2014,
    manufacturer: "VW",
    price: 18000,
    offerCar: () => console.log(`The ${gol.manufacturer} ${gol.model} - ${gol.year} - costs ${gol.price}`)
};

gol.offerCar();

//extender interface

interface CarVersion extends Car {
    versionName: string;
    extras: Array<string>;
};

const golGsi: CarVersion = {
    model: "Gol",
    year: 2014,
    manufacturer: "VW",
    price: 28000,
    versionName: "GSI",
    extras: ["Radio", "Video Player", "Conditioned Air"],
    offerCar: () => console.log(`The ${golGsi.manufacturer} ${golGsi.model} ${golGsi.versionName} - ${golGsi.year} - with ${golGsi.extras}, costs ${golGsi.price}`)
};

golGsi.offerCar();

// uso de interface em classes

class Veicule implements Car {
    model: string;
    year: number;
    manufacturer: string;
    price: number;

    constructor(model: string, year: number, manufacturer: string, price: number) {
        this.model = model;
        this.year = year;
        this.manufacturer = manufacturer;
        this.price = price;
    }

    offerCar(): void{
        console.log(this);
    };
}

const newCar = new Veicule("Golf", 2010, "VW", 12000);
newCar.offerCar();
