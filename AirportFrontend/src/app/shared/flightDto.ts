export default class FlightDTO
{
    public id: number;
    public startPoint: string;
    public startTime: string;
    public finishPoint: string;
    public finishTime: string;
    public ticketIds: Array<number>;
    
    constructor(id,number,startPoint,startTime,finishPoint,finishTime,tickets) {
        this.id=id;
        this.startPoint=startPoint;
        this.startTime = startTime;
        this.finishPoint = finishPoint;
        this.finishTime = finishTime;
        this.ticketIds = tickets;
    }
  
}