// ============================================
// home.js - Pagina de Inicio (Home)
// Muestra los productos populares en una grilla
// ============================================

const ASSET_BASE = 'src/assets/Imagenes_Pasteles/';

const productos = [
  { "codigo": "TC001", "nombre": "Torta Cuadrada de Chocolate", "precio": 45000, "categoria": "Tortas Cuadradas", "imagen": "Torta_Cuadrada_Chocolate.png" },
  { "codigo": "TC002", "nombre": "Torta Cuadrada de Frutas", "precio": 50000, "categoria": "Tortas Cuadradas", "imagen": "Torta_Cuadrada_Frutas_Vainilla.png" },
  { "codigo": "TT001", "nombre": "Torta Circular de Vainilla", "precio": 40000, "categoria": "Tortas Circulares", "imagen": "Torta_Circular_Vainilla.png" },
  { "codigo": "TT002", "nombre": "Torta Circular de Manjar", "precio": 42000, "categoria": "Tortas Circulares", "imagen": "Torta_Circular_Manjar_Nueces.png" },
  { "codigo": "PI001", "nombre": "Mousse de Chocolate", "precio": 5000, "categoria": "Postres Individuales", "imagen": "Mousse_Chocolate_Individual.png" },
  { "codigo": "PI002", "nombre": "Tiramisú Clásico", "precio": 5500, "categoria": "Postres Individuales", "imagen": "Tiramisu_Clasico.png" },
  { "codigo": "PSA001", "nombre": "Torta Sin Azúcar de Naranja", "precio": 48000, "categoria": "Productos Sin Azúcar", "imagen": "Torta_Naranja.png" },
  { "codigo": "PSA002", "nombre": "Cheesecake Sin Azúcar", "precio": 47000, "categoria": "Productos Sin Azúcar", "imagen": "Cheesecake_Sin_Azucar.png" },
  { "codigo": "PT001", "nombre": "Empanada de Manzana", "precio": 3000, "categoria": "Pastelería Tradicional", "imagen": "Empanada_Manzana.png" },
  { "codigo": "PT002", "nombre": "Tarta de Santiago", "precio": 6000, "categoria": "Pastelería Tradicional", "imagen": "Tarta_De_Santiago.png" },
  { "codigo": "PG001", "nombre": "Brownie Sin Gluten", "precio": 4000, "categoria": "Productos Sin Gluten", "imagen": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" },
  { "codigo": "PG002", "nombre": "Pan Sin Gluten", "precio": 3500, "categoria": "Productos Sin Gluten", "imagen": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
  { "codigo": "PV001", "nombre": "Torta Vegana de Chocolate", "precio": 50000, "categoria": "Productos Vegana", "imagen": "Torta_Chocolate_vegana.png" },
  { "codigo": "PV002", "nombre": "Galletas Veganas de Avena", "precio": 4500, "categoria": "Productos Vegana", "imagen": "Galletas_Veganas.png" },
  { "codigo": "TE001", "nombre": "Torta Especial de Cumpleaños", "precio": 55000, "categoria": "Tortas Especiales", "imagen": "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80" },
  { "codigo": "TE002", "nombre": "Torta Especial de Boda", "precio": 60000, "categoria": "Tortas Especiales", "imagen": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80" }
];

function getImgUrl(imagen) {
  return imagen.startsWith('http') ? imagen : ASSET_BASE + imagen;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productos-populares-grid');
  const populares = productos.slice(0, 8);
  renderizarPopulares(populares);

  function renderizarPopulares(lista) {
    grid.innerHTML = '';
    lista.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'popular-card';
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="popular-img-container">
          <img src="${getImgUrl(producto.imagen)}" alt="${producto.nombre}" loading="lazy" onerror="this.src='src/assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
          <span class="popular-category-tag">${producto.categoria}</span>
        </div>
        <div class="popular-info">
          <h3>${producto.nombre}</h3>
          <div class="popular-footer">
            <span class="popular-price">$${producto.precio.toLocaleString('es-CL')}</span>
            <button class="product-action-btn pop-add-btn" title="Agregar al carrito">ver descripcion</button>
          </div>
        </div>
      `;
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.pop-add-btn')) {
          window.location.href = `src/components/detalle_producto.html?codigo=${producto.codigo}`;
        }
      });
      const btnAdd = card.querySelector('.pop-add-btn');
      btnAdd.addEventListener('click', (e) => {
        e.stopPropagation();
        agregarProducto({ codigo: producto.codigo, nombre: producto.nombre, precio: producto.precio });
        btnAdd.textContent = '✅';
        setTimeout(() => { btnAdd.textContent = '🛒'; }, 1200);
      });
      grid.appendChild(card);
    });
  }
});
