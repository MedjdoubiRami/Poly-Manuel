describe('Bonus Item page', () => {

    beforeEach(() => {
        cy.visit('./src/item.html');
    });


    describe('Message form', () => {
        it('Should be able to submit if message is shorter than 50 characters', () => {
            cy.get('form textarea').type('Ce message a moins que 50 caractères');
            cy.get('form textarea').should('match', ':valid');
        });

        it('Should not be able to submit if message is longer than 50 characters', () => {
            cy.get('form textarea').type('Ce message contient plus que 50 caractères, il ne devrait pas être accepté');
            cy.get('form').submit(); 
            cy.get('form textarea').should('match', ':invalid');
        });

        // TODO : Compléter les tests suivants
    
        it('Should not be able to submit if message has less than 5 words', () => {
            cy.get('form textarea').type('Moins de cinq');
            cy.get('form').submit();
            cy.get('#error-message').should('contain', 'Le message doit contenir au moins 5 mots.');
        });
    
        it('Should ignore empty spaces in characters count', () => {
            cy.get('form textarea').type('     ');
            cy.get('form').submit();
            cy.get('#error-message').should('contain', 'Le message doit contenir au moins 5 mots.');
        });

    });

});