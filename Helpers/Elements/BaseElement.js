export default class {
    getElement(selector){
        return cy.get(selector);
    }

    getByText (selector){
        return cy.contains (selector);
    }
}