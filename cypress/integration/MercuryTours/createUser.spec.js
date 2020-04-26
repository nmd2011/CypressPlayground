describe('Create a new user', () => {
    before(function() {
        cy.visit('http://newtours.demoaut.com/')
        cy.url().should('contain', 'http://newtours.demoaut.com/')
    })

    it('Should naviate to register', () => {
        cy.get('[width="77"] > a').click();
        
    });

    it('Should enter username', () => {
        cy.get('#email').type('tgqa');
    })

    it('Should enter in password', () => {
        cy.get('input[name="password"]').type('Pass1234!');
                
    });
    
    it('Should cofirm password', () => {
        cy.get('input[name="confirmPassword"]').type('Pass1234!');                
    });

    it('(Should submit registration', () => {
        cy.get('input[name="register"]').click();
        
    });

    it('Should create account successfully', () => {
        cy.contains('Thank you for registering. You may now ');
    });
});

describe('Login to the application after creating account', () => {
    it('Should login', () => {
        cy.visit('http://newtours.demoaut.com/mercurysignon.php')
        cy.loginMercury();
        cy.get('img[src="/images/masts/mast_flightfinder.gif"]')
            .should('be.visible')
        
    });
});