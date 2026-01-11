import BaseElement from "../Elements/BaseElement";
import { BasePage } from "./BasePage";

const url = "/";

export class HomePage extends BasePage {

    #baseElement = new BaseElement(this.page);

    constructor(page){
        super(page, url);
        this.page = page;
    }

    get couponCode(){
        return this.#baseElement.getElement("#couponCode1");
    }


    get button(){
        return this.#baseElement.getElement('button[class="hero-descriptor_btn btn btn-primary"]');
    }
    get inputName() {
        return this.#baseElement.getElement("#signupName");
    }
    get inputLastName() {
        return this.#baseElement.getElement("#signupLastName");
    }
    get inputEmail() {
        return this.#baseElement.getElement('input[id="signupEmail"]');
    }
    get inputPassword() {
        return this.#baseElement.getElement('input[id="signupPassword"]');
    }
    get inputRepeatPassword() {
        return this.#baseElement.getElement('input[id="signupRepeatPassword"]');
    }
    get buttonRegister() {
        return this.#baseElement.getElement('.modal-footer  .btn.btn-primary');
    }

    get buttonSignIn(){
        return this.#baseElement.getElement('button.btn.btn-outline-white.header_signin');
    }
    get inputSignInEmail() {
        return this.#baseElement.getElement("#signinEmail");
    }
    get inputSignInPassword() {
        return this.#baseElement.getElement("#signinPassword");
    }
    get buttonLogIn() {
        return this.#baseElement.getElement('button.btn.btn-primary:has-text("Login")');
    }

   async login(email, password){
        await this.inputSignInEmail.type(email);
        await this.inputSignInPassword.type(password);
        await this.buttonLogIn.click();
    }
    

}