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

  searchBarInput() {
    return cy.get(locator.homePage.searchBarInput, {
      timeout: 10000,
    });
  }

  selectCategoryDropdown() {
    return cy.get(locator.homePage.selectCategoryDropdown, {
      timeout: 10000,
    });
  }

  searchButton() {
    return cy.get(locator.homePage.searchButton, {
      timeout: 10000,
    });
  }
}
