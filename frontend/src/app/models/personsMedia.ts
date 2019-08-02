import { Person } from './person';
import { ItemCategory } from './itemCategory';

export class PersonsMedia {

    persons_media_id: number;
    path: string;
    item_category_id: ItemCategory;
    persons_id : Person;
    

    constructor(persons_media_id?: number, path?: string, persons_id?: Person, item_category_id?: ItemCategory){
        this.persons_media_id = persons_media_id,
        this.path = path,
        this.item_category_id = item_category_id,
        this.persons_id = persons_id
        
    }

}