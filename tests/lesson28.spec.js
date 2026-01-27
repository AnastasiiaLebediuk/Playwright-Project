import { HomePage } from "../Helpers/PageObjects/HomePage";
import { expect } from "@playwright/test";
import { test } from "../fixtures/Fixtures/userGaragePage.js";



test.describe ("Positive test", ()=>{
    
    test.beforeEach(async({page})=>{
           
            await page.goto("/", {waitUntil: "networkidle"});
        });


        test("Local Storage", async ({userGaragePage, page}) => {
            const homePage = new HomePage(page);
            

            const localCredentials  = await page.evaluate(async () => {
                localStorage.setItem("key", "local storage test text");
                return localStorage.getItem("key");
            });

            console.log(localCredentials);

            await homePage.buttonSignIn.click();
            await homePage.login("aqa2-nasta@lebediuk.com", "TestPassword123");

            await page.waitForURL('**/panel/garage');

            await expect(userGaragePage.garageButton).toBeVisible();
        
        // Add a car

           await userGaragePage.addCarBtn.click();
           await userGaragePage.brandField.selectOption('Audi');
           await userGaragePage.modelField.selectOption('TT');
           await userGaragePage.mileageField.fill('9');
           await userGaragePage.addButton.click();
    

    });

 })