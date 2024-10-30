import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from "../../pageObject";
import {journeyPlannerPage} from "../../pageObject";
import {viewDetailsPage} from "../../pageObject";


Given('I am on the Plan a Journey page', () => {
    homePage.visit();
});

When('I plan a journey from {string} to {string}', (from, to) => {
    homePage.fillJourneyDetails('Waterloo', 'Oxford Circus');
    homePage.submitJourney();
});

Then('I should see journey results', () => {
    homePage.verifyJourneyResults();
});
Given(/^I am on the journey planner results page$/, function () {
    homePage.verifyJourneyResults()
});
When(/^I edit my preferences$/, function () {
    journeyPlannerPage.editPreferences()
});
When(/^I select the route with least walking$/, function () {
    journeyPlannerPage.selectLeastWalkingRoute()
});
When(/^I click on update journey$/, function () {
    journeyPlannerPage.updateJourney()
});
Then(/^I should see the updated journey result$/, function () {
    journeyPlannerPage.verifyJourneyUpdatedResults()
});
When(/^I click on view details$/, function () {
    viewDetailsPage.clickViewDetails()
});
When(/^I click on fare details$/, function () {
    viewDetailsPage.fareDetails()
});
Then(/^I should see all my selected Journey details$/, function () {
    viewDetailsPage.selectedJourneyDetail()
});
When(/^I fill in the journey details with invalid locations$/, function () {

});
When(/^I click on the plan journey button$/, function () {

});
Then(/^I should see an error or no results message$/, function () {

});