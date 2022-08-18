Feature: Handling Waits interactions

    @demo
    Scenario Outline: Demo waitUntil interactions
        Given a waits web page opened
        When search with <SearchItem>
        Then click on first search result
        Then the url should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL          |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |
