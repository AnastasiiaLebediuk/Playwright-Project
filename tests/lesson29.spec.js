import { test } from "../fixtures/Fixtures/userGaragePage.js";
import { expect } from "@playwright/test";
import { HomePage } from "../Helpers/PageObjects/HomePage.js";
import { GaragePage} from "../Helpers/PageObjects/GaragePage.js";
import { ProfilePage } from "../Helpers/PageObjects/ProfilePage.js";

test.describe("Substitution test", () => {

    test("Request substitution", async ({page}) => {
        const homePage = new HomePage(page);
        const garagePage = new GaragePage(page);
        const profilePage = new ProfilePage(page);

       
        await page.route("/api/users/profile", async (route) => {
        await route.fulfill({
                  status: 200,
                  contentType: 'application/json,',
                 body: JSON.stringify({
                   status: "ok",
                   data: {
                     userId: 323243,
                     photoFilename: "default-user.png",
                     name: "Anastasiia",
                     lastName: "Lebediuk"
                }
            })
           })
        })

        await page.goto("/", {waitUntil: "networkidle"});

        await homePage.buttonSignIn.click();
        await homePage.login("aqa2-nasta@lebediuk.com", "TestPassword123");

        await page.waitForURL('**/panel/garage');

        await expect(garagePage.garageButton).toBeVisible();
        
        
        await profilePage.profileButton.click()

        await expect(page.locator("[class^='profile_name']")).toContainText("Anastasiia Lebediuk");

    })
})


test.describe("Add a car", () => {
      let token;
      test.beforeEach(async ({ request }) => {
            

            const response = await request.post("/api/auth/signin", {
                  data: {
                        email: "aqa2-nasta@lebediuk.com",
                        password: "TestPassword123",
                        remember: false,
                  },
            });

            token = response.headers()["set-cookie"].split(";")[0];
            await expect (response.status()).toBe(200);
      });

      test("Positive test", async ({ request }) => {
        const response = await request.post("/api/cars", {
            headers:{
                Cookies: token,
            },

            data: {
                    carBrandId: 2,
                    carModelId: 8,
                    mileage: 272,
                },
            });


    //   await request.get("/api/cars", {
    //         headers:{
    //             Cookies: token,
    //         },
    //     });

    const createdCar = await response.json();
    const carID = createdCar.data.id;

     await expect (response.status()).toBe(201);
     await expect (carID).toBeTruthy();

    // const carsID = createdCar.data.map((car) => {
    //     return car.id
    // });

    // for (const id of carID){
        const deleteCar = await request.delete(`/api/cars/${carID}`, {
            headers:{
                Cookies: token,
            },
        });
    // // }
    await expect (deleteCar.status()).toBe(200);
      });


      test("Negative test - incorrect data", async ({ request }) => {
       const postRequest1 = await request.post("/api/cars", {
            headers:{
                Cookies: token,
            },

            data: {
                    carBrandId: 0,
                    carModelId: 8,
                    mileage: 272,
                },
            });

           await expect (postRequest1.status()).toBe(404)

        });


      test("Negative test - data not fully added", async({request}) =>{

        const postRequest2 = await request.post("/api/cars", {
            headers:{
                Cookies: token,
            },

            data: {
                    carBrandId: 1,
                    
                },
        });

         await expect (postRequest2.status()).toBe(400);
      });
    
});
