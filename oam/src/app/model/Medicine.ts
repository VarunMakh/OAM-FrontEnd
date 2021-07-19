import { Category } from "./Category";

export class Medicine {
    medicineId:number;
    medicineName:string;
    medicineCost:number;
    mfd:Date;
    expiryDate:Date;
    company:string;
    category:Category;
}