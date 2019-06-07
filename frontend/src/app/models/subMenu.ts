import { Menu } from './menu';

export class SubMenu {

    subMenu_id: number;
    name: string;
    orden: string;
    menu_id: Menu;
    

    constructor(subMenu_id?: number, name?: string, orden?: string, menu_id?: Menu){
        this.subMenu_id = subMenu_id,
        this.name = name,
        this.orden = orden,
        this.menu_id = menu_id
        
    }

}