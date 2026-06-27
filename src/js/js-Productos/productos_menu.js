// ============================================
// productos_menu.js - Pagina de Productos
// Muestra todos los productos con buscador y filtros por categoria
// ============================================

// --- Lista completa de productos (datos fijos) ---
const productos = [
  {
    "id": "TC001",
    "codigo": "TC001",
    "nombre": "Torta Cuadrada de Chocolate",
    "descripcion": "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    "precio": 45000,
    "categoria": "Tortas Cuadradas",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png"
  },
  {
    "id": "TC002",
    "codigo": "TC002",
    "nombre": "Torta Cuadrada de Frutas",
    "descripcion": "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
    "precio": 50000,
    "categoria": "Tortas Cuadradas",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Cuadrada_Frutas_Vainilla.png"
  },
  {
    "id": "TT001",
    "codigo": "TT001",
    "nombre": "Torta Circular de Vainilla",
    "descripcion": "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    "precio": 40000,
    "categoria": "Tortas Circulares",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Circular_Vainilla.png"
  },
  {
    "id": "TT002",
    "codigo": "TT002",
    "nombre": "Torta Circular de Manjar",
    "descripcion": "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    "precio": 42000,
    "categoria": "Tortas Circulares",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Circular_Manjar_Nueces.png"
  },
  {
    "id": "PI001",
    "codigo": "PI001",
    "nombre": "Mousse de Chocolate",
    "descripcion": "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
    "precio": 5000,
    "categoria": "Postres Individuales",
    "imagen": "../assets/Imagenes_Pasteles/Mousse_Chocolate_Individual.png"
  },
  {
    "id": "PI002",
    "codigo": "PI002",
    "nombre": "Tiramisú Clásico",
    "descripcion": "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
    "precio": 5500,
    "categoria": "Postres Individuales",
    "imagen": "../assets/Imagenes_Pasteles/Tiramisu_Clasico.png"
  },
  {
    "id": "PSA001",
    "codigo": "PSA001",
    "nombre": "Torta Sin Azúcar de Naranja",
    "descripcion": "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
    "precio": 48000,
    "categoria": "Productos Sin Azúcar",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Naranja.png"
  },
  {
    "id": "PSA002",
    "codigo": "PSA002",
    "nombre": "Cheesecake Sin Azúcar",
    "descripcion": "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
    "precio": 47000,
    "categoria": "Productos Sin Azúcar",
    "imagen": "../assets/Imagenes_Pasteles/Cheesecake_Sin_Azucar.png"
  },
  {
    "id": "PT001",
    "codigo": "PT001",
    "nombre": "Empanada de Manzana",
    "descripcion": "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
    "precio": 3000,
    "categoria": "Pastelería Tradicional",
    "imagen": "../assets/Imagenes_Pasteles/Empanada_Manzana.png"
  },
  {
    "id": "PT002",
    "codigo": "PT002",
    "nombre": "Tarta de Santiago",
    "descripcion": "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
    "precio": 6000,
    "categoria": "Pastelería Tradicional",
    "imagen": "../assets/Imagenes_Pasteles/Tarta_De_Santiago.png"
  },
  {
    "id": "PG001",
    "codigo": "PG001",
    "nombre": "Brownie Sin Gluten",
    "descripcion": "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
    "precio": 4000,
    "categoria": "Productos Sin Gluten",
    "imagen": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "PG002",
    "codigo": "PG002",
    "nombre": "Pan Sin Gluten",
    "descripcion": "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
    "precio": 3500,
    "categoria": "Productos Sin Gluten",
    "imagen": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "PV001",
    "codigo": "PV001",
    "nombre": "Torta Vegana de Chocolate",
    "descripcion": "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
    "precio": 50000,
    "categoria": "Productos Vegana",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Chocolate_vegana.png"
  },
  {
    "id": "PV002",
    "codigo": "PV002",
    "nombre": "Galletas Veganas de Avena",
    "descripcion": "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
    "precio": 4500,
    "categoria": "Productos Vegana",
    "imagen": "../assets/Imagenes_Pasteles/Galletas_Veganas.png"
  },
  {
    "id": "TE001",
    "codigo": "TE001",
    "nombre": "Torta Especial de Cumpleaños",
    "descripcion": "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
    "precio": 55000,
    "categoria": "Tortas Especiales",
    "imagen": "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "TE002",
    "codigo": "TE002",
    "nombre": "Torta Especial de Boda",
    "descripcion": "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
    "precio": 60000,
    "categoria": "Tortas Especiales",
    "imagen": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80"
  }
];

// --- Cuando la pagina termina de cargar ---
document.addEventListener('DOMContentLoaded', () => {

  // Referencia al contenedor de tarjetas de productos
  const gridContainer = document.getElementById('productos-grid');

  // Referencia al campo de busqueda por texto
  const searchInput = document.getElementById('search-input');

  // Referencia a los botones de filtro por categoria
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Almacena la categoria seleccionada actualmente ("Todo" por defecto)
  let categoriaActiva = 'Todo';

  // Almacena el texto ingresado en el buscador
  let textoBusqueda = '';

  // Renderiza las tarjetas de producto en la grilla
  function mostrarProductos(lista) {
    gridContainer.innerHTML = '';

    // Si no hay resultados, muestra un mensaje indicandolo
    if (lista.length === 0) {
      gridContainer.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>No se encontraron productos</h3>
          <p>Intenta con otros filtros o terminos de busqueda.</p>
        </div>
      `;
      return;
    }

    // Itera sobre la lista filtrada y crea una tarjeta para cada producto
    lista.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy" onerror="this.src='../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png'">
          <span class="product-category-tag">${producto.categoria}</span>
        </div>
        <div class="product-info">
          <h3 class="product-title">${producto.nombre}</h3>
          <div class="product-footer">
            <span class="product-price">$${producto.precio.toLocaleString('es-CL')}</span>
            <a href="detalle_producto.html?codigo=${producto.codigo}" class="product-detail-btn">Ver descripción</a>
          </div>
        </div>
      `;
      gridContainer.appendChild(card);
    });
  }

  // Filtra los productos segun categoria activa y texto de busqueda, luego los renderiza
  function filtrarYMostrar() {
    const filtrados = productos.filter(producto => {

      // Verifica si coincide con la categoria seleccionada (o si se muestran todos)
      const coincideCategoria = categoriaActiva === 'Todo' || producto.categoria.toLowerCase() === categoriaActiva.toLowerCase();

      // Verifica si el nombre o descripcion contienen el texto buscado
      const coincideBusqueda = producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                               producto.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());

      // El producto debe cumplir ambos criterios para mostrarse
      return coincideCategoria && coincideBusqueda;
    });

    mostrarProductos(filtrados);
  }

  // Escucha los cambios en el campo de busqueda y aplica el filtro en tiempo real
  searchInput.addEventListener('input', (e) => {
    textoBusqueda = e.target.value.trim();
    filtrarYMostrar();
  });

  // Escucha los clics en los botones de categoria y actualiza el filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Desmarca todos los botones y marca solo el seleccionado
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Actualiza la categoria activa (usa "Todo" si el boton no tiene data-category)
      categoriaActiva = button.dataset.category || 'Todo';

      filtrarYMostrar();
    });
  });

  // Muestra todos los productos al cargar la pagina por primera vez
  filtrarYMostrar();
});
