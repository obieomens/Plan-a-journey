import Chainable = Cypress.Chainable;

export const getTagValue = (tag: string): Chainable => {
    return cy.get(tag)
}
export const getAnchorTag = (): Chainable => {
    return getTagValue('a')
}

export const getHeadingTwo = (): Chainable => {
    return getTagValue('h2')
}

export const getParagraph = (): Chainable => {
    return getTagValue('p')
}
export const getHeadingThree = (): Chainable => {
    return getTagValue('h3')
}

export const generateLetterOfLength = (length: number) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// export const clickSignInOrSignUpLink = () => {
//     cy.get('a').contains('Signup / Login')
// }
