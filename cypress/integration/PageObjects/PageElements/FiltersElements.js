/// <reference types="cypress" />

const locator = require("../../locators.json");

export default class FiltersElements {
  screenSizeCheckBox() {
    return cy.get(locator.filter.screenSizeCheckBox, {
      timeout: 10000,
    });
  }

  priceCheckBox() {
    return cy.get(locator.filter.priceCheckBox, {
      timeout: 10000,
    });
  }

  itemLocationCheckBox() {
    return cy.get(locator.filter.itemLocationCheckBox, {
      timeout: 10000,
    });
  }

  screenSize5by5CheckBox() {
    return cy.get(locator.filter.screenSize5by5CheckBox, {
      timeout: 10000,
    });
  }

  locationWorldWideRadioButton() {
    return cy.get(locator.filter.locationWorldWideRadioButton, {
      timeout: 10000,
    });
  }

  inputMinimumValue() {
    return cy.get(locator.filter.inputMinimumValue, {
      timeout: 10000,
    });
  }

  inputMaximumValue() {
    return cy.get(locator.filter.inputMaximumValue, {
      timeout: 10000,
    });
  }

  applyButton() {
    return cy.get(locator.filter.applyButton, {
      timeout: 10000,
    });
  }

  appliedFilterCount() {
    return cy.get(locator.filter.appliedFilterCount, {
      timeout: 10000,
    });
  }

  filterTray() {
    return cy.get(locator.filter.filterTray, {
      timeout: 10000,
    });
  }

  aspectScreenFilter() {
    return cy.get(locator.filter.aspectScreenFilter, {
      timeout: 10000,
    });
  }

  priceFilter() {
    return cy.get(locator.filter.priceFilter, {
      timeout: 10000,
    });
  }

  locationFilter() {
    return cy.get(locator.filter.locationFilter, {
      timeout: 10000,
    });
  }

  itemLocationBody() {
    return cy.get(locator.filter.itemLocationBody, {
      timeout: 10000,
    });
  }
}
