export default class CrewDto
{
 constructor(Id,pilotId,stewardessesid) {
     this.Id=Id;
     this.pilotId=pilotId;
     this.stewardessesid=stewardessesid;
    }
    public Id: number; 
    public pilotId:number;
    public stewardessesid:Array<number>;
}