const productos = [
  {
    "codigo": "TC001",
    "nombre": "Torta Cuadrada de Chocolate",
    "precio": 45000,
    "categoria": "Tortas Cuadradas",
    "imagen": "src/assets/Imagenes_Pasteles/Torta_Cuadrada_Chocolate.png"
  },
  {
    "codigo": "TC002",
    "nombre": "Torta Cuadrada de Frutas",
    "precio": 50000,
    "categoria": "Tortas Cuadradas",
    "imagen": "src/assets/Imagenes_Pasteles/Torta_Cuadrada_Frutas_Vainilla.png"
  },
  {
    "codigo": "TT001",
    "nombre": "Torta Circular de Vainilla",
    "precio": 40000,
    "categoria": "Tortas Circulares",
    "imagen": "src/assets/Imagenes_Pasteles/Torta_Circular_Vainilla.png"
  },
  {
    "codigo": "TT002",
    "nombre": "Torta Circular de Manjar",
    "precio": 42000,
    "categoria": "Tortas Circulares",
    "imagen": "src/assets/Imagenes_Pasteles/Torta_Circular_Manjar_Nueces.png"
  },
  {
    "codigo": "PI001",
    "nombre": "Mousse de Chocolate",
    "precio": 5000,
    "categoria": "Postres Individuales",
    "imagen": "src/assets/Imagenes_Pasteles/Mousse_Chocolate_Individual.png"
  },
  {
    "codigo": "PI002",
    "nombre": "Tiramisú Clásico",
    "precio": 5500,
    "categoria": "Postres Individuales",
    "imagen": "src/assets/Imagenes_Pasteles/Tiramisu_Clasico.png"
  },
  {
    "codigo": "PSA001",
    "nombre": "Torta Sin Azúcar de Naranja",
    "precio": 48000,
    "categoria": "Productos Sin Azúcar",
    "imagen": "src/assets/Imagenes_Pasteles/Torta_Naranja.png"
  },
  {
    "codigo": "PSA002",
    "nombre": "Cheesecake Sin Azúcar",
    "precio": 47000,
    "categoria": "Productos Sin Azúcar",
    "imagen": "src/assets/Imagenes_Pasteles/Cheesecake_Sin_Azucar.png"
  },
  {
    "codigo": "PT001",
    "nombre": "Empanada de Manzana",
    "precio": 3000,
    "categoria": "Pastelería Tradicional",
    "imagen": "src/assets/Imagenes_Pasteles/Empanada_Manzana.png"
  },
  {
    "codigo": "PT002",
    "nombre": "Tarta de Santiago",
    "precio": 6000,
    "categoria": "Pastelería Tradicional",
    "imagen": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
  },
  {
    "codigo": "PG001",
    "nombre": "Brownie Sin Gluten",
    "precio": 4000,
    "categoria": "Productos Sin Gluten",
    "imagen": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    "codigo": "PG002",
    "nombre": "Pan Sin Gluten",
    "precio": 3500,
    "categoria": "Productos Sin Gluten",
    "imagen": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    "codigo": "PV001",
    "nombre": "Torta Vegana de Chocolate",
    "precio": 50000,
    "categoria": "Productos Vegana",
    "imagen": "https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=600&q=80"
  },
  {
    "codigo": "PV002",
    "nombre": "Galletas Veganas de Avena",
    "precio": 4500,
    "categoria": "Productos Vegana",
    "imagen": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },
  {
    "codigo": "TE001",
    "nombre": "Torta Especial de Cumpleaños",
    "precio": 55000,
    "categoria": "Tortas Especiales",
    "imagen": "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "codigo": "TE002",
    "nombre": "Torta Especial de Boda",
    "precio": 60000,
    "categoria": "Tortas Especiales",
    "imagen": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productos-populares-grid');
  const populares = productos.slice(0, 8);
  renderizarPopulares(populares);

  function renderizarPopulares(lista) {
    grid.innerHTML = '';

    lista.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'popular-card';

      card.innerHTML = `
        <div class="popular-img-container">
          <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
          <span class="popular-category-tag">${producto.categoria}</span>
        </div>
        <div class="popular-info">
          <h3>${producto.nombre}</h3>
          <div class="popular-footer">
            <span class="popular-price">$${producto.precio.toLocaleString('es-CL')}</span>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }
});
