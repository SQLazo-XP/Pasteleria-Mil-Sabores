// ============================================
// registro_usuario.js - Pagina de Registro
// Valida el formulario, carga comunas segun region
// ============================================

// --- Cuando la pagina termina de cargar ---
document.addEventListener('DOMContentLoaded', () => {

  // Obtiene el formulario de registro
  const form = document.getElementById('register-form');

  // Obtiene el selector de region
  const regionSelect = document.getElementById('region');

  // Obtiene el selector de comuna
  const comunaSelect = document.getElementById('comuna');

  // --- Lista de comunas por region de Chile ---
  const comunasPorRegion = {

    // Region Metropolitana
    'RM': ['Santiago', 'Providencia', 'Las Condes', 'Maipú', 'Puente Alto', 'La Florida'],

    // Region de la Araucania
    'Araucania': ['Temuco', 'Pucón', 'Villarrica', 'Angol', 'Padre Las Casas'],

    // Region de Ñuble
    'Nuble': ['Chillán', 'San Carlos', 'Bulnes', 'Coihueco', 'Yungay'],

    // Region del Maule
    'Maule': ['Linares', 'Longaví', 'Talca', 'Curicó', 'Constitución'],

    // Region del Biobío
    'Biobio': ['Concepción', 'Talcahuano', 'San Pedro de la Paz', 'Coronel', 'Chiguayante']
  };

  // --- Cuando el usuario cambia la region seleccionada ---
  regionSelect.addEventListener('change', () => {

    // Guarda el valor de la region elegida
    const regionSeleccionada = regionSelect.value;

    // Limpia las opciones de comuna y deja solo la primera opcion
    comunaSelect.innerHTML = '<option value="">-- Seleccione la comuna --</option>';

    // Si hay una region valida y existen comunas para esa region
    if (regionSeleccionada && comunasPorRegion[regionSeleccionada]) {

      // Habilita el selector de comuna
      comunaSelect.disabled = false;

      // Recorre cada comuna de la region seleccionada
      comunasPorRegion[regionSeleccionada].forEach(comuna => {

        // Crea un elemento <option>
        const option = document.createElement('option');

        // Asigna el valor de la opcion
        option.value = comuna;

        // Asigna el texto que se mostrara
        option.textContent = comuna;

        // Agrega la opcion al selector de comuna
        comunaSelect.appendChild(option);
      });

    } else {

      // Si no hay region valida, deshabilita el selector de comuna
      comunaSelect.disabled = true;
    }
  });

  // --- Cuando el usuario intenta enviar el formulario ---
  form.addEventListener('submit', (e) => {

    // Evita que la pagina se recargue
    e.preventDefault();

    // Variable que indica si todo el formulario es valido
    let esValido = true;

    // Obtiene el campo de nombre
    const nombre = document.getElementById('nombre');

    // Obtiene el campo de correo
    const correo = document.getElementById('correo');

    // Obtiene el campo de confirmar correo
    const confirmarCorreo = document.getElementById('confirmar-correo');

    // Obtiene el campo de contraseña
    const contrasena = document.getElementById('contrasena');

    // Obtiene el campo de confirmar contraseña
    const confirmarContrasena = document.getElementById('confirmar-contrasena');

    // Obtiene el campo de telefono
    const telefono = document.getElementById('telefono');

    // Expresion regular para validar correo electronico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresion regular para validar telefono (9 digitos exactos)
    const phoneRegex = /^[0-9]{9}$/;

    // --- 1. Validar Nombre (minimo 3 caracteres) ---
    if (nombre.value.trim().length < 3) {

      // Muestra error si el nombre es muy corto
      marcarError(nombre, 'El nombre debe tener al menos 3 caracteres');

      // Marca que el formulario no es valido
      esValido = false;
    } else {

      // Si es valido, quita el mensaje de error
      quitarError(nombre);
    }

    // --- 2. Validar Correo Electronico ---
    if (!emailRegex.test(correo.value.trim())) {

      // Muestra error si el correo no tiene formato valido
      marcarError(correo, 'Ingrese un correo electrónico válido');
      esValido = false;
    } else {
      quitarError(correo);
    }

    // --- 3. Validar que los correos coincidan ---
    if (correo.value.trim() !== confirmarCorreo.value.trim()) {

      // Muestra error si los correos no son iguales
      marcarError(confirmarCorreo, 'Los correos electrónicos no coinciden');
      esValido = false;

    } else if (confirmarCorreo.value.trim() === '') {

      // Muestra error si el campo esta vacio
      marcarError(confirmarCorreo, 'Confirme su correo electrónico');
      esValido = false;
    } else {
      quitarError(confirmarCorreo);
    }

    // --- 4. Validar Contraseña (minimo 6 caracteres) ---
    if (contrasena.value.length < 6) {

      // Muestra error si la contraseña es muy corta
      marcarError(contrasena, 'La contraseña debe tener al menos 6 caracteres');
      esValido = false;
    } else {
      quitarError(contrasena);
    }

    // --- 5. Validar que las contraseñas coincidan ---
    if (contrasena.value !== confirmarContrasena.value) {

      // Muestra error si las contraseñas no son iguales
      marcarError(confirmarContrasena, 'Las contraseñas no coinciden');
      esValido = false;

    } else if (confirmarContrasena.value === '') {

      // Muestra error si el campo esta vacio
      marcarError(confirmarContrasena, 'Confirme su contraseña');
      esValido = false;
    } else {
      quitarError(confirmarContrasena);
    }

    // --- 6. Validar Telefono (opcional, pero si se escribe debe ser valido) ---
    if (telefono.value.trim() !== '' && !phoneRegex.test(telefono.value.trim())) {

      // Muestra error si el telefono no tiene 9 digitos
      marcarError(telefono, 'Ingrese un teléfono celular válido (9 dígitos)');
      esValido = false;
    } else {
      quitarError(telefono);
    }

    // --- 7. Validar que se haya seleccionado una region ---
    if (regionSelect.value === '') {

      // Muestra error si no eligio region
      marcarError(regionSelect, 'Debe seleccionar una región');
      esValido = false;
    } else {
      quitarError(regionSelect);
    }

    // --- 8. Validar que se haya seleccionado una comuna ---
    if (comunaSelect.value === '') {

      // Muestra error si no eligio comuna
      marcarError(comunaSelect, 'Debe seleccionar una comuna');
      esValido = false;
    } else {
      quitarError(comunaSelect);
    }

    // --- Si todo es valido, redirige al inicio de sesion ---
    if (esValido) {

      // Muestra mensaje de exito con el nombre del usuario
      alert(`¡Registro exitoso, ${nombre.value.trim()}! Ahora puedes iniciar sesión con tu cuenta.`);

      // Redirige a la pagina de inicio de sesion
      window.location.href = './inicio_sesion.html';
    }
  });

  // --- Funcion para mostrar un mensaje de error en un campo ---
  function marcarError(inputElement, mensaje) {

    // Busca el contenedor .form-group mas cercano al campo
    const group = inputElement.closest('.form-group');

    // Agrega la clase "has-error" al contenedor
    group.classList.add('has-error');

    // Agrega la clase "error-input" al campo
    inputElement.classList.add('error-input');

    // Busca si ya existe un div de error dentro del grupo
    let errorDiv = group.querySelector('.error-message');

    // Si no existe, lo crea
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      group.appendChild(errorDiv);
    }

    // Asigna el mensaje de error al div
    errorDiv.textContent = mensaje;

    // Hace visible el mensaje de error
    errorDiv.style.display = 'block';
  }

  // --- Funcion para quitar el error de un campo ---
  function quitarError(inputElement) {

    // Busca el contenedor .form-group mas cercano
    const group = inputElement.closest('.form-group');

    // Quita la clase "has-error" del contenedor
    group.classList.remove('has-error');

    // Quita la clase "error-input" del campo
    inputElement.classList.remove('error-input');

    // Busca el div de error dentro del grupo
    const errorDiv = group.querySelector('.error-message');

    // Si existe, lo oculta
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }
});
