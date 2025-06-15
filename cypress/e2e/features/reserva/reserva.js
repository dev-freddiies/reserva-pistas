import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario ha iniciado sesión", function () {
  cy.request("POST", "http://localhost:3000/login", {
    email: "admin@admin.com",
    password: "1234"
  }).as("loginResponse");

  cy.get("@loginResponse").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq("Login correcto");
  });
});

When("selecciona una pista y pulsa reservar", function () {
  cy.request("POST", "http://localhost:3000/reservar", {
    pistaId: 1
  }).as("reservaResponse");
});

Then("ve el mensaje {string}", function (mensajeEsperado) {
  cy.get("@reservaResponse").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.include(mensajeEsperado);
  });
});
