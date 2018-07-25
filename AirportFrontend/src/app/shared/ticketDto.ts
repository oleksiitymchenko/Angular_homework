export default class TicketDto{
    public id: number;
    public price: number;
    public flightNumber: string;
    /**
     *
     */
    constructor(id,price,number) {
       this.id=id;
       this.price=price;
       this.flightNumber=number;
    }
}