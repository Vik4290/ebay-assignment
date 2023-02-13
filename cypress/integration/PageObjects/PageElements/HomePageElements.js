/// <reference types="cypress" />

const locator = require("../../locators.json");

export default class HomePageElements {
  shopByCategory() {
    return cy.get(locator.homePage.shopByCategory, { timeout: 10000 });
  }

  electronicsTitle() {
    return cy.get(locator.homePage.electronicsTitle, { timeout: 10000 });
  }

  cellPhoneAccessoriesLink() {
    return cy.get(locator.homePage.cellPhoneAccessoriesLink, {
      timeout: 10000,
    });
  }
}
