export default class PlaneDto
{
    public id: number;
    public  planeTypeId: number;
    public created: string;
    public lifetime: string;

    constructor(id,name,planeTypeId,created,lifetime) {
        this.id=id;
        this.planeTypeId=planeTypeId;
        this.created = created;
        this.lifetime=lifetime;       
    }
}