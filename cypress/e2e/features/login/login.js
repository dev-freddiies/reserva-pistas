import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario está en la pantalla de login", () => {
  cy.visit("http://localhost:3000/login");
});

When("introduce su email y contraseña correctamente", () => {
  cy.get('input[name="email"]').clear().type("admin@admin.com");
  cy.get('input[name="password"]').clear().type("1234");
});

When("pulsa el botón “Entrar”", () => {
  cy.get('button[type="submit"]').click();
});

Then("accede al panel de reservas", () => {
  cy.get("#message").should("contain", "Login correcto");
});
