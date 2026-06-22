document.addEventListener('DOMContentLoaded', () => {
  // --- Elementos del DOM ---
  const gridContainer = document.getElementById('productos-grid');
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // --- Estado de la aplicación ---
  let productosArray = [];
  let categoriaActiva = 'Todo';
  let textoBusqueda = '';

  // --- Cargar Productos desde JSON ---
  async function cargarProductos() {
    try {
      // La ruta es relativa a src/components/productos.html que es donde se ejecuta
      const response = await fetch('../Json/productos.Json');
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - No se pudo cargar el catálogo`);
      }
      productosArray = await response.json();
      console.log('Productos cargados con éxito:', productosArray);
      filtrarYMostrarProductos();
    } catch (error) {
      console.error('Error al cargar productos:', error);
      mostrarError();
    }
  }

  // --- Renderizar Tarjetas en el DOM ---
  function mostrarProductos(productos) {
    gridContainer.innerHTML = '';

    if (productos.length === 0) {
      gridContainer.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>No se encontraron productos</h3>
          <p>Intenta con otros filtros o términos de búsqueda.</p>
        </div>
      `;
      return;
    }

    productos.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
          <span class="product-category-tag">${producto.categoria}</span>
        </div>
        <div class="product-info">
          <h3 class="product-title">${producto.nombre}</h3>
          <p class="product-description">${producto.descripcion}</p>
          <div class="product-footer">
            <span class="product-price">$${producto.precio.toLocaleString('es-CL')}</span>
          </div>
        </div>
      `;
      gridContainer.appendChild(card);
    });
  }

  // --- Filtrar y Mostrar Productos ---
  function filtrarYMostrarProductos() {
    const productosFiltrados = productosArray.filter(producto => {
      // Filtro por Categoría
      const coincideCategoria = (categoriaActiva === 'Todo' || producto.categoria.toLowerCase() === categoriaActiva.toLowerCase());
      
      // Filtro por Texto de Búsqueda
      const coincideBusqueda = producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) || 
                               producto.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());

      return coincideCategoria && coincideBusqueda;
    });

    mostrarProductos(productosFiltrados);
  }

  // --- Mostrar Error de Carga ---
  function mostrarError() {
    gridContainer.innerHTML = `
      <div class="no-results" style="border-color: #ffb5c0;">
        <div class="no-results-icon" style="color: #d9534f;">⚠️</div>
        <h3>Error al cargar el catálogo</h3>
        <p>No pudimos cargar los productos en este momento. Por favor, intenta de nuevo más tarde.</p>
      </div>
    `;
  }

  // --- Controladores de Eventos ---

  // Búsqueda por input
  searchInput.addEventListener('input', (e) => {
    textoBusqueda = e.target.value.trim();
    filtrarYMostrarProductos();
  });

  // Filtrado por botones de categoría
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Quitar clase activa a todos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Añadir clase activa al botón presionado
      button.classList.add('active');
      
      // Actualizar estado y filtrar
      categoriaActiva = button.dataset.category || 'Todo';
      filtrarYMostrarProductos();
    });
  });

  // --- Inicialización ---
  cargarProductos();
});
