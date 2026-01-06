import BaseElement from "../Elements/BaseElement";


export class GaragePage {

    // #baseElement = new BaseElement();

     get addCarBtn() {
        return cy.contains('button.btn.btn-primary', 'Add car');
    }


    get brandField (){
        return cy.get('[formcontrolname="brand"]');
    }

    get modelField (){
        return cy.get('[formcontrolname="model"]');
    }

    get mileageField (){
        return cy.get('[formcontrolname="mileage"]');
    }

    get addButton() {
    return cy.get('.modal-footer').contains('button.btn.btn-primary', 'Add');
    }

    get garageButton(){
        return cy.get('.btn.btn-white.btn-sidebar.sidebar_btn.-active')
    }



}