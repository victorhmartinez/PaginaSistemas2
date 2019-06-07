export class ContentInfo {
    content_info_id:number;
    date : Date;
    place:string;
    link_fom:string;
    urls:string;
    Content_content_id:number;
    constructor(content_info_id?:number,date ?: Date,place?:string,link_fom?:string,urls?:string,Content_content_id?:number){
   
        this.content_info_id=content_info_id;
        this.date = date;
       this. place=place;
        this.link_fom=link_fom;
        this.urls=urls;
        this.Content_content_id = Content_content_id;
    }
}
