import { Site } from './site';
import { ItemCategory } from './itemCategory';

export class InfoSite {
    info_site_id:number;
    site_site_id: Site;
    description: string;
    type_info: ItemCategory;

    constructor(info_site_id?:number,site_site_id?: Site, description?: string, type_info?: ItemCategory){
        this.info_site_id = info_site_id,
        this.site_site_id = site_site_id,
        this.description = description,
        this.type_info = type_info
    }

}