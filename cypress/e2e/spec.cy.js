describe('Link Navigation', function() {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:5173/pizza').as('getPizza'); 
  });

  it('4-10 arası malzeme seçilebilir ve Sipariş Ver butonu görünür olmalı', function() {
    cy.wait('@getPizza');

    
    cy.intercept('GET', 'http://localhost:5173/pizza', {
      ekMalzemeler: ['Biber', 'Mısır', 'Soğan', 'Pepperoni', 'Ananas']
    }).as('getPizzaWithToppings');

    cy.visit('http://localhost:5173/pizza');

    // 5 malzeme seç
    cy.get('.sebzeler input[value="Biber"]').click();
    cy.get('.sebzeler input[value="Mısır"]').click();
    cy.get('.sebzeler input[value="Biber"]').click();
    cy.get('.sebzeler input[value="Mısır"]').click();
    cy.get('.sebzeler input[value="Soğan"]').click();
    cy.get('.sebzeler input[value="Pepperoni"]').click();
    cy.get('.sebzeler input[value="Ananas"]').click();

    cy.get('.error-message').should('not.exist');
    cy.get('button[type="submit"]').should("be.visible");
  });

  it('4 elemandan az seçilemez ve hata mesajı gösterilmeli', function() {
 
    cy.wait('@getPizza');

  
    cy.intercept('GET', 'http://localhost:5173/pizza', {
      ekMalzemeler: ['Domates', 'Mısır', 'Soğan']
    }).as('getPizzaWithToppings');

    cy.visit('http://localhost:5173/pizza');

    // 3 malzeme seç
    cy.get('.sebzeler input[value="Domates"]').click();
    cy.get('.sebzeler input[value="Mısır"]').click();
    cy.get('.sebzeler input[value="Soğan"]').click();

    // butona bas
    cy.get('button[type="submit"]').click();

    // error mesajı geldi mi
    cy.get('.error-message').should('be.visible').and('contain', 'Lütfen en az 4 ek malzeme seçin.');
  });
});
