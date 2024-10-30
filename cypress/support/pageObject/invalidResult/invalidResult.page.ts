export class InvalidResultPage{
    elements = {
        getFromField: () => cy.get('input[id="InputFrom"]'),
        getToField: () => cy.get('input[id="InputTo"]'),
        getPlanJourneyButton: () => cy.get('input[id="plan-journey-button"]'),
        getErrorMessage: () => cy.get('[class="field-validation-error"]')
    }

    fromField(){
        this.elements.getToField()
    }


}