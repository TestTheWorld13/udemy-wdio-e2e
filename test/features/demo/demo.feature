Feature: demo feature

    #@demo
    Scenario Outline: Running the first demo
        Given the Google page is opened
        When search with <SearchItem>
        Then click on first search result
        Then the url should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL          |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |

    