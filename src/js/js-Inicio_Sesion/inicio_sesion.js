// ============================================
// inicio_sesion.js - Pagina de Inicio de Sesion
// Valida credenciales del usuario y redirige segun su rol
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  // Lista de dominios de correo permitidos para el acceso
  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@profesor.inacap.cl', '@gmail.com'];

  // Verifica si el correo termina con alguno de los dominios permitidos
  function dominioValido(email) {
    const e = email.trim().toLowerCase();
    return DOMINIOS_PERMITIDOS.some(d => e.endsWith(d));
  }

  // Muestra un mensaje de error en la parte superior del formulario
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

  // Oculta el mensaje de error si existe
  function limpiarError() {
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) errorDiv.style.display = 'none';
  }

  // Evento que se dispara al enviar el formulario de inicio de sesion
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limpiarError();

    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');

    // Validacion: el correo es obligatorio
    if (!correo.value.trim()) {
      mostrarError('El correo es obligatorio.');
      return;
    }
    // Validacion: longitud maxima del correo
    if (correo.value.trim().length > 100) {
      mostrarError('El correo debe tener maximo 100 caracteres.');
      return;
    }
    // Validacion: dominio del correo debe estar en la lista permitida
    if (!dominioValido(correo.value)) {
      mostrarError('Solo se permiten correos @inacap.cl, @profesor.inacap.cl o @gmail.com.');
      return;
    }

    // Validacion: la contrasena es obligatoria
    if (!contrasena.value) {
      mostrarError('La contrasena es obligatoria.');
      return;
    }
    // Validacion: longitud de la contrasena entre 4 y 10 caracteres
    if (contrasena.value.length < 4 || contrasena.value.length > 10) {
      mostrarError('La contrasena debe tener entre 4 y 10 caracteres.');
      return;
    }

    // Si no existen usuarios en localStorage, crea una lista semilla con datos de ejemplo
    if (!localStorage.getItem('usuarios')) {
      const semilla = [
        { run: '19011022K', nombres: 'Juan', apellidos: 'Perez', correo: 'juan@inacap.cl', contrasena: 'admin1234', fecha_nac: '1990-05-15', tipo: 'Administrador', region: 'Metropolitana de Santiago', comuna: 'Santiago', direccion: 'Av. Siempre Viva 123' },
        { run: '12345678', nombres: 'Maria', apellidos: 'Lopez', correo: 'maria@gmail.com', contrasena: '1234', fecha_nac: '1995-08-22', tipo: 'Cliente', region: 'Valparaiso', comuna: 'Vina del Mar', direccion: 'Calle Los Clientes 456' },
        { run: '87654321', nombres: 'Carlos', apellidos: 'Diaz', correo: 'carlos@inacapmail.cl', contrasena: '1234', fecha_nac: '', tipo: 'Vendedor', region: 'Biobio', comuna: 'Concepcion', direccion: 'Av. Vendedor 789' }
      ];
      localStorage.setItem('usuarios', JSON.stringify(semilla));
    }

    // Busca el usuario en localStorage que coincida con correo y contrasena
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const correoLimpio = correo.value.trim().toLowerCase();
    const usuario = usuarios.find(u => u.correo === correoLimpio && u.contrasena === contrasena.value);

    // Si no encuentra coincidencia, muestra error de credenciales
    if (!usuario) {
      mostrarError('Correo o contrasena incorrectos.');
      return;
    }

    // Guarda los datos del usuario en sesion activa
    localStorage.setItem('usuario_sesion', JSON.stringify({
      run: usuario.run,
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      correo: usuario.correo,
      rol: usuario.tipo,
      region: usuario.region,
      comuna: usuario.comuna
    }));

    // Redirige a la pagina anterior (o al inicio) tras iniciar sesion exitosamente
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect') || '../../index.html';
    window.location.href = redirect;
  });
});
