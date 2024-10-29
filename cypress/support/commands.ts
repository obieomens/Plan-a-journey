// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import Chainable = Cypress.Chainable;

declare namespace Cypress {
	interface Chainable<Subject> {
		tagContainsValue(element: Chainable, value: string): Chainable<JQuery>
		clickLink(label: string): void
		typeById(id: string, value: string): void
	}
}

Cypress.Commands.add('tagContainsValue', (tag, value): Chainable => {
	return tag.contains(value)
})

Cypress.Commands.add('typeById', (id, value) => {
	cy.get(id).type(value)
})

Cypress.Commands.add('clickLink', (label) => {
	cy.get('a').contains(label).click()
})

