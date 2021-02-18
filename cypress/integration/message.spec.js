context("Message", () => {
  it("show message", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Entendi!");
    cy.get(".sc-jSgupP").click();
  });
});
