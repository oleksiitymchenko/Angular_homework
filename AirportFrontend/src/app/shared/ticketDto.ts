export default class TicketDto{
    public id: number;
    public price: number;
    public number: string;
    /**
     *
     */
    constructor(id,price,number) {
       this.id=id;
       this.price=price;
       this.number=number;
    }
}