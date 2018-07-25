export default class CrewDto
{
 constructor(Id,pilotId,stewardessesid) {
     this.Id=Id;
     this.pilotId=pilotId;
     this.stewardessids=stewardessesid;
    }
    public Id: number; 
    public pilotId:number;
    public stewardessids:Array<number>;
}