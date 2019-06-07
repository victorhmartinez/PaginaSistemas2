export class ContentMedia {
    content_media_id :number;
    path : String;
    item_category_item_category_id :number;
    content_content_id: number;
constructor( content_media_id ?:number,path ?: String,item_category_item_category_id ?:number,content_content_id?: number){
this.content_media_id=content_media_id,
this.path= path,
this.item_category_item_category_id= item_category_item_category_id,
this.content_content_id=content_content_id
}
}
