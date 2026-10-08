import { Page } from "@playwright/test";

const SCREEN_SIZES: Record<string, { width: number; height: number }> = {
  mobile: { width: 375, height: 667 },
  tablette: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
};

export class HomePagePO {
  constructor(private page: Page) {}

  // Gestes (actions) : ils font quelque chose, donc on les attend avec await
  async open() {
    await this.page.goto("/");
  }

  async chooseLanguage(lang: string) {
    await this.langButton(lang).click();
  }

  async setScreenSize(size: string) {
    await this.page.setViewportSize(SCREEN_SIZES[size]);
  }

  // Repères (locators) : ils disent où se trouve un élément, sans rien faire
  langButton(lang: string) {
    return this.page.getByTestId(`lang-${lang.toLowerCase()}`);
  }

  navLink(name: string) {
    return this.page.getByTestId(`nav-${name}`);
  }

  section(name: string) {
    return this.page.getByTestId(`section-${name}`);
  }

  sectionTitle(name: string) {
    return this.page.getByTestId(`title-${name}`);
  }

  get logo() {
    return this.page.getByTestId("logo");
  }

  get serviceTileTitles() {
    return this.page.getByTestId("service-tile-title");
  }

  get colleagueTitle() {
    return this.page.getByTestId("colleague-title");
  }

  get colleagueLink() {
    return this.page.getByTestId("colleague-link");
  }

  get colleagueEmail() {
    return this.page.getByTestId("colleague-email");
  }

  get contactEmail() {
    return this.page.getByTestId("contact-email");
  }

  get contactPhone() {
    return this.page.getByTestId("contact-phone");
  }
}
