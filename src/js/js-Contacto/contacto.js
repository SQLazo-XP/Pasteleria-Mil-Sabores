document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contacto-form');

  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@profesor.inacap.cl', '@gmail.com'];

  function dominioValido(email) {
    const e = email.trim().toLowerCase();
    return DOMINIOS_PERMITIDOS.some(d => e.endsWith(d));
  }

  function mostrarError(id, mensaje) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = mensaje;
      el.style.display = 'block';
    }
  }

  function limpiarError(id) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = '';
      el.style.display = 'none';
    }
  }

  function marcarInput(id) {
    const input = document.querySelector(`#${id}`);
    if (input) input.style.borderColor = '#c62828';
  }

  function limpiarInput(id) {
    const input = document.querySelector(`#${id}`);
    if (input) input.style.borderColor = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    limpiarError('error-nombre');
    limpiarError('error-correo');
    limpiarInput('contacto-nombre');
    limpiarInput('contacto-correo');

    const nombre = document.getElementById('contacto-nombre');
    const correo = document.getElementById('contacto-correo');

    let valido = true;

    // Validar nombre
    if (!nombre.value.trim()) {
      mostrarError('error-nombre', 'El nombre es obligatorio.');
      marcarInput('contacto-nombre');
      valido = false;
    } else if (nombre.value.trim().length > 100) {
      mostrarError('error-nombre', 'El nombre debe tener máximo 100 caracteres.');
      marcarInput('contacto-nombre');
      valido = false;
    }

    // Validar correo
    if (!correo.value.trim()) {
      mostrarError('error-correo', 'El correo es obligatorio.');
      marcarInput('contacto-correo');
      valido = false;
    } else if (correo.value.trim().length > 100) {
      mostrarError('error-correo', 'El correo debe tener máximo 100 caracteres.');
      marcarInput('contacto-correo');
      valido = false;
    } else if (!dominioValido(correo.value)) {
      mostrarError('error-correo', 'Solo se permiten correos @inacap.cl, @profesor.inacap.cl o @gmail.com.');
      marcarInput('contacto-correo');
      valido = false;
    }

    if (valido) {
      alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
      form.reset();
      limpiarInput('contacto-nombre');
      limpiarInput('contacto-correo');
    }
  });
});
