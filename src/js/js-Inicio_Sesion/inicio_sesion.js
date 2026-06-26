// ============================================
// inicio_sesion.js - Pagina de Inicio de Sesion
// Valida el formulario y redirige al inicio
// ============================================

// --- Cuando la pagina termina de cargar ---
document.addEventListener('DOMContentLoaded', () => {

  // Obtiene el formulario de inicio de sesion por su ID
  const form = document.getElementById('login-form');

  // --- Cuando el usuario intenta enviar el formulario ---
  form.addEventListener('submit', (e) => {

    // Evita que la pagina se recargue al enviar el formulario
    e.preventDefault();

    // Obtiene el campo de correo electronico
    const correo = document.getElementById('correo');

    // Obtiene el campo de contraseña
    const contrasena = document.getElementById('contrasena');

    // Expresion regular para validar un correo electronico basico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Si el correo no es valido O la contraseña tiene menos de 6 caracteres
    if (!emailRegex.test(correo.value.trim()) || contrasena.value.length < 6) {

      // Muestra una alerta de error
      alert('Por favor verifica tus credenciales.');

      // Sale de la funcion sin continuar
      return;
    }

    // Si todo esta bien, muestra mensaje de exito
    alert('¡Bienvenido de nuevo! Has iniciado sesión con éxito.');

    // Redirige al usuario a la pagina de inicio
    window.location.href = '../../index.html';
  });
});
