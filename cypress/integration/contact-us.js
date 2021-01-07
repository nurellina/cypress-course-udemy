/// <reference types="Cypress" />;

describe("Test Contact Us form via webdriveruni", () => {
  it("Should be able to submit a sucessful submission via contact us form", () => {
    //positive scenario
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us > .thumbnail > .section-title > h1").click();
    cy.get('[name="first_name"]').type("Ellina");
    cy.get('[name="last_name"]').type("Nur");
    cy.get('[name="email"]').type("ern246@nyu.edu");
    cy.get("textarea.feedback-input").type("Commenting");
    cy.get('[type="submit"]').click();
  });

  it("Should not be able to submit a sucessful submission via contact us form as all fileds are required", () => {
    //negative scenario
  });
});
