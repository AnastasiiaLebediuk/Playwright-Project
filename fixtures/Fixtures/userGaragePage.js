import  {test as base } from "@playwright/test";
import { GaragePage } from "../../Helpers/PageObjects/GaragePage.js";


export const test = base.extend({
    userGaragePage: async({ page }, use) => {
         const userGaragePage = new GaragePage (page);
         
         await use(userGaragePage)


    },

})