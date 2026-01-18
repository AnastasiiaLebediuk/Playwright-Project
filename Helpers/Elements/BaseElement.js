
export default class BaseElement{
    
    constructor (page){
        this.page = page;
    }

   async navigate(path = '') {
      await this.page.goto(path);
  }

    getElement(selector){
       return this.page.locator(selector);
    }

//     getElement(selector, options = {}) {
//     return this.page.locator(selector, options);
// }

    getByText (selector){
        return this.page.getByText (selector);
    }
}