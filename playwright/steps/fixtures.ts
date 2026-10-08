import { test as base, createBdd } from "playwright-bdd";
import { HomePagePO } from "../pages/HomePagePO";

export const test = base.extend<{ homePage: HomePagePO }>({
  homePage: async ({ page }, use) => {
    await use(new HomePagePO(page));
  },
});

export const { Given, When, Then } = createBdd(test);
