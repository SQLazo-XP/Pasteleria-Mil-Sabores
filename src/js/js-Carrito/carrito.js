const CART_KEY = 'mil-sabores-carrito';

function obtenerCarrito() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function guardarCarrito(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  actualizarUI();
}

const CANTIDAD_MAX = 99;

function agregarProducto(producto) {
  if (!producto || !producto.codigo || !producto.nombre || typeof producto.precio !== 'number') {
    console.warn('Producto inválido:', producto);
    return;
  }
  const carrito = obtenerCarrito();
  const existente = carrito.find(p => p.codigo === producto.codigo);
  if (existente) {
    if (existente.cantidad < CANTIDAD_MAX) {
      existente.cantidad += 1;
    }
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarrito(carrito);
}

function eliminarProducto(codigo) {
  const carrito = obtenerCarrito().filter(p => p.codigo !== codigo);
  guardarCarrito(carrito);
}

function cambiarCantidad(codigo, delta) {
  const carrito = obtenerCarrito();
  const prod = carrito.find(p => p.codigo === codigo);
  if (!prod) return;
  const nueva = prod.cantidad + delta;
  if (nueva <= 0) {
    return eliminarProducto(codigo);
  }
  prod.cantidad = Math.min(nueva, CANTIDAD_MAX);
  guardarCarrito(carrito);
}

function totalProductos() {
  return obtenerCarrito().reduce((sum, p) => sum + p.cantidad, 0);
}

function totalPrecio() {
  return obtenerCarrito().reduce((sum, p) => sum + p.precio * p.cantidad, 0);
}

function vaciarCarrito() {
  guardarCarrito([]);
}

function actualizarUI() {
  const badge = document.getElementById('cart-count');
  const dropdown = document.getElementById('cart-dropdown');
  const itemsContainer = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  if (!itemsContainer) return;
  const carrito = obtenerCarrito();
  if (badge) badge.textContent = totalProductos();
  if (totalSpan) totalSpan.textContent = totalPrecio().toLocaleString('es-CL');
  if (carrito.length === 0) {
    itemsContainer.innerHTML = '<div class="cart-empty">El carrito esta vacio</div>';
    return;
  }
  itemsContainer.innerHTML = carrito.map(p => `
    <div class="cart-item" data-codigo="${p.codigo}">
      <div class="cart-item-info">
        <span class="cart-item-name">${p.nombre}</span>
        <span class="cart-item-price">$${(p.precio * p.cantidad).toLocaleString('es-CL')}</span>
      </div>
      <div class="cart-item-actions">
        <button class="cart-qty-btn" onclick="cambiarCantidad('${p.codigo}', -1)">−</button>
        <span class="cart-item-qty">${p.cantidad}</span>
        <button class="cart-qty-btn" onclick="cambiarCantidad('${p.codigo}', 1)">+</button>
        <button class="cart-remove-btn" onclick="eliminarProducto('${p.codigo}')">🗑</button>
      </div>
    </div>
  `).join('');
}

// Detecta si la pagina actual ya es la pagina del carrito
function esCarritoPage() {
  return window.location.pathname.includes('carrito.html');
}

// Detecta la ruta correcta al carrito segun donde este la pagina actual
function getRutaCarrito() {
  const path = window.location.pathname;
  if (path.includes('/src/components/')) {
    return './carrito.html';
  }
  return 'src/components/carrito.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const icono = document.getElementById('cart-icon');
  const dropdown = document.getElementById('cart-dropdown');
  const checkoutBtn = document.querySelector('.cart-checkout-btn');

  if (icono && dropdown) {
    icono.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('cart-open');
      actualizarUI();
    });
    document.addEventListener('click', () => dropdown.classList.remove('cart-open'));
    dropdown.addEventListener('click', (e) => e.stopPropagation());
  }

  // Boton "Ver Carrito" lleva a la pagina del carrito
  if (checkoutBtn && !esCarritoPage()) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = getRutaCarrito();
    });
  }

  // Newsletter: prevenir envio y mostrar mensaje
  var newsletterForms = document.querySelectorAll('.newsletter');
  newsletterForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = this.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        alert('¡Gracias por suscribirte a nuestro newsletter!');
        email.value = '';
      }
    });
  });

  // Hamburguesa: toggle menu movil
  var hamburger = document.querySelector('.hamburger');
  var navbarLinks = document.querySelector('.navbar-links');
  if (hamburger && navbarLinks) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navbarLinks.classList.toggle('active');
    });
  }

  actualizarUI();
});
