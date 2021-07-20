import { Category } from "./Category";

export class Medicine {
    medicineId:number;
    medicineName:string;
    medicineCost:number;
    mfd:Date;
    expiryDate:Date;
    company:string;
    category:Category;
    isAdded: boolean;
    constructor(){
        this.mfd = null;
        this.company = null;
        this.category = new Category();
        this.isAdded = false;
    }
}