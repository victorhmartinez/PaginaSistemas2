export class PreRequirements {
    pre_requirements_id: number
    subject_matter_id_id : number
    subject_matter_requeriment_id :number
    constructor(pre_requirements_id ?:number,subject_matter_id_id?: number,subject_matter_requeriment_id?:number  ){
        this.pre_requirements_id= pre_requirements_id;
        this.subject_matter_id_id = subject_matter_id_id;
        this.subject_matter_requeriment_id= subject_matter_requeriment_id
    }
 
}
