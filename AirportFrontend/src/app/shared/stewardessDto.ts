export default class PilotDto
{
 constructor(Id,FirstName,LastName,DateOfBirth) {
     this.Id=Id;
     this.FirstName=FirstName;
     this.LastName=LastName;
     this.DateOfBirth = DateOfBirth;
    }
    public Id: number; 
    public FirstName:string;
    public LastName:string;
    public DateOfBirth:string;
}