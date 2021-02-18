context("Footer", () => {
  it("shows my name", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Isabella Pegoraro");
  });
});
