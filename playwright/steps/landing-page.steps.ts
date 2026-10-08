import { expect } from "@playwright/test";
import { Given, Then } from "./fixtures";

Given("je visite la page d'accueil", async ({ homePage }) => {
  await homePage.open();
});

Then("le titre de la page est {string}", async ({ page }, titre: string) => {
  await expect(page).toHaveTitle(titre);
});

Then("le bouton de langue {string} est actif", async ({ homePage }, langue: string) => {
  await expect(homePage.langButton(langue)).toHaveClass(/(^|\s)active(\s|$)/);
});
