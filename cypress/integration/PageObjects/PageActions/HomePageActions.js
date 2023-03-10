/// <reference types="cypress" />

const HomePageElements = require("../PageElements/HomePageElements.js");

export default class HomePageActions {
  constructor() {
    globalThis.homePageElement = new HomePageElements();
  }

  clickShopByCategory() {
    homePageElement.shopByCategory().click();
  }

  verifyCellphoneAccessoriesLink(linkName) {
    homePageElement.electronicsTitle().should("exist");
    homePageElement.cellPhoneAccessoriesLink().should("exist");
  }

  clickCellphoneAccessoriesLink() {
    homePageElement.cellPhoneAccessoriesLink().click();
  }

  searchBarInput(item) {
    homePageElement.searchBarInput().type(item);
  }

  selectCategoryDropdown(category) {
    homePageElement.selectCategoryDropdown().select(category);
  }

  clickSearchButton() {
    homePageElement.searchButton().click();
  }
}
