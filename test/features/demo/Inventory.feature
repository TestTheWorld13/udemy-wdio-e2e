Feature: Handling multiple element with test scenarios

    @demo
    Scenario Outline: Demo multiple element interactions
        Given login to inverntory web app
        # When I enter ID <UserID>
        # When I enter Pass <Password>
        # Then inventory page should list  <NumberOfProducts>
        # Then validate all products have valid price

        Examples:
            | TestID    | NumberOfProducts | UserID        | Password     |
            | Inv_TC010 | 6                | standard_user | secret_sauce |
