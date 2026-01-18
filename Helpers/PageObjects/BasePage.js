export class BasePage{
    constructor (page,url){
        this.url = url;
        this.page = page;
    }
    async navigate(){
        await this.page.goto(this.url);
    }

}