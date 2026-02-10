# Testing Guidelines - AEM Edge Delivery Services

Testing strategy: **Manual validation first**, E2E automation optional

---

## 🎯 Testing Philosophy

### Prioridades
1. **Manual testing in browser** → MANDATORY for all blocks
2. **ESLint** → MANDATORY for all JavaScript
3. **Stylelint** → MANDATORY for all CSS
4. **E2E with Puppeteer** → OPTIONAL (recommended for critical flows)

### Why Manual First?
- AEM EDS bloques son visuales (decoración del DOM)
- Universal Editor requiere validación visual
- Responsive design necesita testing multi-device
- Unit tests complejos para manipulación del DOM

---

## ✅ 1. Linting Estático (OBLIGATORIO)

### ESLint para JavaScript
```bash
npm run lint:js
```

**Debe pasar sin errores antes de commit**

**Configuración**: `.eslintrc.js`
- `eslint-config-airbnb-base`
- `eslint-plugin-xwalk`
- `eslint-plugin-json`

**Errores comunes**:
- `no-console` → Eliminar console.log en producción
- `no-unused-vars` → Eliminar variables no usadas
- `import/no-unresolved` → Verificar rutas de imports

---

### Stylelint para CSS
```bash
npm run lint:css
```

**Debe pasar sin errores antes de commit**

**Configuración**: `stylelint.config.js`
- `stylelint-config-standard`

**Errores comunes**:
- `color-hex-length` → Usar formato corto (#fff vs #ffffff)
- `declaration-block-no-duplicate-properties` → Eliminar propiedades duplicadas
- `selector-max-id` → Evitar selectores de ID

---

### Lint Completo
```bash
npm run lint
```

Ejecuta ambos linters (JS + CSS)

---

## ✅ 2. Validación Visual en Navegador (OBLIGATORIO)

### Herramientas

#### Opción 1: Live Server (VSCode)
1. Instalar extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"
3. Abrir `http://localhost:5500/`

#### Opción 2: AEM CLI
```bash
npx @adobe/aem-cli up
```
Abrir `http://localhost:3000/`

#### Opción 3: Servidor HTTP simple
```bash
npx http-server . -p 3000
```

---

### Checklist de Validación Visual

#### 🔍 Rendering Básico
- [ ] Bloque renderiza sin errores de consola JavaScript
- [ ] Bloque renderiza sin errores de consola CSS
- [ ] Contenido del Universal Editor se muestra correctamente
- [ ] Imágenes cargan correctamente
- [ ] Textos son legibles (contraste, tamaño)

#### 📱 Responsive Design
**Mobile (375px - 767px)**:
- [ ] Layout se adapta a pantalla pequeña
- [ ] Textos son legibles (min 14px)
- [ ] Botones son táctiles (min 44x44px)
- [ ] No hay scroll horizontal

**Tablet (768px - 1023px)**:
- [ ] Layout se adapta a pantalla media
- [ ] Grid/columnas ajustadas
- [ ] Imágenes escaladas correctamente

**Desktop (1024px+)**:
- [ ] Layout optimizado para pantalla grande
- [ ] Max-width aplicado (evitar líneas muy largas)
- [ ] Espaciado adecuado

#### 🎨 Estilos y Temas
- [ ] Colores de tema aplicados correctamente
- [ ] Tipografía correcta (fuentes, tamaños, weights)
- [ ] Espaciado consistente (padding, margin)
- [ ] Bordes y sombras (si aplica)

#### 🖱️ Interacciones
- [ ] Hover states funcionan (botones, enlaces)
- [ ] Active states funcionan (clicks)
- [ ] Focus states visibles (accesibilidad)
- [ ] Transiciones suaves (si aplica)

#### ⚡ Performance
- [ ] Bloque carga rápido (< 1s para decoración)
- [ ] Lazy loading funciona (bloques below-the-fold)
- [ ] No hay layout shifts (CLS)
- [ ] Imágenes optimizadas

#### 🔗 Content Fragments (si aplica)
- [ ] Content Fragment renderizado correctamente desde AEM
- [ ] **NO hay fetches GraphQL** (CF viene pre-renderizado)
- [ ] Datos del CF se muestran correctamente
- [ ] Decoración del bloque funciona (clases, estilos)
- [ ] Universal Editor permite editar CF in-place
- [ ] Atributos `data-aue-*` presentes para instrumentación

#### ♿ Accesibilidad Básica
- [ ] Navegación con teclado (Tab)
- [ ] Textos alternativos en imágenes
- [ ] Contraste suficiente (WCAG AA)
- [ ] Headings semánticos (h1, h2, h3)

---

### Herramientas de DevTools

#### Chrome DevTools
```bash
F12 → Console
```
**Verificar**:
- No hay errores JavaScript
- No hay warnings críticos
- Network tab: Verificar requests (200 OK)

#### Responsive Mode
```bash
F12 → Toggle device toolbar (Ctrl+Shift+M)
```
**Probar dispositivos**:
- iPhone SE (375px)
- iPad (768px)
- Desktop (1920px)

#### Lighthouse (Performance)
```bash
F12 → Lighthouse → Analyze page load
```
**Objetivo**:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+

---

## ✅ 3. Testing de Integración con Universal Editor (si aplica)

### Checklist Universal Editor
- [ ] Bloque se puede editar en Universal Editor (AEM Author)
- [ ] Cambios en Universal Editor se reflejan en preview
- [ ] Atributos `data-aue-*` presentes
- [ ] `isAuthorEnvironment()` detecta correctamente el entorno
- [ ] Content Fragments se renderizan nativamente (NO fetch GraphQL)

### Verificar Atributos de Instrumentación
```javascript
// En modo Author, verificar que el bloque tiene:
<div class="hero" data-aue-resource="urn:aem:..." data-aue-type="component">
  ...
</div>
```

---

## ✅ 4. E2E con Puppeteer (OPCIONAL / RECOMENDADO)

### Cuándo Usar E2E
- Flujos críticos (checkout, formularios)
- Bloques con interacciones complejas (carousels, accordions)
- Integración con Content Fragments nativos
- Regression testing

### Template de Test E2E

**Archivo**: `tests/e2e/hero.test.js`

```javascript
const puppeteer = require('puppeteer-core');

describe('Hero Block E2E', () => {
  let browser, page;
  const BASE_URL = 'http://localhost:3000';
  
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    page = await browser.newPage();
  });
  
  afterAll(async () => {
    await browser.close();
  });
  
  test('should load and decorate hero block', async () => {
    await page.goto(`${BASE_URL}/`);
    
    // Esperar que el bloque se decore
    await page.waitForSelector('.hero');
    
    // Verificar estructura básica
    const heading = await page.$('.hero h1');
    expect(heading).toBeTruthy();
    
    // Verificar contenido
    const headingText = await page.$eval('.hero h1', el => el.textContent);
    expect(headingText).toBeTruthy();
  });
  
  test('should be responsive on mobile', async () => {
    await page.setViewport({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/`);
    
    await page.waitForSelector('.hero');
    
    // Verificar que no hay scroll horizontal
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);
  });
  
  test('should handle CTA button click', async () => {
    await page.goto(`${BASE_URL}/`);
    
    await page.waitForSelector('.hero .button-container a');
    
    // Click en CTA
    await page.click('.hero .button-container a');
    
    // Verificar navegación (ajustar según lógica)
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    
    const url = page.url();
    expect(url).toContain('/products'); // Ejemplo
  });
});
```

### Ejecutar E2E Tests
```bash
# Instalar dependencias
npm install --save-dev puppeteer-core jest

# Ejecutar tests
npm test
```

---

## ✅ 5. Scripts de Verificación Pre-Commit

### Configuración Husky

**Archivo**: `package.json`
```json
{
  "scripts": {
    "lint": "npm run lint:js && npm run lint:css",
    "lint:js": "eslint . --ext .json,.js,.mjs",
    "lint:css": "stylelint \"blocks/**/*.css\" \"styles/*.css\"",
    "build:json": "npm-run-all -p build:json:models build:json:definitions build:json:filters",
    "test:e2e": "jest tests/e2e"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
}
```

**Flujo pre-commit**:
1. `npm run lint` → ESLint + Stylelint
2. Si pasan → Commit allowed
3. Si fallan → Commit blocked

---

## ✅ 6. Documentación de Testing

### Template de Documentación de Bloque

**Archivo**: `blocks/mi-bloque/README.md`

```markdown
# Mi Bloque

## Testing Realizado

### ✅ Linting
- ESLint: PASS
- Stylelint: PASS

### ✅ Validación Visual
**Dispositivos testeados**:
- Mobile (iPhone SE - 375px) ✓
- Tablet (iPad - 768px) ✓
- Desktop (1920px) ✓

**Browsers**:
- Chrome 120+ ✓
- Firefox 120+ ✓
- Safari 17+ ✓

**Screenshots**:
![Mobile](./screenshots/mobile.png)
![Desktop](./screenshots/desktop.png)

### ✅ Interacciones
- Hover states ✓
- Click en botones ✓
- Navegación con teclado ✓

### ✅ Performance
- Lighthouse Performance: 95
- Lighthouse Accessibility: 98
- First Contentful Paint: 0.8s

### ✅ Universal Editor
- Editable en AEM Author ✓
- Preview funciona ✓
- Atributos data-aue-* presentes ✓

### ✅ Content Fragments (si aplica)
- CF renderizado nativamente por AEM ✓
- NO hay fetch GraphQL ✓
- Decoración funciona correctamente ✓

## Casos de Uso Testeados
1. Hero con imagen de fondo → ✓
2. Hero con layout overlay → ✓
3. Hero con CTA primario → ✓
4. Hero responsive mobile → ✓
```

---

## 📚 Checklist Completo de Testing

### Antes de Commit
- [ ] `npm run lint` → PASS
- [ ] Visual validation en 3 dispositivos (mobile/tablet/desktop)
- [ ] Browser console sin errores
- [ ] Responsive design funciona

### Antes de Merge a Main
- [ ] Todos los linters pasan
- [ ] Validación visual completa
- [ ] Documentation actualizada con screenshots
- [ ] E2E tests pasan (si aplican)
- [ ] Performance Lighthouse > 90

### Antes de Deploy a Producción
- [ ] Testing en staging environment
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility validation (WCAG AA)
- [ ] Performance validation (Core Web Vitals)
- [ ] Universal Editor validation (si aplica)

---

## 📚 Referencias

### Herramientas
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Puppeteer](https://pptr.dev/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Documentación AEM EDS
- [AEM EDS Testing Guide](https://www.aem.live/docs/dev-collab-and-good-practices)
- [Performance Best Practices](https://www.aem.live/developer/keeping-it-100)
- [Universal Editor](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/introduction.html)

### Bloques del Proyecto
- [`blocks/hero/hero.js`](../../blocks/hero/hero.js)
- [`blocks/content-fragment/content-fragment.js`](../../blocks/content-fragment/content-fragment.js) - Content Fragment nativo (NO GraphQL)
- [`blocks/cards/cards.js`](../../blocks/cards/cards.js)

