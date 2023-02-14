/* global */

/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";

var HomePageActions = require("../PageObjects/PageActions/HomePageActions.js");
var CellPhoneAccessoryActions = require("../PageObjects/PageActions/CellPhoneAccessoryActions.js");
var FilterActions = require("../PageObjects/PageActions/FilterActions.js");
var SearchPageActions = require("../PageObjects/PageActions/SearchPageActions.js");

const homeActions = new HomePageActions();
const cellPhoneActions = new CellPhoneAccessoryActions();
const filterAction = new FilterActions();
const searchAction = new SearchPageActions();

Cypress.on("uncaught:exception", () => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

When(/^I visit a main page$/, () => {
  cy.visit("/", { timeout: 60000 });
});

When(/^User click mouse on Shop by category dropdown$/, () => {
  homeActions.clickShopByCategory();
});

Then(/^User get "(.*)" link inside Electronics section$/, (linkName) => {
  homeActions.verifyCellphoneAccessoriesLink(linkName);
});

When(/^User click on "(.*)" link$/, () => {
  homeActions.clickCellphoneAccessoriesLink();
});

Then(
  /^User get "(.*)" in breadcrumb and also the title as "(.*)"$/,
  (breadcrumb, pageTitle) => {
    cellPhoneActions.verifyBreadCrumbAndTitle(breadcrumb, pageTitle);
  }
);

When(/^User click on Cell Phone & SmarPhones in left Menu$/, () => {
  cellPhoneActions.clickcellPhoneLinkLeftMenu();
});

Then(/^User click on See All button$/, () => {
  cellPhoneActions.clickSeeAllButton();
});

When(/^User click on Screen Size on pop up$/, () => {
  filterAction.clickScreenSize();
});

And(/^Check Checkbox for screen size 5.5 - 5.9 in$/, () => {
  filterAction.checkScreenSizeFiveByFive();
});

Then(/^Checkbox get checked$/, () => {
  filterAction.verifyScreenFiveByFiveCheckboxChecked();
});

Then(
  /^At bottom of the pop up user can see "(.*)" along with selected screen size details$/,
  (appliedFilter) => {
    filterAction.verifyNumberOfFilterSelected(appliedFilter);
    filterAction.verifyFilterAppliedInTray("5.5 - 5.9 in");
  }
);

When(/^User click on Price on pop up$/, () => {
  filterAction.clickPrice();
});

And(
  /^Enter "(.*)" as minimum and "(.*)" as maximum value$/,
  (minValue, maxValue) => {
    filterAction.inputMinimumValue(minValue);
    filterAction.inputMaximumValue(maxValue);
  }
);

Then(
  /^At bottom of the pop up user can see "(.*)" along with selected screen size details and price details$/,
  (appliedFilter) => {
    filterAction.verifyNumberOfFilterSelected(appliedFilter);
    filterAction.verifyFilterAppliedInTray("5.5 - 5.9 in");
    filterAction.verifyFilterAppliedInTray("$200 - $400");
  }
);

When(/^User click on Item Location pop up$/, () => {
  filterAction.clickItemLocation();
});

And(/^Check radio button for Worldwide$/, () => {
  filterAction.clickLocationWorldWideRadioButton();
});

Then(
  /^At bottom of the pop up user can see "(.*)" along with selected screen size details, price details, Item Loaction details$/,
  (appliedFilter) => {
    filterAction.verifyNumberOfFilterSelected(appliedFilter);
    filterAction.verifyFilterAppliedInTray("5.5 - 5.9 in");
    filterAction.verifyFilterAppliedInTray("$200 - $400");
    filterAction.verifyFilterAppliedInTray("Worldwide");
  }
);

When(/^User click on Apply button$/, () => {
  filterAction.clickApplyButton();
});

Then(
  /^User get Search result screen with filter text "(.*)". Also "(.*)" as Page title along with "(.*)" header text$/,
  (filterText, pageTitle, pageHeader) => {
    searchAction.verifySearchPageTitle(pageTitle);
    searchAction.verifyPageHeader(pageHeader);
    searchAction.verifyFilterAppliedOnSearchPage(filterText);
  }
);

When(/^User click on "(.*)" dropdown$/, () => {
  searchAction.clickThreefilterAppliedButton();
});

Then(
  /^User get "(.*)", "(.*)", "(.*)" already selected$/,
  (displayFilter, priceFilter, locationFilter) => {
    searchAction.clickThreefilterAppliedButton();
  }
);

When(/^User user enter "(.*)" in search bar on home page$/, (item) => {
  homeActions.searchBarInput(item);
});

And(
  /^Select "(.*)" as Search category followed by click on Search button$/,
  (category) => {
    homeActions.selectCategoryDropdown(category);
    homeActions.clickSearchButton();
  }
);

Then(/^Verify Page loaded successfully$/, () => {
  searchAction.verifySearchPageTitle(
    "Macbook in Computers/Tablets & Networking for sale | eBay"
  );
});

And(
  /^Verify that final results matches with then entered string in step1.$/,
  () => {
    searchAction.verifyFirstItem();
  }
);
