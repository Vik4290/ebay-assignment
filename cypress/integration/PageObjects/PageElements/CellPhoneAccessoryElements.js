/// <reference types="cypress" />

const locator = require("../../locators.json");

export default class CellPhoneAccessoryElements {
  breadcrumb() {
    return cy.get(locator.cellPhoneAccessoriesPage.breadcrumb, {
      timeout: 10000,
    });
  }

  cellPhoneLinkLeftMenu() {
    return cy.get(locator.cellPhoneAccessoriesPage.cellPhoneLinkLeftMenu, {
      timeout: 10000,
    });
  }

  shopByBrand() {
    return cy.get(locator.cellPhoneAccessoriesPage.shopByBrand, {
      timeout: 10000,
    });
  }
}
