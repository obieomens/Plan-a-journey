Feature: Plan a Journey

  Scenario: Plan a journey from one location to another
    Given I am on the Plan a Journey page
    When I plan a journey from "Waterloo" to "Oxford Circus"
    Then I should see journey results
