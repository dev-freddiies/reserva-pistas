Feature: Reserva de pista

  Scenario: Usuario reserva una pista
    Given el usuario ha iniciado sesión
    When selecciona una pista y pulsa reservar
    Then ve el mensaje "Reserva confirmada"
