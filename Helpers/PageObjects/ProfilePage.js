import BaseElement from "../Elements/BaseElement";
import { BasePage } from "./BasePage";



export class ProfilePage extends BasePage {
     #baseElement;

     constructor(page){
        super(page,"/panel/garage");
        this.page = page;
        this.#baseElement = new BaseElement(this.page)
    }
    

     get myProfileButton() {
        return this.#baseElement.getElement('#userNavDropdown');
    }

    get menuProfileButton(){
        return this.#baseElement.getElement('[class="dropdown-item btn btn-link user-nav_link"][href="/panel/profile"]')
    }

    get profileButton(){
        return this.#baseElement.getElement('a.btn.btn-white.btn-sidebar.sidebar_btn.-profile')
    }
}