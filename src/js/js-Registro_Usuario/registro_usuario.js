document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');

  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@inacapmail.cl', '@gmail.com'];

  const comunasPorRegion = {
    'RM': ['Santiago', 'Providencia', 'Las Condes', 'Maipú', 'Puente Alto', 'La Florida'],
    'Araucania': ['Temuco', 'Pucón', 'Villarrica', 'Angol', 'Padre Las Casas'],
    'Nuble': ['Chillán', 'San Carlos', 'Bulnes', 'Coihueco', 'Yungay'],
    'Maule': ['Linares', 'Longaví', 'Talca', 'Curicó', 'Constitución'],
    'Biobio': ['Concepción', 'Talcahuano', 'San Pedro de la Paz', 'Coronel', 'Chiguayante']
  };

  function dominioValido(email) {
    const e = email.trim().toLowerCase();
    return DOMINIOS_PERMITIDOS.some(d => e.endsWith(d));
  }

  regionSelect.addEventListener('change', () => {
    const regionSeleccionada = regionSelect.value;
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

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const confirmarCorreo = document.getElementById('confirmar-correo');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmar-contrasena');
    const telefono = document.getElementById('telefono');
    const phoneRegex = /^[0-9]{9}$/;

    // 1. Nombre: obligatorio, max 100
    if (!nombre.value.trim()) {
      marcarError(nombre, 'El nombre es obligatorio');
      esValido = false;
    } else if (nombre.value.trim().length > 100) {
      marcarError(nombre, 'El nombre debe tener máximo 100 caracteres');
      esValido = false;
    } else {
      quitarError(nombre);
    }

    // 2. Correo: obligatorio, max 100, dominio permitido
    if (!correo.value.trim()) {
      marcarError(correo, 'El correo es obligatorio');
      esValido = false;
    } else if (correo.value.trim().length > 100) {
      marcarError(correo, 'El correo debe tener máximo 100 caracteres');
      esValido = false;
    } else if (!dominioValido(correo.value)) {
      marcarError(correo, 'Solo se permiten correos @inacap.cl, @inacapmail.cl o @gmail.com');
      esValido = false;
    } else {
      quitarError(correo);
    }

    // 3. Confirmar correo
    if (!confirmarCorreo.value.trim()) {
      marcarError(confirmarCorreo, 'Confirme su correo electrónico');
      esValido = false;
    } else if (correo.value.trim() !== confirmarCorreo.value.trim()) {
      marcarError(confirmarCorreo, 'Los correos electrónicos no coinciden');
      esValido = false;
    } else {
      quitarError(confirmarCorreo);
    }

    // 4. Contraseña: obligatoria, entre 4 y 10 caracteres
    if (!contrasena.value) {
      marcarError(contrasena, 'La contraseña es obligatoria');
      esValido = false;
    } else if (contrasena.value.length < 4 || contrasena.value.length > 10) {
      marcarError(contrasena, 'La contraseña debe tener entre 4 y 10 caracteres');
      esValido = false;
    } else {
      quitarError(contrasena);
    }

    // 5. Confirmar contraseña
    if (!confirmarContrasena.value) {
      marcarError(confirmarContrasena, 'Confirme su contraseña');
      esValido = false;
    } else if (contrasena.value !== confirmarContrasena.value) {
      marcarError(confirmarContrasena, 'Las contraseñas no coinciden');
      esValido = false;
    } else {
      quitarError(confirmarContrasena);
    }

    // 6. Teléfono opcional
    if (telefono.value.trim() !== '' && !phoneRegex.test(telefono.value.trim())) {
      marcarError(telefono, 'Ingrese un teléfono celular válido (9 dígitos)');
      esValido = false;
    } else {
      quitarError(telefono);
    }

    // 7. Región obligatoria
    if (!regionSelect.value) {
      marcarError(regionSelect, 'Debe seleccionar una región');
      esValido = false;
    } else {
      quitarError(regionSelect);
    }

    // 8. Comuna obligatoria
    if (!comunaSelect.value) {
      marcarError(comunaSelect, 'Debe seleccionar una comuna');
      esValido = false;
    } else {
      quitarError(comunaSelect);
    }

    if (esValido) {
      const nuevoUsuario = {
        nombre: nombre.value.trim(),
        correo: correo.value.trim().toLowerCase(),
        contrasena: contrasena.value,
        rol: 'Cliente'
      };
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      if (usuarios.some(u => u.correo === nuevoUsuario.correo)) {
        marcarError(correo, 'Este correo ya está registrado.');
        return;
      }
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert(`¡Registro exitoso, ${nuevoUsuario.nombre}! Ahora puedes iniciar sesión.`);
      window.location.href = './inicio_sesion.html';
    }
  });

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
});
