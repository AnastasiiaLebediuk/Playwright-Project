import BaseElement from "../Elements/BaseElement";
import { BasePage } from "./BasePage";

const url = "url";

export class FuelExpensesextends extends BasePage {
     #baseElement = new BaseElement(this.page);

     constructor(page){
        super(page,url);
        this.page = page;
    }
    
 
    get fuelExpensesButton(){
        return this.#baseElement.getElement('[class="icon icon-fuel"]');
    }

    get addAnExpenseButton(){
        return this.#baseElement.getElement('button[class="btn btn-primary"]');
    }

    get vehicleField (){
        return this.#baseElement.getElement('[formcontrolname="carId"]');
    }

    get reportDateField (){
        return this.#baseElement.getElement('[placement="dd.mm.yyyy"]');
    }

    get mileageField2 (){
        return this.#baseElement.getElement('[formcontrolname="mileage"]');
    }

    get numberOfLiters (){
        return this.#baseElement.getElement('[formcontrolname="liters"]');
    }

    get totalCost (){
        return this.#baseElement.getElement('[formcontrolname="totalCost"]');
    }

    get addButton2 (){
        return this.#baseElement.getElement('.modal-footer').contains('button.btn.btn-primary','Add')
    }

}