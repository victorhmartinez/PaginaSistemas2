import { ItemCategory } from './itemCategory';

export class Menu {

    menu_id: number;
    name: string;
    orden: number;
    item_category_id: ItemCategory;
    

    constructor(menu_id?: number, name?: string, orden?: number, item_category_id?: ItemCategory){
        this.menu_id = menu_id,
        this.name = name,
        this.orden = orden,
        this.item_category_id = item_category_id
        
    }

}