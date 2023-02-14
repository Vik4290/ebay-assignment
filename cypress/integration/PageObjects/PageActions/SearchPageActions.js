/// <reference types="cypress" />

const SearchPageElements = require("../PageElements/SearchPageElements.js");

export default class SearchPageActions {
  constructor() {
    globalThis.searchPageElement = new SearchPageElements();
  }

  verifySearchPageTitle(pageTitle) {
    cy.title().should("contains", pageTitle);
  }

  verifyPageHeader(header) {
    cy.contains(header);
  }

  verifyFilterAppliedOnSearchPage(appliedFilter) {
    searchPageElement.threefilterAppliedButton().contains(appliedFilter);
  }

  clickThreefilterAppliedButton() {
    searchPageElement.threefilterAppliedButton().click();
  }

  verifyAppliedFilters(displayFilter, priceFilter, locationFilter) {
    searchPageElement
      .threefilterAppliedButton()
      .siblings()
      .contains(displayFilter);
    searchPageElement
      .threefilterAppliedButton()
      .siblings()
      .contains(priceFilter);
    searchPageElement
      .threefilterAppliedButton()
      .siblings()
      .contains(locationFilter);
  }

  verifyFirstItem() {
    searchPageElement
      .firstItemInSearchResult()
      .eq(1)
      .then(($in) => {
        cy.wrap($in)
          .children()
          .invoke("text")
          .should("contains", "Apple MacBook");
      });
  }
}
