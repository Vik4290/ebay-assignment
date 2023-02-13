/// <reference types="cypress" />

const FiltersElements = require("../PageElements/FiltersElements.js");

export default class FilterActions {
  constructor() {
    globalThis.filtersElement = new FiltersElements();
  }

  clickScreenSize() {
    filtersElement.screenSizeCheckBox().click();
  }

  checkScreenSizeFiveByFive() {
    filtersElement.screenSize5by5CheckBox().click();
  }

  verifyScreenFiveByFiveCheckboxChecked() {
    filtersElement.screenSize5by5CheckBox().should("be.checked");
  }

  verifyNumberOfFilterSelected(selectedFilter) {
    filtersElement.appliedFilterCount().contains(selectedFilter);
  }

  verifyFilterAppliedInTray(filter) {
    filtersElement
      .appliedFilterCount()
      .siblings()
      .contains(filter, { timeout: 20000 });
  }

  clickPrice() {
    filtersElement.priceFilter().click();
  }

  inputMinimumValue(minValue) {
    filtersElement.inputMinimumValue().type(minValue);
  }

  inputMaximumValue(maxValue) {
    filtersElement.inputMaximumValue().type(maxValue);
    filtersElement.inputMinimumValue().click();
  }

  clickItemLocation() {
    filtersElement.itemLocationCheckBox().click();
  }

  clickLocationWorldWideRadioButton() {
    filtersElement.locationWorldWideRadioButton().click();
    filtersElement.itemLocationBody();
  }

  clickApplyButton() {
    filtersElement.applyButton().click();
  }
}
