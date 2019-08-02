import { Time } from '@angular/common';

export class Content {
    content_id:number;
    title: string;
    description: string;
 
    type_event: number;
    academic_period:number;
    content_universitycareer  : number;
    

    constructor(content_id?: number, title?: string,description?: string,
        type_event?: number,academic_period?:number,content_universitycareer ? : number ){
      this.content_id=content_id,
      this.title=title,
      this.description=description,
     
      this.type_event= type_event,
      this.academic_period=academic_period,
      this.content_universitycareer= content_universitycareer;
    }

}
