document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');
  const cartWidget = document.getElementById('cart-widget');
  const newsletterForm = document.getElementById('newsletter-form');

  // --- Mapeo Geográfico de Regiones y Comunas de Chile ---
  const comunasPorRegion = {
    'RM': ['Santiago', 'Providencia', 'Las Condes', 'Maipú', 'Puente Alto', 'La Florida'],
    'Araucania': ['Temuco', 'Pucón', 'Villarrica', 'Angol', 'Padre Las Casas'],
    'Nuble': ['Chillán', 'San Carlos', 'Bulnes', 'Coihueco', 'Yungay'],
    'Maule': ['Linares', 'Longaví', 'Talca', 'Curicó', 'Constitución'],
    'Biobio': ['Concepción', 'Talcahuano', 'San Pedro de la Paz', 'Coronel', 'Chiguayante']
  };

  // --- Actualizar Comunas Dinámicamente ---
  regionSelect.addEventListener('change', () => {
    const regionSeleccionada = regionSelect.value;
    
    // Limpiar comunas
    comunaSelect.innerHTML = '<option value="">-- Seleccione la comuna --</option>';
    
    if (regionSeleccionada && comunasPorRegion[regionSeleccionada]) {
      comunaSelect.disabled = false;
      comunasPorRegion[regionSeleccionada].forEach(comuna => {
        const option = document.createElement('option');
        option.value = comuna;
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });
    } else {
      comunaSelect.disabled = true;
    }
  });

  // --- Validación del Formulario ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;

    // Obtener campos
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const confirmarCorreo = document.getElementById('confirmar-correo');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmar-contrasena');
    const telefono = document.getElementById('telefono');

    // Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9}$/; // 9 dígitos en Chile

    // 1. Validar Nombre
    if (nombre.value.trim().length < 3) {
      marcarError(nombre, 'El nombre debe tener al menos 3 caracteres');
      esValido = false;
    } else {
      quitarError(nombre);
    }

    // 2. Validar Correo
    if (!emailRegex.test(correo.value.trim())) {
      marcarError(correo, 'Ingrese un correo electrónico válido');
      esValido = false;
    } else {
      quitarError(correo);
    }

    // 3. Validar Confirmar Correo
    if (correo.value.trim() !== confirmarCorreo.value.trim()) {
      marcarError(confirmarCorreo, 'Los correos electrónicos no coinciden');
      esValido = false;
    } else if (confirmarCorreo.value.trim() === '') {
      marcarError(confirmarCorreo, 'Confirme su correo electrónico');
      esValido = false;
    } else {
      quitarError(confirmarCorreo);
    }

    // 4. Validar Contraseña
    if (contrasena.value.length < 6) {
      marcarError(contrasena, 'La contraseña debe tener al menos 6 caracteres');
      esValido = false;
    } else {
      quitarError(contrasena);
    }

    // 5. Validar Confirmar Contraseña
    if (contrasena.value !== confirmarContrasena.value) {
      marcarError(confirmarContrasena, 'Las contraseñas no coinciden');
      esValido = false;
    } else if (confirmarContrasena.value === '') {
      marcarError(confirmarContrasena, 'Confirme su contraseña');
      esValido = false;
    } else {
      quitarError(confirmarContrasena);
    }

    // 6. Validar Teléfono (opcional, pero si se escribe debe ser válido)
    if (telefono.value.trim() !== '' && !phoneRegex.test(telefono.value.trim())) {
      marcarError(telefono, 'Ingrese un teléfono celular válido (9 dígitos)');
      esValido = false;
    } else {
      quitarError(telefono);
    }

    // 7. Validar Región
    if (regionSelect.value === '') {
      marcarError(regionSelect, 'Debe seleccionar una región');
      esValido = false;
    } else {
      quitarError(regionSelect);
    }

    // 8. Validar Comuna
    if (comunaSelect.value === '') {
      marcarError(comunaSelect, 'Debe seleccionar una comuna');
      esValido = false;
    } else {
      quitarError(comunaSelect);
    }

    // Redirección si todo es válido
    if (esValido) {
      alert(`🎉 ¡Registro exitoso, ${nombre.value.trim()}! Ahora puedes iniciar sesión con tu cuenta.`);
      window.location.href = './inicio_sesion.html';
    }
  });

  // --- Funciones Auxiliares de Error ---
  function marcarError(inputElement, mensaje) {
    const group = inputElement.closest('.form-group');
    group.classList.add('has-error');
    inputElement.classList.add('error-input');
    
    let errorDiv = group.querySelector('.error-message');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      group.appendChild(errorDiv);
    }
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
  }

  function quitarError(inputElement) {
    const group = inputElement.closest('.form-group');
    group.classList.remove('has-error');
    inputElement.classList.remove('error-input');
    
    const errorDiv = group.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }

  function limpiarError(input) {
    const contenedor = input.closest('.register-group');
    if (!contenedor) return;
    contenedor.classList.remove('has-error');
    const msg = contenedor.querySelector('.error-message');
    if (msg) msg.remove();
  }

  // --- Click en Carrito ---
  if (cartWidget) {
    cartWidget.addEventListener('click', () => {
      alert('🛒 Tu carrito está vacío. ¡Explora nuestro catálogo para añadir delicias!');
    });
  }

  // --- Newsletter ---
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        alert(`📧 ¡Gracias por suscribirte! Te enviaremos nuestras mejores recetas y ofertas a: ${emailInput.value.trim()}`);
        emailInput.value = '';
      }
    });
  }
});
