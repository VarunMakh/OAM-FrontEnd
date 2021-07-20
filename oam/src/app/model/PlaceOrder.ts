import { CustomerOrder } from "./CustomerOrder";
import { Medicine } from "./Medicine";

export class PlaceOrder {
    orderId:number;
    orderDate:Date;
    medicineList:Array<Medicine>;
    dispatchDate:Date;
    totalCost:number;
    customer:CustomerOrder;
    status:string;
    constructor(){
        this.medicineList = [];
        this.customer = new CustomerOrder();
    }
}