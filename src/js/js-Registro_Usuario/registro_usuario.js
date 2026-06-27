// ============================================
// registro_usuario.js - Pagina de Registro de Usuario
// Valida los datos del formulario y guarda el nuevo usuario en localStorage
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');

  // Lista de dominios de correo permitidos
  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@profesor.inacap.cl', '@gmail.com'];

  // Carga las regiones disponibles en el selector desde el objeto global REGIONES_COMUNAS
  Object.keys(REGIONES_COMUNAS).forEach(r => {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    regionSelect.appendChild(opt);
  });

  // Al cambiar la region, actualiza las comunas disponibles
  regionSelect.addEventListener('change', () => {
    const region = regionSelect.value;
    comunaSelect.innerHTML = '<option value="">-- Seleccione la comuna --</option>';
    comunaSelect.disabled = !region;
    if (region && REGIONES_COMUNAS[region]) {
      REGIONES_COMUNAS[region].forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        comunaSelect.appendChild(opt);
      });
    }
  });

  // Evento que se dispara al enviar el formulario de registro
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;

    const run = document.getElementById('run');
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const correo = document.getElementById('correo');
    const confirmarCorreo = document.getElementById('confirmar-correo');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmar-contrasena');
    const fechaNac = document.getElementById('fecha_nac');
    const direccion = document.getElementById('direccion');

    // Muestra un mensaje de error visual en el grupo del campo correspondiente
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

    // Elimina el estado de error de un campo del formulario
    function quitarError(inputElement) {
      const group = inputElement.closest('.form-group');
      group.classList.remove('has-error');
      inputElement.classList.remove('error-input');
      const errorDiv = group.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.style.display = 'none';
      }
    }

    // Validacion: RUN obligatorio y debe tener entre 7 y 9 caracteres (sin puntos ni guion)
    const runLimpio = run.value.trim().replace(/[^0-9kK]/g, '');
    if (!run.value.trim()) {
      marcarError(run, 'El RUN es obligatorio');
      esValido = false;
    } else if (runLimpio.length < 7 || runLimpio.length > 9) {
      marcarError(run, 'El RUN debe tener entre 7 y 9 caracteres (sin puntos ni guion)');
      esValido = false;
    } else {
      quitarError(run);
    }

    // Validacion: nombres obligatorios y maximo 50 caracteres
    if (!nombres.value.trim()) {
      marcarError(nombres, 'Los nombres son obligatorios');
      esValido = false;
    } else if (nombres.value.trim().length > 50) {
      marcarError(nombres, 'Los nombres deben tener maximo 50 caracteres');
      esValido = false;
    } else {
      quitarError(nombres);
    }

    // Validacion: apellidos obligatorios y maximo 100 caracteres
    if (!apellidos.value.trim()) {
      marcarError(apellidos, 'Los apellidos son obligatorios');
      esValido = false;
    } else if (apellidos.value.trim().length > 100) {
      marcarError(apellidos, 'Los apellidos deben tener maximo 100 caracteres');
      esValido = false;
    } else {
      quitarError(apellidos);
    }

    // Validacion: correo obligatorio, maximo 100 caracteres y dominio permitido
    if (!correo.value.trim()) {
      marcarError(correo, 'El correo es obligatorio');
      esValido = false;
    } else if (correo.value.trim().length > 100) {
      marcarError(correo, 'El correo debe tener maximo 100 caracteres');
      esValido = false;
    } else if (!DOMINIOS_PERMITIDOS.some(d => correo.value.trim().toLowerCase().endsWith(d))) {
      marcarError(correo, 'Solo se permiten correos @inacap.cl, @profesor.inacap.cl o @gmail.com');
      esValido = false;
    } else {
      quitarError(correo);
    }

    // Validacion: confirmacion de correo y que coincida con el correo ingresado
    if (!confirmarCorreo.value.trim()) {
      marcarError(confirmarCorreo, 'Confirme su correo');
      esValido = false;
    } else if (correo.value.trim().toLowerCase() !== confirmarCorreo.value.trim().toLowerCase()) {
      marcarError(confirmarCorreo, 'Los correos no coinciden');
      esValido = false;
    } else {
      quitarError(confirmarCorreo);
    }

    // Validacion: contrasena obligatoria y longitud entre 4 y 10 caracteres
    if (!contrasena.value) {
      marcarError(contrasena, 'La contrasena es obligatoria');
      esValido = false;
    } else if (contrasena.value.length < 4 || contrasena.value.length > 10) {
      marcarError(contrasena, 'La contrasena debe tener entre 4 y 10 caracteres');
      esValido = false;
    } else {
      quitarError(contrasena);
    }

    // Validacion: confirmacion de contrasena y que coincida
    if (!confirmarContrasena.value) {
      marcarError(confirmarContrasena, 'Confirme su contrasena');
      esValido = false;
    } else if (contrasena.value !== confirmarContrasena.value) {
      marcarError(confirmarContrasena, 'Las contrasenas no coinciden');
      esValido = false;
    } else {
      quitarError(confirmarContrasena);
    }

    // Validacion: seleccion de region obligatoria
    if (!regionSelect.value) {
      marcarError(regionSelect, 'Seleccione una region');
      esValido = false;
    } else {
      quitarError(regionSelect);
    }

    // Validacion: seleccion de comuna obligatoria
    if (!comunaSelect.value) {
      marcarError(comunaSelect, 'Seleccione una comuna');
      esValido = false;
    } else {
      quitarError(comunaSelect);
    }

    // Validacion: direccion obligatoria y maximo 300 caracteres
    if (!direccion.value.trim()) {
      marcarError(direccion, 'La direccion es obligatoria');
      esValido = false;
    } else if (direccion.value.trim().length > 300) {
      marcarError(direccion, 'La direccion debe tener maximo 300 caracteres');
      esValido = false;
    } else {
      quitarError(direccion);
    }

    // Si todos los campos son validos, guarda el nuevo usuario en localStorage
    if (esValido) {
      const nuevoUsuario = {
        run: runLimpio,
        nombres: nombres.value.trim(),
        apellidos: apellidos.value.trim(),
        correo: correo.value.trim().toLowerCase(),
        contrasena: contrasena.value,
        fecha_nac: fechaNac.value || '',
        tipo: 'Cliente',
        region: regionSelect.value,
        comuna: comunaSelect.value,
        direccion: direccion.value.trim()
      };
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      // Verifica que el correo no este registrado previamente
      if (usuarios.some(u => u.correo === nuevoUsuario.correo)) {
        marcarError(correo, 'Este correo ya esta registrado.');
        return;
      }
      // Verifica que el RUN no este registrado previamente
      if (usuarios.some(u => u.run === nuevoUsuario.run)) {
        marcarError(run, 'Este RUN ya esta registrado.');
        return;
      }
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Registro exitoso, ' + nuevoUsuario.nombres + '! Ahora puedes iniciar sesion.');
      window.location.href = './inicio_sesion.html';
    }
  });
});
