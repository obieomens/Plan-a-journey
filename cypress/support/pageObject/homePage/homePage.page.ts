import {getAnchorTag, getHeadingTwo} from "../../util/helper";

export class HomePage {
    elements = {
        //getJourneyForm: () => cy.get('["plan-a-journey"]'),
        getFromField: () => cy.get('input[id="InputFrom"]'),
        getToField: () => cy.get('input[id="InputTo"]'),
        getPlanJourneyButton: () => cy.get('input[id="plan-journey-button"]'),
        getJourneyResults: () => cy.get('[data-favourite-journey="My journey"]'),
    }

    visit() {
        cy.visit('https://tfl.gov.uk/plan-a-journey/');
    }

    verifyHeader() {
        cy.tagContainsValue(getAnchorTag(), 'Plan a journey');
        cy.tagContainsValue(getHeadingTwo(), 'Plan your journey');
    }

    fillJourneyDetails(from: string, to: string) {
        this.elements.getFromField().clear().type(from);
        this.elements.getToField().clear().type(to);
    }

    submitJourney() {
        this.elements.getPlanJourneyButton().click();
    }

    verifyJourneyResults() {
        this.elements.getJourneyResults().should('exist');
    }
}


