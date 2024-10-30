
export class JourneyPlannerPage {
    elements = {
        getEditPreferencesButton: () => cy.contains('button[class="toggle-options more-options"]'),
        getSelectLeastWalking: () => cy.get('input[id="JourneyPreference_2"]'),
        getUpdateJourneyButton: () => cy.get('input[class="primary-button plan-journey-button"]'),
        getJourneyUpdatedResults: () => cy.get('.results')
    }

    editPreferences() {
        this.elements.getEditPreferencesButton().click();
    }

    selectLeastWalkingRoute() {
        this.elements.getSelectLeastWalking().select('Least walking');
    }

    updateJourney() {
        this.elements.getUpdateJourneyButton().click();
    }

    verifyJourneyUpdatedResults() {
        this.elements.getJourneyUpdatedResults().should('exist');
    }
}