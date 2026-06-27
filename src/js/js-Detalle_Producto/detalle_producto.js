// ============================================
// detalle_producto.js - Pagina de Detalle de Producto
// Muestra la informacion completa de un producto y productos relacionados
// ============================================

// Ruta base para las imagenes de los productos
const ASSET_BASE = '../assets/Imagenes_Pasteles/';

// Lista de productos (datos fijos)
const productos = [
  { "codigo": "TC001", "nombre": "Torta Cuadrada de Chocolate", "precio": 45000, "categoria": "Tortas Cuadradas", "descripcion": "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.", "imagen": "Torta_Cuadrada_Chocolate.png" },
  { "codigo": "TC002", "nombre": "Torta Cuadrada de Frutas", "precio": 50000, "categoria": "Tortas Cuadradas", "descripcion": "Una mezcla de frutas frescas y crema chantilly.", "imagen": "Torta_Cuadrada_Frutas_Vainilla.png" },
  { "codigo": "TT001", "nombre": "Torta Circular de Vainilla", "precio": 40000, "categoria": "Tortas Circulares", "descripcion": "Bizcocho de vainilla clasico relleno con crema pastelera.", "imagen": "Torta_Circular_Vainilla.png" },
  { "codigo": "TT002", "nombre": "Torta Circular de Manjar", "precio": 42000, "categoria": "Tortas Circulares", "descripcion": "Torta tradicional chilena con manjar y nueces.", "imagen": "Torta_Circular_Manjar_Nueces.png" },
  { "codigo": "PI001", "nombre": "Mousse de Chocolate", "precio": 5000, "categoria": "Postres Individuales", "descripcion": "Postre individual cremoso y suave.", "imagen": "Mousse_Chocolate_Individual.png" },
  { "codigo": "PI002", "nombre": "Tiramisú Clásico", "precio": 5500, "categoria": "Postres Individuales", "descripcion": "Un postre italiano individual con capas de cafe y mascarpone.", "imagen": "Tiramisu_Clasico.png" },
  { "codigo": "PSA001", "nombre": "Torta Sin Azúcar de Naranja", "precio": 48000, "categoria": "Productos Sin Azúcar", "descripcion": "Torta ligera y deliciosa, endulzada naturalmente.", "imagen": "Torta_Naranja.png" },
  { "codigo": "PSA002", "nombre": "Cheesecake Sin Azúcar", "precio": 47000, "categoria": "Productos Sin Azúcar", "descripcion": "Suave y cremoso, cheesecake sin azucar.", "imagen": "Cheesecake_Sin_Azucar.png" },
  { "codigo": "PT001", "nombre": "Empanada de Manzana", "precio": 3000, "categoria": "Pastelería Tradicional", "descripcion": "Pasteleria tradicional rellena de manzanas especiadas.", "imagen": "Empanada_Manzana.png" },
  { "codigo": "PT002", "nombre": "Tarta de Santiago", "precio": 6000, "categoria": "Pastelería Tradicional", "descripcion": "Tradicional tarta espanola hecha con almendras.", "imagen": "Tarta_De_Santiago.png" },
  { "codigo": "PG001", "nombre": "Brownie Sin Gluten", "precio": 4000, "categoria": "Productos Sin Gluten", "descripcion": "Rico y denso, brownie sin gluten.", "imagen": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" },
  { "codigo": "PG002", "nombre": "Pan Sin Gluten", "precio": 3500, "categoria": "Productos Sin Gluten", "descripcion": "Suave y esponjoso, pan sin gluten.", "imagen": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
  { "codigo": "PV001", "nombre": "Torta Vegana de Chocolate", "precio": 50000, "categoria": "Productos Vegana", "descripcion": "Torta de chocolate humeda, sin productos de origen animal.", "imagen": "Torta_Chocolate_vegana.png" },
  { "codigo": "PV002", "nombre": "Galletas Veganas de Avena", "precio": 4500, "categoria": "Productos Vegana", "descripcion": "Crujientes y sabrosas, galletas veganas de avena.", "imagen": "Galletas_Veganas.png" },
  { "codigo": "TE001", "nombre": "Torta Especial de Cumpleaños", "precio": 55000, "categoria": "Tortas Especiales", "descripcion": "Disenada especialmente para celebraciones.", "imagen": "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80" },
  { "codigo": "TE002", "nombre": "Torta Especial de Boda", "precio": 60000, "categoria": "Tortas Especiales", "descripcion": "Elegante y deliciosa, torta de boda.", "imagen": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80" }
];

// Devuelve la URL completa de la imagen (local o externa)
function getImgUrl(imagen) {
  return imagen.startsWith('http') ? imagen : ASSET_BASE + imagen;
}

// Cuando la pagina carga, busca el producto por codigo y lo muestra
document.addEventListener('DOMContentLoaded', () => {
  // Obtiene el codigo del producto desde la URL (?codigo=XXX)
  const params = new URLSearchParams(window.location.search);
  const codigo = params.get('codigo');

  // Si no hay codigo en la URL, muestra mensaje de error
  if (!codigo) {
    document.getElementById('detalle-container').innerHTML = '<p style="padding:40px;text-align:center;">Producto no encontrado</p>';
    return;
  }

  // Busca el producto en la lista por su codigo
  const producto = productos.find(p => p.codigo === codigo);

  // Si el producto no existe, muestra mensaje de error
  if (!producto) {
    document.getElementById('detalle-container').innerHTML = '<p style="padding:40px;text-align:center;">Producto no encontrado</p>';
    return;
  }

  // Renderiza la galeria de imagenes y la informacion del producto en el DOM
  const container = document.getElementById('detalle-container');
  container.innerHTML = `
    <div class="detalle-galeria">
      <div class="detalle-imagen-principal">
        <img src="${getImgUrl(producto.imagen)}" alt="${producto.nombre}" onerror="this.src='../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
      </div>
      <div class="detalle-miniaturas">
        <div class="detalle-miniatura activo">
          <img src="${getImgUrl(producto.imagen)}" alt="${producto.nombre}" onerror="this.src='../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
        </div>
        <div class="detalle-miniatura">
          <img src="${getImgUrl(producto.imagen)}" alt="${producto.nombre}" onerror="this.src='../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
        </div>
        <div class="detalle-miniatura">
          <img src="${getImgUrl(producto.imagen)}" alt="${producto.nombre}" onerror="this.src='../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
        </div>
      </div>
    </div>
    <div class="detalle-info">
      <span class="detalle-categoria-tag">${producto.categoria}</span>
      <div class="detalle-titulo-precio">
        <h1>${producto.nombre}</h1>
        <span>$${producto.precio.toLocaleString('es-CL')}</span>
      </div>
      <hr>
      <p class="detalle-descripcion">${producto.descripcion}</p>
      <label for="detalle-cantidad">Cantidad</label>
      <input type="number" id="detalle-cantidad" value="1" min="1">
      <button class="detalle-btn-carrito" id="btn-add-cart">Añadir al carrito</button>
      <hr>
    </div>
  `;

  // Evento: al hacer clic en "Anadir al carrito", agrega el producto tantas veces como la cantidad indicada
  document.getElementById('btn-add-cart').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('detalle-cantidad').value) || 1;
    for (let i = 0; i < cantidad; i++) {
      agregarProducto({ codigo: producto.codigo, nombre: producto.nombre, precio: producto.precio });
    }
  });

  // Muestra hasta 5 productos relacionados de la misma categoria (excluye el producto actual)
  const relacionados = productos.filter(p => p.categoria === producto.categoria && p.codigo !== producto.codigo).slice(0, 5);
  const grid = document.getElementById('relacionados-grid');
  if (relacionados.length === 0) {
    document.querySelector('.relacionados').style.display = 'none';
  } else {
    grid.innerHTML = relacionados.map(p => `
      <div class="relacionado-item" onclick="window.location.href='detalle_producto.html?codigo=${p.codigo}'">
        <img src="${getImgUrl(p.imagen)}" alt="${p.nombre}" loading="lazy" onerror="this.src='../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
        <div class="relacionado-nombre">${p.nombre}</div>
        <div class="relacionado-precio">$${p.precio.toLocaleString('es-CL')}</div>
      </div>
    `).join('');
  }
});
