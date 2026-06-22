document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo.value.trim()) || contrasena.value.length < 6) {
      alert('Por favor verifica tus credenciales.');
      return;
    }

    alert('¡Bienvenido de nuevo! Has iniciado sesión con éxito.');
    window.location.href = '../../index.html';
  });
});
