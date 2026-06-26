const productos = [
  {
    "id": "TC001",
    "codigo": "TC001",
    "nombre": "Torta Cuadrada de Chocolate",
    "descripcion": "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.",
    "precio": 45000,
    "categoria": "Tortas Cuadradas",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png"
  },
  {
    "id": "TC002",
    "codigo": "TC002",
    "nombre": "Torta Cuadrada de Frutas",
    "descripcion": "Una mezcla de frutas frescas y crema chantilly.",
    "precio": 50000,
    "categoria": "Tortas Cuadradas",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Cuadrada_Frutas_Vainilla.png"
  },
  {
    "id": "TT001",
    "codigo": "TT001",
    "nombre": "Torta Circular de Vainilla",
    "descripcion": "Bizcocho de vainilla clasico relleno con crema pastelera.",
    "precio": 40000,
    "categoria": "Tortas Circulares",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Circular_Vainilla.png"
  },
  {
    "id": "TT002",
    "codigo": "TT002",
    "nombre": "Torta Circular de Manjar",
    "descripcion": "Torta tradicional chilena con manjar y nueces.",
    "precio": 42000,
    "categoria": "Tortas Circulares",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Circular_Manjar_Nueces.png"
  },
  {
    "id": "PI001",
    "codigo": "PI001",
    "nombre": "Mousse de Chocolate",
    "descripcion": "Postre individual cremoso y suave.",
    "precio": 5000,
    "categoria": "Postres Individuales",
    "imagen": "../assets/Imagenes_Pasteles/Mousse_Chocolate_Individual.png"
  },
  {
    "id": "PI002",
    "codigo": "PI002",
    "nombre": "Tiramisú Clásico",
    "descripcion": "Un postre italiano individual con capas de cafe y mascarpone.",
    "precio": 5500,
    "categoria": "Postres Individuales",
    "imagen": "../assets/Imagenes_Pasteles/Tiramisu_Clasico.png"
  },
  {
    "id": "PSA001",
    "codigo": "PSA001",
    "nombre": "Torta Sin Azúcar de Naranja",
    "descripcion": "Torta ligera y deliciosa, endulzada naturalmente.",
    "precio": 48000,
    "categoria": "Productos Sin Azúcar",
    "imagen": "../assets/Imagenes_Pasteles/Torta_Naranja.png"
  },
  {
    "id": "PSA002",
    "codigo": "PSA002",
    "nombre": "Cheesecake Sin Azúcar",
    "descripcion": "Suave y cremoso, cheesecake sin azucar.",
    "precio": 47000,
    "categoria": "Productos Sin Azúcar",
    "imagen": "../assets/Imagenes_Pasteles/Cheesecake_Sin_Azucar.png"
  },
  {
    "id": "PT001",
    "codigo": "PT001",
    "nombre": "Empanada de Manzana",
    "descripcion": "Pasteleria tradicional rellena de manzanas especiadas.",
    "precio": 3000,
    "categoria": "Pastelería Tradicional",
    "imagen": "../assets/Imagenes_Pasteles/Empanada_Manzana.png"
  },
  {
    "id": "PT002",
    "codigo": "PT002",
    "nombre": "Tarta de Santiago",
    "descripcion": "Tradicional tarta espanola hecha con almendras.",
    "precio": 6000,
    "categoria": "Pastelería Tradicional",
    "imagen": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "PG001",
    "codigo": "PG001",
    "nombre": "Brownie Sin Gluten",
    "descripcion": "Rico y denso, brownie sin gluten.",
    "precio": 4000,
    "categoria": "Productos Sin Gluten",
    "imagen": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "PG002",
    "codigo": "PG002",
    "nombre": "Pan Sin Gluten",
    "descripcion": "Suave y esponjoso, pan sin gluten.",
    "precio": 3500,
    "categoria": "Productos Sin Gluten",
    "imagen": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "PV001",
    "codigo": "PV001",
    "nombre": "Torta Vegana de Chocolate",
    "descripcion": "Torta de chocolate humeda, sin productos de origen animal.",
    "precio": 50000,
    "categoria": "Productos Vegana",
    "imagen": "https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "PV002",
    "codigo": "PV002",
    "nombre": "Galletas Veganas de Avena",
    "descripcion": "Crujientes y sabrosas, galletas veganas de avena.",
    "precio": 4500,
    "categoria": "Productos Vegana",
    "imagen": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "TE001",
    "codigo": "TE001",
    "nombre": "Torta Especial de Cumpleaños",
    "descripcion": "Disenada especialmente para celebraciones.",
    "precio": 55000,
    "categoria": "Tortas Especiales",
    "imagen": "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "TE002",
    "codigo": "TE002",
    "nombre": "Torta Especial de Boda",
    "descripcion": "Elegante y deliciosa, torta de boda.",
    "precio": 60000,
    "categoria": "Tortas Especiales",
    "imagen": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80"
  }
];

document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('productos-grid');

  function mostrar(lista) {
    grid.innerHTML = '';
    if (lista.length === 0) {
      grid.innerHTML = '<div class="no-results"><h3>No se encontraron productos</h3><p>Intenta con otros filtros.</p></div>';
      return;
    }
    lista.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${p.imagen}" alt="${p.nombre}" class="product-image" loading="lazy">
          <span class="product-category-tag">${p.categoria}</span>
        </div>
        <div class="product-info">
          <h3 class="product-title">${p.nombre}</h3>
          <p class="product-description">${p.descripcion}</p>
          <div class="product-footer">
            <span class="product-price">$${p.precio.toLocaleString('es-CL')}</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  mostrar(productos);

  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  let categoriaActiva = 'Todo';
  let textoBusqueda = '';

  searchInput.addEventListener('input', (e) => {
    textoBusqueda = e.target.value.trim();
    filtrar();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      categoriaActiva = btn.dataset.category || 'Todo';
      filtrar();
    });
  });

  function filtrar() {
    const filtrados = productos.filter(p => {
      const coincideCategoria = categoriaActiva === 'Todo' || p.categoria.toLowerCase() === categoriaActiva.toLowerCase();
      const coincideBusqueda = textoBusqueda === '' || p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) || p.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
    mostrar(filtrados);
  }
});
