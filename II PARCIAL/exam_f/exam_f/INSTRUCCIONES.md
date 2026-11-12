# Instrucciones del Examen - Handlebars y Less

## Objetivo del Examen

Transformar el archivo `index.html` y `style.css` proporcionados en una aplicación web dinámica utilizando:
- **Handlebars** para crear partials reutilizables
- **Less** para preprocesar los estilos CSS
- **Context Function** (src/data/index.js) para manejar variables y datos dinámicos

## Instalación de Dependencias

1. Abrir una terminal en la carpeta del examen
2. Ejecutar el siguiente comando para instalar las dependencias:

```bash
npm install
```

3. Una vez instaladas las dependencias, iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. El servidor se iniciará en `http://localhost:5173` (o el puerto que Vite asigne)

## Tareas a Realizar

### 1. Crear Partials de Handlebars

Debes dividir el `index.html` en componentes reutilizables dentro de la carpeta `src/partials/`.

Nota: Cada boilerplate incluye un archivo base `src/partials/partial.hbs`. Puedes usarlo como punto de partida o reemplazarlo por partials separados (por ejemplo: `navbar.hbs`, `hero.hbs`, `content.hbs`, `contact.hbs`, `footer.hbs`) según tu organización preferida.

### 2. Extraer Variables al Context Function

En el archivo `src/data/index.js`, debes crear una función de contexto que devuelva un objeto con todas las variables extraídas del HTML.

### 3. Registrar los Partials en vite.config.js

Los partials ya están configurados en `vite.config.js`. Asegúrate de registrar cualquier partial nuevo que agregues.

### 4. Convertir CSS a Less

Debes convertir el archivo `style.css` a `less/style.less` utilizando las características de Less como variables, anidamiento y mixins.

### 5. Actualizar index.html

El archivo `index.html` debe incluir los partials usando la sintaxis de Handlebars.

**Nota:** El link de estilos debe apuntar a `/less/style.less`, Vite lo procesará automáticamente.

## Estructura de Carpetas Esperada

```
exam_X/
├── index.html              # HTML principal (debe invocar los partials)
├── style.css               # CSS original (no modificar, solo referencia)
├── package.json
├── vite.config.js
├── src/
│   ├── data/
│   │   └── index.js        # Context function con variables
│   └── partials/
│       ├── partial.hbs     # Partial base incluido en el boilerplate
│       └── (tus partials).hbs  # Agrega los que necesites
└── less/
    └── style.less          # CSS convertido a Less
```

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Notas Importantes

- NO modifiques los archivos `package.json` ni `vite.config.js`
- El archivo `style.css` es solo para referencia, NO lo uses en el HTML final
- Las variables y estilos comunes deben ser puestos en el archivo `less/style.less`
- Se debe crear un archivo less por cada componente `less/navbar.less`, `less/hero.less`, etc.
- El archivo `less/style.less` debe importar los archivos less de cada componente
- Todas las variables dinámicas deben estar en `src/data/index.js`


**¡Buena suerte! 🚀**
