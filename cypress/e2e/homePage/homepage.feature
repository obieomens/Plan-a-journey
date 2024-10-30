Feature: Plan a Journey
  Background:
    Given I am on the Plan a Journey page
    Given I am on the journey planner results page
    And I click on the plan journey button



  Scenario: Plan a journey from one location to another
    When I plan a journey from "Waterloo" to "Oxford Circus"
    Then I should see journey results

    Scenario: Edit Journey preferences and select least walking
      When I edit my preferences
      And I select the route with least walking
      And I click on update journey
      Then I should see the updated journey result

      Scenario: View Details
        When I click on view details
        And I click on fare details
        Then I should see all my selected Journey details

  Scenario: Error message displayed when an invalid journey is planned
    When I fill in the journey details with invalid locations
    And I click on the plan journey button
    Then I should see an error or no results message

  Scenario: Unable to plan a journey if no locations are entered
    Given I am on the journey planner page
    When I leave the "From" and "To" fields empty
    Then I should see an error or validation message