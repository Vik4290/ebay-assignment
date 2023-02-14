Feature: Verify Search By Category feature with Applied filters


    Background: Navigate to Ebay Home Page
        When I visit a main page

    Scenario: Verify Cellphone & Accessories page get load when user click on Cellphone & Accessories link inside Electronics section
        When User click mouse on Shop by category dropdown
        Then User get "Cellphone & Accessories" link inside Electronics section
        When User click on "Cellphone & Accessories" link
        Then User get "Cell Phones & Accessories" in breadcrumb and also the title as "Cell Phones, Smartphones, Smart Watches"
        When User click on Cell Phone & SmarPhones in left Menu
        Then User click on See All button
        When User click on Screen Size on pop up
        And Check Checkbox for screen size 5.5 - 5.9 in
        Then Checkbox get checked
        Then At bottom of the pop up user can see "(1) Filter(s) selected" along with selected screen size details
        When User click on Price on pop up
        And Enter "200" as minimum and "400" as maximum value
        Then At bottom of the pop up user can see "(2) Filter(s) selected" along with selected screen size details and price details
        When User click on Item Location pop up
        And Check radio button for Worldwide
        Then At bottom of the pop up user can see "(3) Filter(s) selected" along with selected screen size details, price details, Item Loaction details
        When User click on Apply button
        Then User get Search result screen with filter text "3 filters applied". Also "5.5 - 5.9 Inch Cell Phones & Smartphones for sale | eBay" as Page title along with "5.5 - 5.9 Inch Cell Phones & Smartphones between US $200.00 and US $400.00" header text
        When User click on "3 filters applied" dropdown
        Then User get "Screen Size: 5.5 - 5.9 in", "Price: $200.00 to $400.00", "Item Location: Worldwide" already selected

    Scenario: Verify search result when user search for an item using search bar availble on home page
        When User user enter "Macbook" in search bar on home page
        And Select "Computers/Tablets & Networking" as Search category followed by click on Search button
        Then Verify Page loaded successfully
        And Verify that final results matches with then entered string in step1.


