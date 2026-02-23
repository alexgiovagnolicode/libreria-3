# 📚 Biblioteca Personal

Una aplicación web elegante para gestionar tu colección de libros personal. Sin servidor, sin base de datos — todo funciona en el navegador con `localStorage`.

## ✨ Funcionalidades

- **Colección completa**: Añade libros con título, autor, editorial, precio, páginas, temática y estado
- **Estados**: Leído / En curso / Pendiente de leer
- **Búsqueda en tiempo real**: Busca por título, autor, temática o anotaciones
- **Filtros**: Por estado y por temática
- **Editar y eliminar** libros desde la tarjeta o el detalle
- **Portadas**: Añade URL de portada para visualización visual
- **Estadísticas completas**:
  - Total de libros, leídos, en curso, pendientes
  - Porcentaje de libros leídos
  - Total de páginas (leídas y pendientes)
  - Gasto total en libros
  - Autores y temáticas únicas
  - Gráficas de distribución por estado, temática y autores más representados
- **Responsive**: Funciona en móvil, tablet y escritorio
- **Datos persistentes**: Los datos se guardan en `localStorage` del navegador

## 🚀 Despliegue en GitHub Pages

1. Sube los 3 archivos a un repositorio de GitHub:
   - `index.html`
   - `styles.css`
   - `app.js`

2. Ve a **Settings → Pages** en tu repositorio

3. En *Source*, selecciona la rama `main` y la carpeta `/root`

4. Guarda. En unos minutos tu URL estará disponible en:
   `https://tu-usuario.github.io/nombre-del-repositorio/`

## 💡 Notas importantes

- Los datos se guardan **localmente en el navegador** donde accedas. Si usas la web desde distintos dispositivos, los datos **no se sincronizan automáticamente** (son independientes por dispositivo/navegador).
- Si quieres compartir datos entre dispositivos, puedes exportar e importar manualmente (funcionalidad que puedes solicitar añadir).
- Los 200+ libros de tu Excel ya están precargados en la app la primera vez que la abras.

## 📂 Estructura del proyecto

```
biblioteca-personal/
├── index.html    # Estructura HTML de la app
├── styles.css    # Estilos (tema oscuro elegante)
├── app.js        # Lógica, datos y funcionalidades
└── README.md     # Este archivo
```

## 🎨 Tecnologías

- HTML5 / CSS3 / JavaScript (Vanilla)
- [Chart.js](https://www.chartjs.org/) para gráficas
- Google Fonts (Cormorant Garamond + Jost)
- `localStorage` para persistencia de datos
