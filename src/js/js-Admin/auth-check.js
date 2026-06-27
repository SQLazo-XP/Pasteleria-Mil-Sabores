// ============================================
// auth-check.js - Control de Acceso al Panel Admin
// Verifica si el usuario tiene sesion activa y permisos segun su rol
// ============================================

(function() {
  const sesion = localStorage.getItem('usuario_sesion');

  // Si no hay sesion activa, redirige al inicio de sesion conservando la pagina de destino
  if (!sesion) {
    const current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    window.location.href = '../components/inicio_sesion.html?redirect=../components/' + current;
    return;
  }

  try {
    const usuario = JSON.parse(sesion);

    // Los clientes no tienen acceso al panel administrativo
    if (usuario.rol === 'Cliente') {
      alert('Acceso denegado. No tienes permisos para acceder a esta seccion.');
      window.location.href = '../../index.html';
    }

    // Los vendedores solo pueden acceder a listado-productos.html y ver-producto.html
    if (usuario.rol === 'Vendedor') {
      const allowed = ['listado-productos.html', 'ver-producto.html'];
      const current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
      if (!allowed.includes(current)) {
        alert('Acceso denegado. Los vendedores solo pueden ver productos.');
        window.location.href = './listado-productos.html';
      }
    }
  } catch {
    // Si hay error al parsear la sesion, la limpia y redirige al login
    localStorage.removeItem('usuario_sesion');
    window.location.href = '../components/inicio_sesion.html';
  }
})();
