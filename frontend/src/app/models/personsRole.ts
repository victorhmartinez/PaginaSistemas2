import { Person } from './person';
import { ItemCategory } from './itemCategory';

export class PersonsRole {

    persons_role_id: number;
    persons_id : Person;
    item_category_id: ItemCategory;

    constructor(persons_role_id?: number, persons_id?: Person, item_category_id?: ItemCategory){
        this.persons_role_id = persons_role_id,
        this.persons_id = persons_id,
        this.item_category_id = item_category_id  
    }

}