describe('Page is Loaded', function() {

    beforeEach(function(){
      
      cy.visit("http://localhost:3000/");

    });

    it('Should load country list', function(){
        cy.get('select option').its('length').should('be.gt',100);
    });

    it('Should display country list!', function() {
        // eslint-disable-next-line no-undef
        //cy.visit("http://localhost:3000/");
        cy.get('select').should('have.value','United States');
        
      expect(true).to.equal(true)
    })

    it('Should display the map',function(){
      cy.get('.google-map');
    });
  })