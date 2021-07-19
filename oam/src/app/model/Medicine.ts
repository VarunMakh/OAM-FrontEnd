import { Category } from "./Category";

export class Medicine {
    medicineId:number;
    medicineName:string;
    medicineCost:number;
    mfd:Date;
    expiryDate:Date;
    company:string;
    category:Category;
<<<<<<< HEAD
    constructor(){
        this.category = new Category();
=======
    isAdded: boolean;
    constructor(){
        this.category = new Category();
        this.isAdded = false;
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
    }
}