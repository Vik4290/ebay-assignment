/// <reference types="cypress" />

const CellPhoneAccessoryElements = require("../PageElements/CellPhoneAccessoryElements.js");

export default class HomePageActions {
  constructor() {
    globalThis.cellPhoneAccessoryElement = new CellPhoneAccessoryElements();
  }

  verifyBreadCrumbAndTitle(breadcrumb, pageTitle) {
    cy.title().should("contains", pageTitle);
    cellPhoneAccessoryElement.breadcrumb().children().contains(breadcrumb);
  }

  clickcellPhoneLinkLeftMenu() {
    cellPhoneAccessoryElement.cellPhoneLinkLeftMenu().click();
  }

  clickSeeAllButton() {
    cellPhoneAccessoryElement.shopByBrand().prev().click();
  }
}
