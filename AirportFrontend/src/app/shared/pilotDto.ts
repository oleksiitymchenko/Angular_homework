export default class PilotDto
{
 constructor(Id,FirstName,LastName,Experience) {
     this.Id=Id;
     this.FirstName=FirstName;
     this.LastName=LastName;
     this.Experience = Experience;
    }
    public Id: number; 
    public FirstName:string;
    public LastName:string;
    public Experience:number;
}