import BaseElement from "../Elements/BaseElement";
import { BasePage } from "./BasePage";

// const url = "/panel/garage";

export class GaragePage extends BasePage {
     #baseElement;

     constructor(page){
        super(page,"/panel/garage");
        this.page = page;
        this.#baseElement = new BaseElement(this.page)
    }
    

     get addCarBtn() {
        return this.#baseElement.getElement('button.btn.btn-primary', 'Add car');
    }


    get brandField (){
        return this.#baseElement.getElement('[formcontrolname="brand"]');
    }

    get modelField (){
        return this.#baseElement.getElement('[formcontrolname="model"]');
    }

    get mileageField (){
        return this.#baseElement.getElement('[formcontrolname="mileage"]');
    }

    get addButton() {
    return this.#baseElement.getElement('.modal-footer').contains('button.btn.btn-primary', 'Add');
    }

    get garageButton(){
        return this.#baseElement.getElement('.btn.btn-white.btn-sidebar.sidebar_btn.-active')
    }



}