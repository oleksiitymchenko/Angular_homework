export default class CrewDto
{
 constructor(Id,pilotId,stewardessesid) {
     this.Id=Id;
     this.pilotId=pilotId;
     this.stewardessIds=stewardessesid;
    }
    public Id: number; 
    public pilotId:number;
    public stewardessIds:Array<number>;
}