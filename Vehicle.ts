class Vehicle{
    private plate : string;
    private fees : number;
    private enterTime : number;
    private exiteTime : number;
    
    constructor(plate:string){
     this.plate = plate;
     this.fees = 0 ;
     this.enterTime =0 ; 
     this.exiteTime = 0;
    }
    public setFees(fees:number):void{
        this.fees = fees
    }
    public setEnterTime(enterTime:number):void{
        this.enterTime = enterTime
    }
    public setExaitTime(exiteTime:number):void{
        this.exiteTime = exiteTime
    }
    public getFees():number{
       return  this.fees 
    }
    public getPlate():string{
        return this.plate;
    }
    public getEnterTime():number{
      return  this.enterTime
    }
    public getExaitTime():number{
        return this.exiteTime 
    }
}
export {Vehicle}