Feature: Inicio de sesión

  Scenario: Usuario accede con credenciales válidas
    Given el usuario está en la pantalla de login
    When introduce su email y contraseña correctamente
    And pulsa el botón “Entrar”
    Then accede al panel de reservas
