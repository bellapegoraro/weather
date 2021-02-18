context("Header", () => {
  it("search weather", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Pesquisar");
    cy.contains("Hora");
    cy.get(".sc-jSgupP").click();
    cy.get("#standard-basic").type("Curitiba");
    cy.get("#standard-select-currency")
      .click()
      .get('[data-value="15:00:00"]')
      .click();
    cy.get(".sc-bdfBwQ > .material-icons").click();
    cy.contains("Temperatura atual");
    cy.contains("Temperatura máxima");
  });
});
