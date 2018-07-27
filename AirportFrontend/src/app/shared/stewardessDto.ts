export default class PilotDto
{
 constructor(Id,FirstName,LastName,DateOfBirth) {
     this.id=Id;
     this.firstName=FirstName;
     this.lastName=LastName;
     this.dateOfBirth = DateOfBirth;
    }
    public id: number; 
    public firstName:string;
    public lastName:string;
    public dateOfBirth:string;
}