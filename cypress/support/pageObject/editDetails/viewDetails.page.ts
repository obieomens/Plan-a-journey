export class ViewDetailsPage {
    elements = {
        getViewDetailsButton: () => cy.get('button[data-show-text="View details"]'),
        getFareDetails: () => cy.get('[data-tracking="jp_fares"]'),
        getSelectedJourneyDetails: () => cy.get('[id="option-1-fare-details-content"]')
    }

    clickViewDetails() {
        this.elements.getViewDetailsButton().click()
    }
    fareDetails() {
        this.elements.getFareDetails().click()
    }
    selectedJourneyDetail() {
        this.elements.getSelectedJourneyDetails().should('be.visible')
    }
}