export default class PilotDto
{
 constructor(Id,FirstName,LastName,Experience) {
     this.id=Id;
     this.firstName=FirstName;
     this.lastName=LastName;
     this.experience = Experience;
    }
    public id: number; 
    public firstName:string;
    public lastName:string;
    public experience:number;
}