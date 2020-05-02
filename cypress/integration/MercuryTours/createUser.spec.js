describe('Create a new user2', () => {
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

    it('Should book a flight', () => {
        cy.get('select[name="passCount"]').select('4');
        cy.get('select[name="fromPort"]').select('London');
        cy.get('select[name="fromMonth"]').select('May');   
        cy.get('select[name="fromDay"]').select('1');
        
        cy.get('select[name="toPort"]').select('Portland'); 
        cy.get('select[name="toMonth"]').select('June');
        cy.get('select[name="toDay"]').select('15');   
        cy.get('input[name="findFlights"]').click();      
        
    });
});