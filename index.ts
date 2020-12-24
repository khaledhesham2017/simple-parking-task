import  {Vehicle} from './Vehicle'
import  {Parking} from './Parking'
let khaledParking = new Parking(2);
let omarVechiel = new Vehicle("123");
let sapryVechile = new Vehicle("345");
let omarEntar = khaledParking.enterNewCar(omarVechiel,3);
khaledParking.printParking()
let sapryEntar = khaledParking.enterNewCar(sapryVechile,22)
khaledParking.printParking()
if(sapryEntar){
    khaledParking.exitCar(sapryVechile,7)
    console.log("sapryFess:" , sapryVechile.getFees());
    }
if(omarEntar){
 khaledParking.exitCar(omarVechiel,9)
 console.log("omarFess:" , omarVechiel.getFees());
 }

    