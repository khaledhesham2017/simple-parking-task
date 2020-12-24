import  {Vehicle} from './Vehicle'
class Parking{
   private slotes : Array<Vehicle>;
   private  slotSize : number;
   constructor(slotSize:number){
    this.slotSize = slotSize
    this.slotes = []
   }
   public enterNewCar(newVehicle:Vehicle,enterTime:number):Boolean{
       if(this.slotSize <= this.slotes.length){
           console.log("no places free");
           return false;
           }
        if ( this.getPlace(newVehicle.getPlate()) !== -1) {
            console.log("this vehicle added before");
            return false;
        } 
      newVehicle.setEnterTime(enterTime);
     this.slotes.push(newVehicle);
     console.log("welcom IN Our Parking");
     
     return true;

   }
   public exitCar(vehicle:Vehicle,exiteTime:number):void{
     let  exiteVechicleIndex = this.getPlace(vehicle.getPlate())
     if(exiteVechicleIndex === -1){
         console.log("vehicle Not Found");
        }
     let exiteVehicle = this.slotes[exiteVechicleIndex]
     exiteVehicle.setExaitTime(exiteTime)
     this.slotes.splice(exiteVechicleIndex)
     this.calculateFees(exiteVehicle)
   }
   private calculateFees(exiteVechicle:Vehicle):void{
       if(exiteVechicle.getExaitTime() < exiteVechicle.getEnterTime() ){
           exiteVechicle.setExaitTime(exiteVechicle.getExaitTime()+ 24)
       }
      for (let i = exiteVechicle.getEnterTime() ; i < exiteVechicle.getExaitTime() ; i++ ){
           let time = i % 24 ;
            if (time >= 6 && time <= 10){
                exiteVechicle.setFees(exiteVechicle.getFees() + 3)
            }
            if(time>10 && time <= 24 ){
                exiteVechicle.setFees(exiteVechicle.getFees() + 1)
            }
       }
   }
   private getPlace(plate :string):number{
       let index = -1 ; 
       let i = 0 ;
       while(index == -1 && i  < this.slotes.length ){
            if(this.slotes[i].getPlate()  === plate){
                index = i ;
            }
            i++;
       }
       
       return index
   }
   public printParking():void{
       this.slotes.forEach((vehicle)=>{
           console.log("vehicle Number :" , vehicle.getPlate(), " , entryTime", vehicle.getEnterTime());
           })
   }
}
export {Parking}