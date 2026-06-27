(function() {
  const sesion = localStorage.getItem('usuario_sesion');
  if (!sesion) {
    const current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    window.location.href = '../components/inicio_sesion.html?redirect=../components/' + current;
    return;
  }
  try {
    const usuario = JSON.parse(sesion);
    if (usuario.rol !== 'Administrador') {
      alert('Acceso denegado. Debes ser administrador para acceder a esta sección.');
      window.location.href = '../../index.html';
    }
  } catch {
    localStorage.removeItem('usuario_sesion');
    window.location.href = '../components/inicio_sesion.html';
  }
})();
