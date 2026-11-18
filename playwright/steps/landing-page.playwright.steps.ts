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

Then(
  "la navigation contient des liens vers les sections {string}, {string}, {string}, {string}, {string}",
  async ({ homePage }, home: string, about: string, services: string, pricing: string, contact: string) => {
    const expectedLabels = { home, about, services, pricing, contact };
    for (const [section, label] of Object.entries(expectedLabels)) {
      await expect(homePage.navLink(section)).toHaveText(label);
    }
  }
);

Then(
  "les boutons de langue {string}, {string}, {string}, {string} sont présents",
  async ({ homePage }, fr: string, es: string, de: string, en: string) => {
    for (const langue of [fr, es, de, en]) {
      await expect(homePage.langButton(langue)).toBeVisible();
      await expect(homePage.langButton(langue)).toHaveText(langue);
    }
  }
);

Then("la section collègue a un titre", async ({ homePage }) => {
  await expect(homePage.colleagueTitle).toBeVisible();
  await expect(homePage.colleagueTitle).not.toBeEmpty();
});

Then("un lien vers le site de Josianne Myre est présent", async ({ homePage }) => {
  await expect(homePage.colleagueLink).toBeVisible();
  await expect(homePage.colleagueLink).toHaveAttribute("href", /tradumyre\.de/);
});

Then("un lien mailto vers {string} est présent", async ({ homePage }, courriel: string) => {
  await homePage.expectLinksVisible(`mailto:${courriel}`);
});

Then("un lien tel vers {string} est présent", async ({ homePage }, numero: string) => {
  await homePage.expectLinksVisible(`tel:${numero}`);
});
