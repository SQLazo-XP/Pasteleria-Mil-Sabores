// ============================================
// contacto.js - Pagina de Contacto
// Valida y procesa el formulario de contacto
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contacto-form');

  // Lista de dominios de correo permitidos
  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@profesor.inacap.cl', '@gmail.com'];

  // Verifica si el correo pertenece a un dominio permitido
  function dominioValido(email) {
    const e = email.trim().toLowerCase();
    return DOMINIOS_PERMITIDOS.some(d => e.endsWith(d));
  }

  // Muestra un mensaje de error en el elemento con el id especificado
  function mostrarError(id, mensaje) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = mensaje;
      el.style.display = 'block';
    }
  }

  // Limpia el mensaje de error del elemento con el id especificado
  function limpiarError(id) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = '';
      el.style.display = 'none';
    }
  }

  // Marca visualmente un campo como invalido (borde rojo)
  function marcarInput(id) {
    const input = document.querySelector(`#${id}`);
    if (input) input.style.borderColor = '#c62828';
  }

  // Restaura el borde original de un campo
  function limpiarInput(id) {
    const input = document.querySelector(`#${id}`);
    if (input) input.style.borderColor = '';
  }

  // Evento que se dispara al enviar el formulario de contacto
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpia errores y estilos de validaciones anteriores
    limpiarError('error-nombre');
    limpiarError('error-correo');
    limpiarInput('contacto-nombre');
    limpiarInput('contacto-correo');

    const nombre = document.getElementById('contacto-nombre');
    const correo = document.getElementById('contacto-correo');

    let valido = true;

    // Validacion: nombre obligatorio y maximo 100 caracteres
    if (!nombre.value.trim()) {
      mostrarError('error-nombre', 'El nombre es obligatorio.');
      marcarInput('contacto-nombre');
      valido = false;
    } else if (nombre.value.trim().length > 100) {
      mostrarError('error-nombre', 'El nombre debe tener máximo 100 caracteres.');
      marcarInput('contacto-nombre');
      valido = false;
    }

    // Validacion: correo obligatorio, maximo 100 caracteres y dominio permitido
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

    // Si todos los campos son validos, muestra mensaje de exito y resetea el formulario
    if (valido) {
      alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
      form.reset();
      limpiarInput('contacto-nombre');
      limpiarInput('contacto-correo');
    }
  });
});
