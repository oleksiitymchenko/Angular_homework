export default class DepartureDto{
    public id: number;
    public number: string;
    public departureTime: string;
    public crewId: number;
    public planeId: number;

    constructor(id,number,departureTime,crewId,planeId) {
        this.id=id;
        this.number=number;
        this.departureTime=departureTime;
        this.crewId=crewId;
        this.planeId = planeId;    
    }
}