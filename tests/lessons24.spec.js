import {test , expect} from "@playwright/test";
import { HomePage } from "../Helpers/PageObjects/HomePage.js";
import { GaragePage} from "../Helpers/PageObjects/GaragePage.js";
// import { before, beforeEach, describe } from "node:test";



test.describe.skip  ("Positive test", ()=>{
    
    test.beforeEach(async({page})=>{
           
            await page.goto("/", {waitUntil: "networkidle"});
        });

    test.skip ("First test",async({ page })=>{
        const homePage = new HomePage(page);
        const garagePage = new GaragePage(page);


        await homePage.button.click();
        await homePage.inputName.type('Anastasiiausertestus');
        await homePage.inputLastName.type('Lebediuklastnameuser');
        await homePage.inputEmail.type('aqa2-nasta@lebediuk.com');
        await homePage.inputPassword.type('TestPassword123');
        await homePage.inputRepeatPassword.type('TestPassword123');
        await homePage.buttonRegister.click();

        await page.waitForURL('**/panel/garage');

        await expect(garagePage.garageButton).toBeVisible();
        
    })
})

test.describe.skip  ("Negative tests", ()=>{

    test.beforeEach(async({page})=>{
           
            await page.goto("/", {waitUntil: "networkidle"});
        });

    
    test.skip ("Empty name", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputName.click();
        await homePage.inputLastName.click();

        await expect(page.getByText("Name required")).toBeVisible();
    });


    test.skip ("Short name", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputName.type('K');
        await homePage.inputLastName.click();

        await expect(page.getByText("Name has to be from 2 to 20 characters long")).toBeVisible();
    });

    test.skip ("Incorrect language the name", async({page})=>{

        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputName.type('л9');
        await homePage.inputLastName.click();

        await expect(page.getByText("Name is invalid")).toBeVisible();
    });


    test.skip ("Too long a name", async({page})=>{
        const homePage = new HomePage(page);


        await homePage.button.click();
        await homePage.inputName.type('Anastasiia user test12');
        await homePage.inputLastName.click();

        await expect(page.getByText("Name is invalid")).toBeVisible();
    });


    test.skip  ("Empty Lastname", async({page})=>{
        const homePage = new HomePage(page);


        await homePage.button.click();
        await homePage.inputLastName.click();
        await homePage.inputEmail.click();

        await expect(page.getByText("Last name required")).toBeVisible();

    });

    test.skip ("Short LastName", async({page})=>{

     const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputLastName.type('k');
        await homePage.inputEmail.click();

        await expect(page.getByText("Last name has to be from 2 to 20 characters long")).toBeVisible();

    });


        
    test.skip ("Too long a LastName", async({page})=>{

     const homePage = new HomePage(page);

       await homePage.button.click();
       await homePage.inputLastName.type('Lebediuk last name1234');
       await homePage.inputEmail.click();

       await expect(page.getByText("Last name is invalid")).toBeVisible();

    });

    test.skip ("Incorrect of the last name",async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputLastName.type('35');
        await homePage.inputEmail.click();

        await expect(page.getByText("Last name is invalid")).toBeVisible();

    });

    test.skip  ("Empty Email", async ({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputEmail.click();
        await homePage.inputPassword.click();

        await expect(page.getByText("Email required")).toBeVisible();

    });

    test.skip ("Invalid email", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputEmail.type('testtest.com');
        await homePage.inputPassword.click();

        await expect(page.getByText("Email is incorrect")).toBeVisible();

    });


    test.skip ("Empty password", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputPassword.click();
        await homePage.inputRepeatPassword.click();

        await expect(page.getByText("Password required")).toBeVisible();

    });

    test.skip ("Short password", async({page})=>{
        const homePage = new HomePage(page);

        homePage.button.click();
        homePage.inputPassword.type('Test12');
        homePage.inputRepeatPassword.click();

        await expect(page.getByText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")).toBeVisible();

    });

    test.skip ("Password in capital letters", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputPassword.type('TEST123W');
        await homePage.inputRepeatPassword.click();

        await expect(page.getByText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")).toBeVisible();

    });

    test.skip ("Password in lowercase letters", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputPassword.type('teste123');
        await homePage.inputRepeatPassword.click();

        await expect(page.getByText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")).toBeVisible();

    });

     test.skip ("Empty Re-enter password", async({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputPassword.type('Qwert123');
        await homePage.inputRepeatPassword.click();
        await homePage.inputPassword.click();

        await expect(page.getByText("Re-enter password required")).toBeVisible();

    });

    test.skip  ("Short Re-enter password", async ({page})=>{
        const homePage = new HomePage(page);

        await homePage.button.click();
        await homePage.inputPassword.type('Qwert123');
        await homePage.inputRepeatPassword.type('Qwert12');
        await homePage.inputPassword.click();

        await expect(page.getByText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter")).toBeVisible();

    });
    });


    test.describe.skip ("Login test", ()=>{

        test.beforeEach(async({page})=>{
           
            await page.goto("/", {waitUntil: "networkidle"});
        });

        test.skip ("Login", async ({page})=>{
            const homePage = new HomePage(page);
            const garagePage = new GaragePage(page);
            

            await homePage.buttonSignIn.click();
            homePage.login("aqa2-nasta@lebediuk.com", "TestPassword123");

            await page.waitForURL('**/panel/garage');

            await expect(garagePage.garageButton).toBeVisible();

        });

    });
