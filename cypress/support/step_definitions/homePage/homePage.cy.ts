import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from "../../pageObject";


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
