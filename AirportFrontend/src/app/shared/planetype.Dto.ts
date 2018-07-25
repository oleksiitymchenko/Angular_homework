export default class PlaneTypeDto {
    public id: number;
    public model: string;
    public places: number;
    public carrying: number;
  
    constructor(id, model, places, carrying) {
        this.id = id;
        this.model = model;
        this.places = places;
        this.carrying = carrying;
    }
}