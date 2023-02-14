/// <reference types="cypress" />

const locator = require("../../locators.json");

export default class SearchPageElements {
  threefilterAppliedButton() {
    return cy.get(locator.searchPage.threefilterAppliedButton, {
      timeout: 10000,
    });
  }

  firstItemInSearchResult() {
    return cy.get(locator.searchPage.firstItemInSearchResult, {
      timeout: 10000,
    });
  }
}
