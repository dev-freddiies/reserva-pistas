README - Aplicación de Reserva de Pistas Deportivas
Aplicación de Reserva de Pistas Deportivas
Este proyecto consiste en una aplicación web mínima viable (MVP) desarrollada con fines académicos, donde se puede iniciar sesión, visualizar pistas deportivas disponibles y realizar reservas. La aplicación ha sido construida siguiendo metodologías ágiles (Scrum), TDD/BDD y principios SOLID.

Tecnologías utilizadas
- Backend: Node.js + Express
- Frontend: HTML + JavaScript Vanilla
- BDD y testing: Cypress + Gherkin + Jest
- Gestión de dependencias: npm

Cómo ejecutar el proyecto
  1. Clonar el repositorio
    git clone https://github.com/dev-freddiies/reserva-pistas.git
    cd reserva-pistas
  2. Instalar dependencias
    npm install
  3. Iniciar el servidor
    node src/app.js
    El servidor estará disponible en:
      http://localhost:3000

Testing
  Pruebas de aceptación (Cypress + Gherkin)
  npx cypress open
  Los escenarios de BDD están definidos en la carpeta cypress/e2e/features/.
  Pruebas unitarias (Jest)
  npm test

Credenciales de prueba
  Email: admin@admin.com
  Contraseña: 1234

Estructura del proyecto
reserva-pistas/
├── public/                  # Archivos HTML estáticos (login y reserva)
├── src/
│   ├── app.js               # Servidor Express con rutas de login, pistas y reserva
│   └── db.js                # Simulación de conexión a base de datos (Singleton)
├── cypress/                # Pruebas e2e con BDD
├── tests/                  # Pruebas unitarias con Jest
├── package.json
├── cypress.config.js
└── README.md

Funcionalidades
  - Inicio de sesión seguro
  - Visualización de pistas disponibles
  - Realización de reservas por pista
  - Validación mediante pruebas automatizadas
  - Interfaz mínima para facilitar pruebas

Patrones y buenas prácticas aplicadas
  - Singleton: gestión de conexión única a base de datos simulada
  - Observer (simulado): separación entre lógica de reserva y notificación
  - Principios SOLID y arquitectura modular
  - TDD y BDD aplicados con Jest y Cypress

Autor
Alfredo Talavera Ramajo
Desarrollado como parte de la asignatura Ingeniería del Software Avanzada.


