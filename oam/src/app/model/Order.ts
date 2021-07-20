import { CustomerDTO } from "./CustomerDTO";
import { Medicine } from "./Medicine";

export class Order {
    orderId:number;
    orderDate:Date;
    medicineList:Array<Medicine>;
    dispatchDate:Date;
    totalCost:number;
    customerDto:CustomerDTO;
    status:string;
    constructor(){
        this.medicineList = [];
        this.customerDto = new CustomerDTO();
    }
}