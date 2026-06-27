# Pastelería Mil Sabores

Sitio web estático de una pastelería artesanal. Muestra productos, permite filtrarlos por categoría, buscarlos por nombre/descripción, ofrece registro e inicio de sesión de usuarios, y cuenta con carrito de compras persistente.

## Estructura del proyecto

```
Pasteleria_Mil_Sabores/
├── index.html                          # Página principal
├── src/
│   ├── components/                     # Páginas secundarias
│   │   ├── productos.html              #   Catálogo con filtros y búsqueda
│   │   ├── inicio_sesion.html          #   Inicio de sesión
│   │   ├── registro_usuario.html       #   Registro con selección de región/comuna
│   │   ├── nosotros.html               #   Información de la empresa
│   │   ├── blogs.html                  #   Noticias e historias
│   │   ├── contactos.html              #   Formulario de contacto
│   │   ├── carrito.html                #   Página completa del carrito
│   │   └── detalle_producto.html       #   Detalle de producto individual
│   ├── css/
│   │   ├── css-Home/                   # Estilos importados en home.css
│   │   │   ├── home.css                #   Archivo maestro (importa todos)
│   │   │   ├── base.css                #   Variables CSS y reseteo
│   │   │   ├── navbar_menu.css         #   Barra de navegación + hamburguesa
│   │   │   ├── hero_menu.css           #   Banner principal
│   │   │   ├── sections_menu.css       #   Secciones de inicio
│   │   │   ├── footers_menu.css        #   Pie de página
│   │   │   ├── productos_page.css      #   Catálogo de productos
│   │   │   ├── nosotros_page.css       #   Página nosotros
│   │   │   ├── blogs_page.css          #   Página blogs
│   │   │   ├── contactos_page.css      #   Página contacto
│   │   │   ├── carrito_widget.css      #   Widget del carrito en navbar
│   │   │   ├── carrito_page.css        #   Estilos de la página del carrito
│   │   │   └── detalle_producto.css    #   Detalle de producto
│   │   ├── css-Inicio_Sesion/
│   │   │   └── inicio_sesion.css
│   │   └── css-Registro_Usuario/
│   │       └── registro_usuario.css
│   ├── js/
│   │   ├── js-Home/home.js                     # Productos populares en inicio
│   │   ├── js-Productos/productos_menu.js      # Catálogo con filtros y búsqueda
│   │   ├── js-Inicio_Sesion/inicio_sesion.js   # Validación de login
│   │   ├── js-Registro_Usuario/registro_usuario.js  # Registro con validación
│   │   ├── js-Carrito/carrito.js               # Lógica del carrito (localStorage)
│   │   └── js-Detalle_Producto/detalle_producto.js  # Detalle de producto
│   ├── assets/
│   │   ├── logo.png
│   │   ├── portada_menu.jpg
│   │   └── Imagenes_Pasteles/          # Fotos de productos (12 imágenes locales)
│   └── json/
│       └── productos.Json              # Datos de productos (fuente de verdad)
```

## Funcionalidades

- **Catálogo de productos** — Tarjetas con imagen, nombre, descripción, precio y categoría
- **Filtros por categoría** — Botones para filtrar por tipo de producto
- **Buscador** — Filtrado en tiempo real por nombre o descripción
- **Carrito de compras** — Agregar, eliminar, cambiar cantidad; persiste en localStorage
- **Detalle de producto** — Página individual con galería, cantidad y productos relacionados
- **Página del carrito** — Resumen del pedido, modificar cantidades, vaciar carrito
- **Registro de usuario** — Validación de campos, carga dinámica de comunas según región
- **Inicio de sesión** — Validación de credenciales
- **Formulario de contacto** — Envío con validación
- **Newsletter** — Suscripción desde el footer
- **Menú hamburguesa** — Navegación responsive para móvil
- **Diseño responsivo** — Adaptable a pantallas móviles y escritorio

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, variables CSS, imports)
- JavaScript (DOM, eventos, localStorage)

## Cómo usar

Abrir `index.html` en un navegador o levantar un servidor local:

```bash
# Python
python -m http.server 8080

# Node.js (http-server)
npx http-server
```
