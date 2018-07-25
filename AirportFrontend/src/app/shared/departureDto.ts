export default class DepartureDto{
    public id: number;
    public flightNumber: string;
    public departureTime: string;
    public crewId: number;
    public planeId: number;

    constructor(id,number,departureTime,crewId,planeId) {
        this.id=id;
        this.flightNumber=number;
        this.departureTime=departureTime;
        this.crewId=crewId;
        this.planeId = planeId;    
    }
}