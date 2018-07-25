export default class PlaneDto
{
    public id: number;
    public  typePlaneId: number;
    public created: string;
    public lifeTime: string;

    constructor(id,name,planeTypeId,created,lifetime) {
        this.id=id;
        this.typePlaneId=planeTypeId;
        this.created = created;
        this.lifeTime=lifetime;       
    }
}