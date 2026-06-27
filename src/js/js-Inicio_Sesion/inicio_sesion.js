document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  const DOMINIOS_PERMITIDOS = ['@inacap.cl', '@profesor.inacap.cl', '@gmail.com'];

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

    if (!correo.value.trim()) {
      mostrarError('El correo es obligatorio.');
      return;
    }
    if (correo.value.trim().length > 100) {
      mostrarError('El correo debe tener maximo 100 caracteres.');
      return;
    }
    if (!dominioValido(correo.value)) {
      mostrarError('Solo se permiten correos @inacap.cl, @profesor.inacap.cl o @gmail.com.');
      return;
    }

    if (!contrasena.value) {
      mostrarError('La contrasena es obligatoria.');
      return;
    }
    if (contrasena.value.length < 4 || contrasena.value.length > 10) {
      mostrarError('La contrasena debe tener entre 4 y 10 caracteres.');
      return;
    }

    if (!localStorage.getItem('usuarios')) {
      const semilla = [
        { run: '19011022K', nombres: 'Juan', apellidos: 'Perez', correo: 'juan@inacap.cl', contrasena: 'admin1234', fecha_nac: '1990-05-15', tipo: 'Administrador', region: 'Metropolitana de Santiago', comuna: 'Santiago', direccion: 'Av. Siempre Viva 123' },
        { run: '12345678', nombres: 'Maria', apellidos: 'Lopez', correo: 'maria@gmail.com', contrasena: '1234', fecha_nac: '1995-08-22', tipo: 'Cliente', region: 'Valparaiso', comuna: 'Vina del Mar', direccion: 'Calle Los Clientes 456' },
        { run: '87654321', nombres: 'Carlos', apellidos: 'Diaz', correo: 'carlos@inacapmail.cl', contrasena: '1234', fecha_nac: '', tipo: 'Vendedor', region: 'Biobio', comuna: 'Concepcion', direccion: 'Av. Vendedor 789' }
      ];
      localStorage.setItem('usuarios', JSON.stringify(semilla));
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const correoLimpio = correo.value.trim().toLowerCase();
    const usuario = usuarios.find(u => u.correo === correoLimpio && u.contrasena === contrasena.value);

    if (!usuario) {
      mostrarError('Correo o contrasena incorrectos.');
      return;
    }

    localStorage.setItem('usuario_sesion', JSON.stringify({
      run: usuario.run,
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      correo: usuario.correo,
      rol: usuario.tipo,
      region: usuario.region,
      comuna: usuario.comuna
    }));

    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect') || '../../index.html';
    window.location.href = redirect;
  });
});
