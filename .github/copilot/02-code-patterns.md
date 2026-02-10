# Code Patterns - AEM Edge Delivery Services

Copy-paste templates for blocks, utilities, and Content Fragments

---

## 📦 Patrón 1: Bloque Básico (Hero)

**Ejemplo real del proyecto**: `blocks/hero/hero.js`

```javascript
import { getMetadata } from '../../scripts/aem.js';
import { isAuthorEnvironment, moveInstrumentation } from '../../scripts/scripts.js';
import { readBlockConfig } from '../../scripts/aem.js';

/**
 * Decora el bloque Hero
 * @param {Element} block - Elemento del bloque
 */
export default function decorate(block) {
  // 1. Leer configuración del bloque desde el HTML del Universal Editor
  const enableUnderline = block.querySelector(':scope div:nth-child(3) > div')?.textContent?.trim() || 'true';
  const layoutStyle = block.querySelector(':scope div:nth-child(4) > div')?.textContent?.trim() || 'overlay';
  const ctaStyle = block.querySelector(':scope div:nth-child(5) > div')?.textContent?.trim() || 'default';
  const backgroundStyle = block.querySelector(':scope div:nth-child(6) > div')?.textContent?.trim() || 'default';

  // 2. Aplicar clases de configuración
  if (layoutStyle) {
    block.classList.add(`${layoutStyle}`);
  }

  if (backgroundStyle) {
    block.classList.add(`${backgroundStyle}`);
  }

  // 3. Modificar comportamiento según configuración
  if (enableUnderline.toLowerCase() === 'false') {
    block.classList.add('removeunderline');
  }
  
  // 4. Encontrar y decorar botones
  const buttonContainer = block.querySelector('p.button-container');
  if (buttonContainer) {
    buttonContainer.classList.add(`cta-${ctaStyle}`);
  }
  
  // 5. Ocultar elementos de configuración (mantener DOM limpio)
  const underlineDiv = block.querySelector(':scope div:nth-child(3)');
  if (underlineDiv) {
    underlineDiv.style.display = 'none';
  }
}
```

**Estructura HTML esperada del Universal Editor**:
```html
<div class="hero overlay">
  <div><h1>Hero Title</h1></div>
  <div><p>Description text</p></div>
  <div>true</div> <!-- Enable underline -->
  <div>overlay</div> <!-- Layout style -->
  <div>default</div> <!-- CTA style -->
  <div>default</div> <!-- Background style -->
</div>
```

---

## 📦 Patrón 2: Bloque con Content Fragment (Nativo AEM - SIN GraphQL)

**IMPORTANTE**: Content Fragments se renderizan **nativamente por AEM**, NO se usa GraphQL en el bloque.

```javascript
import { getMetadata } from '../../scripts/aem.js';
import { isAuthorEnvironment } from '../../scripts/scripts.js';
import { readBlockConfig } from '../../scripts/aem.js';

/**
 * Decora el bloque Content Fragment
 * El Content Fragment viene pre-renderizado desde AEM
 * Este bloque solo aplica estilos y configuración
 * @param {Element} block
 */
export default function decorate(block) {
  // 1. Leer configuración del bloque desde Universal Editor
  const contentPath = block.querySelector(':scope div:nth-child(1) > div a')?.textContent?.trim();
  const variationname = block.querySelector(':scope div:nth-child(2) > div')?.textContent?.trim()?.toLowerCase() || 'master';
  const displayStyle = block.querySelector(':scope div:nth-child(3) > div')?.textContent?.trim() || '';
  const alignment = block.querySelector(':scope div:nth-child(4) > div')?.textContent?.trim() || '';
  const ctaStyle = block.querySelector(':scope div:nth-child(5) > div')?.textContent?.trim() || 'button';

  // 2. Detectar entorno (opcional para lógica específica)
  const isAuthor = isAuthorEnvironment();

  // 3. Aplicar clases de configuración al bloque
  if (displayStyle) {
    block.classList.add(displayStyle);
  }

  if (alignment) {
    block.classList.add(`align-${alignment}`);
  }

  // 4. Decorar botones CTA si existen
  const buttonContainer = block.querySelector('.button-container');
  if (buttonContainer) {
    buttonContainer.classList.add(`cta-${ctaStyle}`);
  }

  // 5. Aplicar atributos de instrumentación para Universal Editor
  if (isAuthor && contentPath) {
    const itemId = `urn:aemconnection:${contentPath}/jcr:content/data/${variationname}`;
    block.setAttribute('data-aue-resource', itemId);
    block.setAttribute('data-aue-type', 'reference');
    block.setAttribute('data-aue-filter', 'contentfragment');
    block.setAttribute('data-aue-label', 'Content Fragment');
  }

  // 6. Ocultar elementos de configuración (mantener DOM limpio)
  const configDivs = block.querySelectorAll(':scope > div');
  configDivs.forEach((div, index) => {
    if (index >= 1 && index <= 4) { // Divs de configuración
      div.style.display = 'none';
    }
  });
}
```

**Estructura HTML esperada del Universal Editor**:
```html
<div class="content-fragment">
  <!-- Configuración (se oculta después) -->
  <div><div><a>/content/dam/site/fragments/hero-cta</a></div></div>
  <div><div>master</div></div>
  <div><div>centered</div></div>
  <div><div>center</div></div>
  <div><div>primary</div></div>
  
  <!-- Contenido del CF ya renderizado por AEM -->
  <div class="cf-content">
    <h2>Welcome to Our Site</h2>
    <p>Discover amazing content</p>
    <div class="button-container">
      <a href="/products">Get Started</a>
    </div>
  </div>
</div>
```

**Flujo de Content Fragment**:
1. **Autor crea CF** en AEM (Universal Editor)
2. **AEM renderiza CF** como HTML (componente nativo de AEM)
3. **EDS entrega HTML** pre-renderizado al navegador
4. **Bloque JavaScript decora** el HTML (aplica clases, estilos, comportamiento)
5. **NO hay fetch ni GraphQL** en el cliente

---

## ❌ ANTI-PATRÓN: No hacer fetch de GraphQL

```javascript
// ❌ MAL - NO hacer esto en bloques EDS
export default async function decorate(block) {
  const contentPath = block.textContent.trim();
  
  // ❌ NO: Fetch GraphQL desde el bloque
  const response = await fetch(`/graphql/execute.json/query?path=${contentPath}`);
  const data = await response.json();
  
  // ❌ NO: Renderizar desde respuesta GraphQL
  block.innerHTML = `<h2>${data.title}</h2>`;
}
```

```javascript
// ✅ BIEN - Content Fragment ya viene renderizado desde AEM
export default function decorate(block) {
  // ✅ SÍ: Solo decorar el HTML que ya existe
  const heading = block.querySelector('h2');
  if (heading) {
    heading.classList.add('cf-title');
  }
  
  // ✅ SÍ: Aplicar configuración visual
  block.classList.add('cf-decorated');
}
```

---

## 📦 Patrón 3: Uso de Utilidades Core (scripts/aem.js)

```javascript
import { 
  getMetadata,           // Lee metadata de la página
  decorateButtons,       // Decora enlaces como botones
  decorateIcons,         // Decora iconos SVG
  loadFragment,          // Carga fragmentos HTML
  readBlockConfig        // Lee configuración del bloque
} from '../../scripts/aem.js';

import { 
  isAuthorEnvironment,   // Detecta si estamos en Universal Editor
  moveInstrumentation    // Mueve atributos de instrumentación
} from '../../scripts/scripts.js';

import { 
  getHostname            // Obtiene hostname desde placeholders
} from '../../scripts/utils.js';

export default async function decorate(block) {
  // 1. Usar getMetadata para leer configuración global
  const authorUrl = getMetadata('authorurl');
  const publishUrl = getMetadata('publishurl');
  
  // 2. Detectar entorno
  const isAuthor = isAuthorEnvironment();
  
  // 3. Decorar botones automáticamente
  decorateButtons(block);
  
  // 4. Decorar iconos automáticamente
  decorateIcons(block);
  
  // 5. Leer configuración del bloque (key-value pairs)
  const config = readBlockConfig(block);
  // Ejemplo: { title: 'My Title', style: 'dark' }
  
  // 6. Cargar fragmento si es necesario
  const fragmentPath = block.querySelector('a')?.href;
  if (fragmentPath && fragmentPath.includes('/fragments/')) {
    const fragment = await loadFragment(fragmentPath);
    block.replaceChildren(fragment);
  }
}
```

---

## 📦 Patrón 4: Configuración JSON del Bloque

**Archivo**: `blocks/content-fragment/_content-fragment.json`

```json
{
  "title": "Content Fragment",
  "id": "content-fragment",
  "plugins": {
    "xwalk": {
      "page": {
        "resourceType": "core/franklin/components/block/v1/block",
        "template": {
          "model": "content-fragment",
          "filter": "content-fragment"
        }
      }
    }
  }
}
```

**Uso**: Este archivo define el modelo del bloque para el Universal Editor

---

## 📦 Patrón 5: Configuración de Contenido (fstab.yaml)

**Archivo**: `fstab.yaml`

```yaml
mountpoints:
  /:
    url: "https://author-p158352-e1686153.adobeaemcloud.com/bin/franklin.delivery/salvamolaso/eds/main"
    type: "markup"
    suffix: ".html"
```

**Uso**: Define el origen de contenido desde AEM Universal Editor

---

## 📦 Patrón 6: Estilos Responsive del Bloque

**Archivo**: `blocks/hero/hero.css`

```css
/* Estilos base */
.hero {
  position: relative;
  padding: 2rem;
  background-color: var(--background-color);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Modificadores de layout */
.hero.overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  color: white;
}

.hero.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Modificadores de CTA */
.hero .button-container.cta-primary a {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
}

.hero .button-container.cta-secondary a {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 4px;
}

/* Responsive design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero.split {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
  }
  
  .hero h1 {
    font-size: 1.5rem;
  }
}
```

---

## 📚 Checklist para Crear un Nuevo Bloque

1. **Crear estructura de archivos**:
   ```
   blocks/mi-bloque/
   ├─ mi-bloque.js
   ├─ mi-bloque.css
   └─ _mi-bloque.json (opcional)
   ```

2. **Implementar función `decorate()`**:
   - Leer configuración del DOM del Universal Editor
   - Aplicar clases y estilos
   - Decorar botones/iconos con utilidades de `scripts/aem.js`
   - Manejar lazy loading si es necesario

3. **Agregar estilos responsive**:
   - Mobile first (320px+)
   - Tablet (768px+)
   - Desktop (1024px+)

4. **Configurar modelo JSON** (si necesita integración con Universal Editor):
   - Definir `id` y `title`
   - Configurar plugins xwalk

5. **Testing**:
   - `npm run lint:js` → DEBE pasar
   - `npm run lint:css` → DEBE pasar
   - Validación visual en navegador
   - Verificar responsive design

---

## 📚 Referencias

### Bloques de referencia del proyecto
- [`blocks/hero/hero.js`](../../blocks/hero/hero.js)
- [`blocks/content-fragment/content-fragment.js`](../../blocks/content-fragment/content-fragment.js) - Content Fragment nativo (NO GraphQL)
- [`blocks/cards/cards.js`](../../blocks/cards/cards.js)

### Utilidades core
- [`scripts/aem.js`](../../scripts/aem.js) - Funciones helper (NO GraphQL client)
- [`scripts/utils.js`](../../scripts/utils.js) - Helpers compartidos

### Documentación AEM EDS
- [Tutorial oficial](https://www.aem.live/developer/tutorial)
- [Block Collection](https://www.aem.live/developer/block-collection)
- [Universal Editor](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/introduction.html)

