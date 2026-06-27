(function() {
  const sesion = localStorage.getItem('usuario_sesion');
  if (!sesion) {
    const current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    window.location.href = '../components/inicio_sesion.html?redirect=../components/' + current;
    return;
  }
  try {
    const usuario = JSON.parse(sesion);
    if (usuario.rol === 'Cliente') {
      alert('Acceso denegado. No tienes permisos para acceder a esta seccion.');
      window.location.href = '../../index.html';
    }
    if (usuario.rol === 'Vendedor') {
      const allowed = ['listado-productos.html', 'ver-producto.html'];
      const current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
      if (!allowed.includes(current)) {
        alert('Acceso denegado. Los vendedores solo pueden ver productos.');
        window.location.href = './listado-productos.html';
      }
    }
  } catch {
    localStorage.removeItem('usuario_sesion');
    window.location.href = '../components/inicio_sesion.html';
  }
})();
