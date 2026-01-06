import BaseElement from "../Elements/BaseElement";



export class HomePage {

    // navigate(){
    //     cy.visit('/',{
    //          auth:{
    //             username: "guest",
    //             password: "welcome2qauto",
    //         },
    //     });
    // }

    #baseElement = new BaseElement();

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
        return this.#baseElement.getElement('button.btn.btn-primary').contains('Login');
    }

    login(email, password){
        this.inputSignInEmail.type(email);
        this.inputSignInPassword.type(password, {sensitive: true});
        this.buttonLogIn.click();
    }
    

}