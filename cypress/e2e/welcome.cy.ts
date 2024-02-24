/// <reference types="Cypress" />

describe("Main page", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("a.App-link").should("exist");
    cy.get("h1").should("contain", "Hello World");
  });
});
