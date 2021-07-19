import { Customer } from "./Customer";
import { Medicine } from "./Medicine";

export class Order {
    orderId:number;
    orderDate:Date;
    medicineList:Array<Medicine>;
    dispatchDate:Date;
    totalCost:number;
    customer:Customer;
    orderStatus:string;
    constructor(){
        this.medicineList = [];
        this.customer = new Customer();
    }
}