# Tech Stack Reference - AEM Edge Delivery Services
Complete technical stack description for AEM EDS project
---

## Core Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| **JavaScript ES6+** | Nativo | Lenguaje principal (bloques) |
| **AEM Universal Editor** | N/A | Authoring de contenido + Content Fragments nativos |
| **AEM EDS Runtime** | N/A | Sistema de entrega de contenido |
| **Node.js** | 20.18+ | Runtime / tooling (ESLint, build scripts) |
| **ESLint** | 8.57.1 | Validación de código JavaScript |
| **Stylelint** | 16.17.0 | Validación de CSS |
| **Helix Query** | N/A | Indexación de contenido |

## 🗂️ Project Structure
```
blocks/            # Bloques (componentes decoradores)
├─ hero/
│  ├─ hero.js      # export default function decorate(block) {}
│  ├─ hero.css     # Estilos del bloque
├─ content-fragment/
│  ├─ content-fragment.js  # Decora CF nativo de AEM (NO GraphQL)
│  ├─ content-fragment.css
│  └─ _content-fragment.json
├─ cards/
│  ├─ cards.js
│  ├─ cards.css
│  └─ _cards.json

scripts/           # Scripts globales
├─ aem.js          # Utilidades core
│                  # - getMetadata(name)
│                  # - decorateButtons(container)
│                  # - decorateIcons(container)
│                  # - loadFragment(path)
│                  # - readBlockConfig(block)
├─ scripts.js      # Inicialización global + isAuthorEnvironment()
├─ utils.js        # Helpers (getHostname)
└─ delayed.js      # Carga diferida de bloques

styles/            # Estilos globales
└─ styles.css

models/            # Definiciones JSON
├─ _page.json      # Definición de página
├─ _section.json   # Definición de sección
├─ _component-models.json
├─ _component-definition.json
└─ _component-filters.json

fstab.yaml         # Montaje de contenido desde AEM Universal Editor
helix-query.yaml   # Configuración de indexación
component-models.json  # Generado por build:json (merged)
```

### Notes about project structure
- **blocks/{name}/ → Bloques decoradores (componentes UI)**
- **scripts/aem.js → Utilidades core (NO GraphQL client)**
- **scripts/scripts.js → Inicialización + detección de entorno**
- **models/ → Definiciones JSON para Universal Editor**
- **Content Fragments → Renderizados nativamente por AEM (no fetch)**

## 🎨 Architecture Principles

### Principios de Bloques con Universal Editor
1. **Decoración pura**: `decorate(block)` recibe DOM del Universal Editor, lo modifica in-place
2. **No side effects globales**: No modificar otros elementos del DOM fuera del bloque
3. **Lazy loading**: Bloques below-the-fold cargan con `delayed.js`
4. **Utilidades core**: Reusar funciones de `scripts/aem.js`
5. **isAuthorEnvironment()**: Detectar si estamos en Universal Editor (AEM Author)

### Patrón de Contenido con Universal Editor
- **Authoring**: Universal Editor en AEM (configurado en `fstab.yaml`)
  - URL: `https://author-pXXXXX-eXXXXX.adobeaemcloud.com/bin/franklin.delivery/`
- **Transformación**: Helix Pipeline convierte contenido AEM → HTML semántico
- **Decoración**: Bloques JavaScript transforman HTML → UI final
- **Content Fragments**: **Renderizados nativamente por AEM (NO GraphQL en bloques)**

### Content Fragments (Nativo AEM)
- **Renderizado**: AEM Universal Editor renderiza el Content Fragment como HTML
- **Entrega**: HTML viene a través del pipeline de AEM EDS
- **Decoración**: Bloques JavaScript solo aplican estilos y comportamiento
- **NO se usa GraphQL**: El componente de Content Fragment de AEM maneja todo

### Ejemplo de HTML de Content Fragment desde AEM
```html
<div class="content-fragment">
  <div><div><a>/content/dam/site/fragments/hero-cta</a></div></div>
  <div><div>master</div></div> <!-- Variation -->
  <div><div>centered</div></div> <!-- Display style -->
  <!-- AEM ya ha resuelto el CF, el bloque solo decora -->
</div>
```

### Detección de Entorno
```javascript
import { isAuthorEnvironment } from '../../scripts/scripts.js';

const isAuthor = isAuthorEnvironment();
// true si estamos en Universal Editor (AEM Author)
// false si estamos en preview/live (AEM Publish)
```

## Styling Code Strategy
- **Component-scoped styles**: CSS dentro de `blocks/{name}/{name}.css`
- **CSS / Media queries**: Responsive design (mobile-first approach)
- **Global CSS**: Solo para estilos verdaderamente compartidos en `styles/styles.css`
- **Avoid inline styles**: Preferir clases CSS

### Responsive Design Breakpoints
```css
/* Mobile first (default) */
.hero { padding: 1rem; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .hero { padding: 2rem; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .hero { padding: 3rem; }
}
```

## 📚 Configuration Files

### fstab.yaml - Content Mounting
```yaml
mountpoints:
  /:
    url: "https://author-pXXXXX-eXXXXX.adobeaemcloud.com/bin/franklin.delivery/project/site/main"
    type: "markup"
    suffix: ".html"
```

### helix-query.yaml - Content Indexing
Configura qué contenido se indexa para búsqueda y consultas.

### component-models.json (generado)
Generado por `npm run build:json` - merge de todos los `models/_*.json`

## 📚 Next Steps

- **[Code Patterns](02-code-patterns.md)** - Templates de bloques
- **[Testing Guidelines](03-testing.md)** - Estrategia de testing

## 📚 Referencias Oficiales

### Documentación AEM EDS
- [Tutorial oficial](https://www.aem.live/developer/tutorial)
- [Documentación completa](https://www.aem.live/docs/)
- [Block Collection](https://www.aem.live/developer/block-collection)

### Universal Editor y Content Fragments
- [Universal Editor Overview](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/introduction.html)
- [Content Fragments en Universal Editor](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/authoring/fragments/content-fragments.html) - Renderizado nativo (NO GraphQL)
- [Instrumenting Pages](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/getting-started.html)

### Utilidades Core del Proyecto
- [`scripts/aem.js`](../../scripts/aem.js) - Funciones helper (NO GraphQL client)
- [`scripts/scripts.js`](../../scripts/scripts.js) - isAuthorEnvironment()
- [`scripts/utils.js`](../../scripts/utils.js) - Helpers (getHostname)

### Bloques de Referencia
- [`blocks/hero/`](../../blocks/hero/) - Bloque básico con configuración
- [`blocks/content-fragment/`](../../blocks/content-fragment/) - Content Fragment nativo (NO GraphQL)
- [`blocks/cards/`](../../blocks/cards/) - Bloque con variaciones

