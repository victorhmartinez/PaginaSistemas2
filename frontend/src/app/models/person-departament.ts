export class PersonDepartament {
    persons_departaments_id:number;
    item_category_id:number;
    persons_id:number;
    universitycareer: number;
    constructor(persons_departaments_id?:number,item_category_id?:number,person_id?:number,universitycareer?: number){
        this.persons_departaments_id=persons_departaments_id,
        this.item_category_id=item_category_id,
        this.persons_id=person_id,
        this.universitycareer=universitycareer
    }

}
