Feature: Handling iFrames interactions

    @demo
    Scenario Outline: Demo iFrames interactions
        Given a frame web page opened
        When I click iframe then enter text


        Examples:
            | TestID    |
            | Web_TC008 |
