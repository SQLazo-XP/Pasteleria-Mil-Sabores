document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@inacapmail.cl', '@gmail.com'];

  function dominioValido(email) {
    const e = email.trim().toLowerCase();
    return DOMINIOS_PERMITIDOS.some(d => e.endsWith(d));
  }

  function mostrarError(mensaje) {
    let errorDiv = document.getElementById('login-error');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.id = 'login-error';
      errorDiv.style.cssText = 'background:#fbe9e7;color:#c62828;padding:10px 14px;border-radius:8px;font-size:0.85rem;font-weight:700;margin-bottom:16px;text-align:center;display:none;';
      form.insertBefore(errorDiv, form.firstChild);
    }
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
  }

  function limpiarError() {
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) errorDiv.style.display = 'none';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limpiarError();

    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');

    // Validar correo
    if (!correo.value.trim()) {
      mostrarError('El correo es obligatorio.');
      return;
    }
    if (correo.value.trim().length > 100) {
      mostrarError('El correo debe tener máximo 100 caracteres.');
      return;
    }
    if (!dominioValido(correo.value)) {
      mostrarError('Solo se permiten correos @inacap.cl, @inacapmail.cl o @gmail.com.');
      return;
    }

    // Validar contraseña
    if (!contrasena.value) {
      mostrarError('La contraseña es obligatoria.');
      return;
    }
    if (contrasena.value.length < 4 || contrasena.value.length > 10) {
      mostrarError('La contraseña debe tener entre 4 y 10 caracteres.');
      return;
    }

    // Sembrar usuarios iniciales si no existen
    if (!localStorage.getItem('usuarios')) {
      const semilla = [
        { nombre: 'Juan Pérez', correo: 'juan@inacap.cl', contrasena: 'admin1234', rol: 'Administrador' },
        { nombre: 'María López', correo: 'maria@gmail.com', contrasena: '1234', rol: 'Cliente' },
        { nombre: 'Carlos Díaz', correo: 'carlos@inacapmail.cl', contrasena: '1234', rol: 'Cliente' }
      ];
      localStorage.setItem('usuarios', JSON.stringify(semilla));
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const correoLimpio = correo.value.trim().toLowerCase();
    const usuario = usuarios.find(u => u.correo === correoLimpio && u.contrasena === contrasena.value);

    if (!usuario) {
      mostrarError('Correo o contraseña incorrectos.');
      return;
    }

    localStorage.setItem('usuario_sesion', JSON.stringify({ nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol }));

    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect') || '../../index.html';
    window.location.href = redirect;
  });
});
