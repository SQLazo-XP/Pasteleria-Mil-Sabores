# Pastelería Mil Sabores

Sitio web estático de una pastelería artesanal. Muestra productos, permite filtrarlos por categoría, buscarlos por nombre/descripción, y ofrece registro e inicio de sesión de usuarios.

## Estructura del proyecto

```
Pasteleria_Mil_Sabores/
├── index.html                     # Página principal
├── src/
│   ├── components/                # Páginas secundarias
│   │   ├── productos.html         #   Catálogo con filtros y búsqueda
│   │   ├── inicio_sesion.html     #   Inicio de sesión
│   │   ├── registro_usuario.html  #   Registro con selección de región/comuna
│   │   ├── nosotros.html
│   │   ├── blogs.html
│   │   └── contacto.html
│   ├── css/css-Home/              # Estilos CSS (importados en home.css)
│   │   ├── home.css               #   Archivo principal (importa los demás)
│   │   ├── base.css               #   Variables y reseteo
│   │   ├── navbar_menu.css
│   │   ├── hero_menu.css
│   │   ├── sections_menu.css
│   │   ├── footers_menu.css
│   │   ├── productos_page.css     #   Estilos del catálogo
│   │   └── nosotros_page.css
│   ├── js/                        # Scripts JavaScript
│   │   ├── js-Home/home.js                    # Productos populares en inicio
│   │   ├── js-Productos/productos_menu.js     # Catálogo con filtros y búsqueda
│   │   ├── js-Inicio_Sesion/inicio_sesion.js  # Validación de login
│   │   └── js-Registro_Usuario/registro_usuario.js  # Registro con validación
│   ├── assets/                    # Imágenes y recursos multimedia
│   │   ├── logo.png
│   │   └── Imagenes_Pasteles/     # Fotos de productos
│   └── json/productos.Json        # Datos de productos
```

## Funcionalidades

- **Catálogo de productos** — Tarjetas con imagen, nombre, descripción, precio y categoría
- **Filtros por categoría** — Botones para filtrar por tipo de producto
- **Buscador** — Filtrado en tiempo real por nombre o descripción
- **Registro de usuario** — Validación de campos, carga dinámica de comunas según región
- **Inicio de sesión** — Validación de credenciales y redirección
- **Diseño responsivo** — Adaptable a pantallas móviles y escritorio

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, variables, imports)
- JavaScript (DOM, eventos, validación)

## Cómo usar

Abrir `index.html` en un navegador o levantar un servidor local:

```bash
# Python
python -m http.server 8080

# Node.js (http-server)
npx http-server
```
