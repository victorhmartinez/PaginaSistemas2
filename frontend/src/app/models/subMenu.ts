import { Menu } from './menu';

export class SubMenu {

    idSubMenu: number;
    name: string;
    orden: number;
    url: string;
    menu_menu_id: Menu;
    

    constructor(idSubMenu?: number, name?: string, orden?: number, url?: string, menu_menu_id?: Menu){
        this.idSubMenu = idSubMenu,
        this.name = name,
        this.orden = orden,
        this.url = url,
        this.menu_menu_id = menu_menu_id
        
    }

}