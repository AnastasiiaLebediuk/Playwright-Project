
export class FuelExpenses{

    
 
    get fuelExpensesButton(){
        return cy.get('[class="icon icon-fuel"]');
    }

    get addAnExpenseButton(){
        return cy.get('button[class="btn btn-primary"]');
    }

    get vehicleField (){
        return cy.get('[formcontrolname="carId"]');
    }

    get reportDateField (){
        return cy.get('[placement="dd.mm.yyyy"]');
    }

    get mileageField2 (){
        return cy.get('[formcontrolname="mileage"]');
    }

    get numberOfLiters (){
        return cy.get('[formcontrolname="liters"]');
    }

    get totalCost (){
        return cy.get('[formcontrolname="totalCost"]');
    }

    get addButton2 (){
        return cy.get('.modal-footer').contains('button.btn.btn-primary','Add')
    }

}