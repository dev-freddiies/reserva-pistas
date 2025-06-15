const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta explícita para servir el formulario de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@admin.com' && password === '1234') {
    return res.status(200).json({ message: 'Login correcto' });
  }
  res.status(401).json({ error: 'Credenciales incorrectas' });
});

app.get('/pistas', (req, res) => {
  res.json([{ id: 1, nombre: 'Pista A' }, { id: 2, nombre: 'Pista B' }]);
});

app.post('/reservar', (req, res) => {
  const { pistaId } = req.body;
  res.json({ message: `Reserva confirmada para la pista ${pistaId}` });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
