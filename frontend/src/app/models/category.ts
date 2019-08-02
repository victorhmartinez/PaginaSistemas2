export class Category {

    idCategory: number;
    nameCategory: string;
    active: boolean;

    constructor(idCategory?: number, nameCategory?: string, active?: boolean){
        this.idCategory = idCategory,
        this.nameCategory = nameCategory,
        this.active = active
    }

}
