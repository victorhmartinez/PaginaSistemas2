export class ContentInfo {
    content_info_id:number;
    
    place:string;
    link_form:string;
    url:string;
    content_content_id:number;
    constructor(content_info_id?:number,place?:string,link_form?:string,url?:string,content_content_id?:number){
   
        this.content_info_id=content_info_id;
    
       this. place=place;
        this.link_form=link_form;
        this.url=url;
        this.content_content_id = content_content_id;
    }
}
