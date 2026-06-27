// ============================================
// productos_menu.js - Pagina de Productos
// Muestra todos los productos con buscador y filtros
// ============================================

// --- Lista completa de productos (datos fijos) ---
const productos = [
  {
    "id": "TC001",                                                               // Identificador unico
    "codigo": "TC001",                                                           // Codigo del producto
    "nombre": "Torta Cuadrada de Chocolate",                                     // Nombre
    "descripcion": "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.", // Descripcion
    "precio": 45000,                                                             // Precio en CLP
    "categoria": "Tortas Cuadradas",                                             // Categoria
    "imagen": "../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png"         // Ruta de imagen
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

  // Obtiene el contenedor donde van las tarjetas
  const gridContainer = document.getElementById('productos-grid');

  // Obtiene el input de busqueda
  const searchInput = document.getElementById('search-input');

  // Obtiene todos los botones de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Variable que guarda la categoria seleccionada ("Todo" por defecto)
  let categoriaActiva = 'Todo';

  // Variable que guarda el texto escrito en la busqueda
  let textoBusqueda = '';

  // --- Funcion que dibuja las tarjetas en pantalla ---
  function mostrarProductos(lista) {

    // Limpia el contenedor
    gridContainer.innerHTML = '';

    // Si la lista esta vacia, muestra mensaje de "no resultados"
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

    // Recorre cada producto y crea su tarjeta
    lista.forEach(producto => {

      // Crea un div para la tarjeta
      const card = document.createElement('div');

      // Asigna la clase CSS "product-card"
      card.className = 'product-card';

      // Llena la tarjeta con los datos del producto
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
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

      // Agrega la tarjeta al contenedor
      gridContainer.appendChild(card);
    });
  }

  // --- Funcion que filtra los productos segun categoria y busqueda ---
  function filtrarYMostrar() {

    // Filtra el arreglo de productos
    const filtrados = productos.filter(producto => {

      // Revisa si la categoria coincide (o si esta en "Todo")
      const coincideCategoria = categoriaActiva === 'Todo' || producto.categoria.toLowerCase() === categoriaActiva.toLowerCase();

      // Revisa si el nombre o descripcion contienen el texto buscado
      const coincideBusqueda = producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                               producto.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());

      // Solo incluye el producto si cumple ambas condiciones
      return coincideCategoria && coincideBusqueda;
    });

    // Muestra los productos filtrados
    mostrarProductos(filtrados);
  }

  // --- Cuando el usuario escribe en el buscador ---
  searchInput.addEventListener('input', (e) => {

    // Guarda el texto escrito (sin espacios al inicio/final)
    textoBusqueda = e.target.value.trim();

    // Vuelve a filtrar y mostrar
    filtrarYMostrar();
  });

  // --- Cuando el usuario hace clic en un boton de categoria ---
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {

      // Quita la clase "active" de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Agrega la clase "active" al boton que se presiono
      button.classList.add('active');

      // Actualiza la categoria activa (o "Todo" si no tiene data-category)
      categoriaActiva = button.dataset.category || 'Todo';

      // Vuelve a filtrar y mostrar
      filtrarYMostrar();
    });
  });

  // --- Muestra todos los productos al cargar la pagina ---
  filtrarYMostrar();
});
