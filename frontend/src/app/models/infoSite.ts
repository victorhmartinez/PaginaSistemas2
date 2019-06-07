export class InfoSite {

    Site_site_id: number;
    description: string;
    type_info: number;

    constructor(Site_site_id?: number, description?: string, type_info?: number){
        this.Site_site_id = Site_site_id,
        this.description = description,
        this.type_info = type_info
    }

}