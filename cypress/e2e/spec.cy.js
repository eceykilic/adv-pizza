describe("template spec", () => {
  it("passes", () => {
    cy.visit("/pizza");
  });
});

//sipariş eksikken final sayfası
describe('sipariş sayfasında eksik hatası', function() { 
  it('Baştan sona kadar doğru ilerliyor mu?', function() {
    cy.visit('/');
    cy.get('#order-pizza').click();
    cy.visit('/pizza');

    cy.contains('Domates').click();
    cy.contains('Mısır').click();
    cy.contains('Soğan').click();
    cy.contains('Pepperoni').click();
    cy.contains('Sucuk').click();
    
    cy.get('button[type="submit"]').should("be.visible");
    
    cy.visit('/final');
  
  })
  
})

// error mesajları
describe('Link Navigation', function() {
  beforeEach(() => {
    cy.visit('/pizza');
  });

  it('4-10 arası malzeme seçilebilir', function() {
    
    cy.visit('/pizza');


    // Toplam 3 malzeme
    cy.contains('Domates').click();
    cy.contains('Mısır').click();
    cy.contains('Soğan').click();

    cy.get('#order-button').click();

    cy.wait(100);

    // error mesajı geldi mi
    cy.get('.error-message').should('be.visible').and('contain', 'Lütfen en az 4 ek malzeme seçin.');
  });

  it('boyut seçildi ama hamur seçilmedi', function() {
    
    cy.visit('/pizza');


    // Toplam 4 malzeme
    cy.contains('M').click();
    cy.contains('Mısır').click();
    cy.contains('Soğan').click();
    cy.contains('Sucuk').click();
    cy.contains('Kabak').click();

    cy.get('#order-button').click();

    cy.wait(100);

    // error mesajı geldi mi
    cy.get('.error-message').should('be.visible').and('contain', 'Lütfen bir hamur seçin.');
  });

  it('her şey tam seçildi', function() {
    
    cy.visit('/pizza');


    // Toplam 4 malzeme
    cy.contains('M').click();
    cy.contains('Mısır').click();
    cy.contains('Soğan').click();
    cy.contains('Sucuk').click();
    cy.contains('Kabak').click();
    cy.contains('Ananas').click();
    cy.contains('Sosis').click();

    // Hamur seçeneklerini içeren select elementini bul
    cy.get('select#exampleSelect').as('hamurSelect');

    // "Kalın" hamurunu seç
    cy.get('@hamurSelect').select('Kalın');

    // Seçilen değeri kontrol et
    cy.get('@hamurSelect').should('have.value', 'Kalın');

    cy.get('#order-button').click();
  });

  it('Eksik Bilgilerle Sipariş Gönderme', function () {
    // Hata durumlarını kontrol et
    cy.get('#order-button').click();
    cy.get('.error-message').should('be.visible');
  });
});