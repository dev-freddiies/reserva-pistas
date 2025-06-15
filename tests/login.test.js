test('login con credenciales correctas', () => {
  const resultado = validarCredenciales('admin@admin.com', '1234');
  expect(resultado).toBe(true);
});

function validarCredenciales(email, password) {
  return email === 'admin@admin.com' && password === '1234';
}
