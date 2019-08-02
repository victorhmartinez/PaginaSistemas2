import { Category } from './category';

export class ItemCategory {

    idItemCategory: number;
    nameItemCategory: string;
    active: boolean;
    category: Category;

    constructor(idItemCategory?: number, nameItemCategory?: string, active?: boolean, category?: Category){
        this.idItemCategory = idItemCategory,
        this.nameItemCategory = nameItemCategory,
        this.active = active,
        this.category = category
    }

}