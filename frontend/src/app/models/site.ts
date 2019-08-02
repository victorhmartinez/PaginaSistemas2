export class Site {
    site_id :number;
    title : string;
    icon : string;
    favicon : string

constructor(site_id?: number, title?:string, icon?:string, favicon?:string){
    this.site_id = site_id,
    this.title=title,
    this.icon=icon,
    this.favicon=favicon
}
}
