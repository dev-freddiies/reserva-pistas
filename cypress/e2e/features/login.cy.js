import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que el usuario accede al sistema', () => {
  cy.visit('/');
});

When('introduce el email {string} y la contraseña {string}', (email, password) => {
  cy.request('POST', '/login', { email, password }).as('loginResponse');
});

Then('debería recibir un mensaje {string}', (mensajeEsperado) => {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq(mensajeEsperado);
  });
});
