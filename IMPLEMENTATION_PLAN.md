 # Plan de Implementación - Componentes EDS desde Especificación Visual

> **📋 Documento de planificación técnica**  
> Basado en: https://www.caixabank.fr/home_es.html  
> Especificación visual: `spec/Captura de pantalla 2026-02-09 183532.png`  
> Fecha: 2026-02-09  
> **Estado**: 🟢 PLAN COMPLETO - LISTO PARA IMPLEMENTAR

---

## 📋 Resumen Ejecutivo

### ✅ Plan 100% Completo

Este documento contiene el **plan detallado y completo** para implementar la página de CaixaBank Francia usando Adobe Edge Delivery Services (AEM EDS). El análisis está basado en la referencia funcional https://www.caixabank.fr/home_es.html y sigue todas las reglas del proyecto definidas en `.github/copilot/`.

### 🎯 Componentes a Implementar

| Tipo | Componente | Estado | Acción |
|------|------------|--------|--------|
| ✅ Existente | Header | Actualizar | Colores CaixaBank, 5 items nav, CTA |
| ✅ Existente | Hero | Actualizar | Carousel CSS, fade transitions, auto-play 5s |
| ✅ Existente | Cards | Actualizar | Grid 3x2, hover elevation CSS, animaciones |
| ✅ Existente | Footer | Actualizar | Fondo gris, logo, certificaciones |
| 🆕 Nuevo | Country Flags | Crear | 5 banderas circulares, hover scale CSS |
| 🆕 Nuevo | Info Text | Crear | Texto + emails clickeables |

**Total**: 4 componentes a actualizar + 2 componentes nuevos a crear

### 🎨 Características Clave

- **Mobile-First**: Breakpoints 375px, 768px, 1024px, 1440px
- **Animaciones CSS**: Todas las animaciones en CSS (NO JavaScript)
  - Hero carousel: Fade transition 0.8s
  - Cards: Entrada escalonada + hover elevation
  - Banderas: Scale hover + pulse animation
- **Sin Content Fragments**: Contenido estático (como se solicitó)
- **Paleta CaixaBank**: Azul #0073C8, grises, blancos
- **Tipografía**: Roboto + Roboto Condensed

### ⏱️ Estimación Temporal

| Sprint | Duración | Tareas Principales |
|--------|----------|-------------------|
| Sprint 1 | 2-3 días | Variables CSS, Header, Hero Carousel, Cards, Footer |
| Sprint 2 | 1-2 días | Country Flags, Info Text |
| Sprint 3 | 1-2 días | Integración, Testing, Optimización |
| **TOTAL** | **4-7 días** | Proyecto completo production-ready |

### 📂 Estructura del Plan

1. **Fase 1**: Análisis de especificación ✅ COMPLETADO
   - Inventario visual completo
   - Paleta de colores definida
   - Tipografía especificada
   - Breakpoints responsive

2. **Fase 2**: Inventario de componentes ✅ COMPLETADO
   - 4 componentes existentes identificados
   - 2 componentes nuevos especificados
   - Estructura HTML de página definida

3. **Fase 3**: Implementación por capas ✅ DETALLADO
   - Variables CSS globales
   - Actualización de componentes existentes
   - Creación de componentes nuevos
   - Todo el código CSS/JS proporcionado

4. **Fase 4**: Testing y validación ✅ DEFINIDO
   - Checklist de linting
   - Testing cross-browser
   - Testing responsive
   - Performance audit

5. **Fase 5**: Orden de implementación ✅ PLANIFICADO
   - 3 Sprints detallados
   - Tareas por día
   - Duraciones estimadas
   - Checklists por tarea

### 🚀 Cómo Usar Este Plan

1. **Leer completo** (30-45 minutos)
2. **Preparar entorno**: `npm install && npm run lint:js`
3. **Iniciar Sprint 1, Día 1**: Variables CSS en `styles/styles.css`
4. **Seguir checklist** de cada tarea
5. **Validar continuamente**: Lint + Browser + Responsive
6. **Iterar** hasta completar todos los Sprints

### 🎓 Reglas del Proyecto (Resumen)

✅ **HACER**:
- Mobile-first siempre (375px base)
- Animaciones en CSS cuando sea posible
- Validación visual en browser (OBLIGATORIA)
- Testing responsive después de cada componente
- Linting antes de commit (`npm run lint:js && npm run lint:css`)

❌ **NO HACER**:
- NO usar Content Fragments (no aplica en proyecto)
- NO documentar antes de testear código
- NO hacer commit sin pasar linting
- NO considerar completo sin validación visual
- NO usar JavaScript para animaciones simples (usar CSS)

---

## 🎯 Objetivo

Implementar todos los componentes de Adobe Edge Delivery Services necesarios para replicar el diseño de **CaixaBank Francia** (https://www.caixabank.fr), reutilizando componentes existentes (header, hero, cards, footer) y creando nuevos componentes según sea necesario.

### ✅ Consideraciones del Proyecto

1. **Referencia funcional**: Usar comportamientos de https://www.caixabank.fr/home_es.html como guía
2. **NO hay Content Fragments**: Implementación con contenido estático/dinámico sin CF
3. **Mobile-first**: Diseño responsive con breakpoints recomendados (375px, 768px, 1024px, 1440px)
4. **Animaciones CSS**: Priorizar CSS animations/transitions; JavaScript solo si es imprescindible

---

## 📊 Fase 1: Análisis de Especificación ✅ COMPLETADO

### Análisis basado en: https://www.caixabank.fr/home_es.html

#### 1.1 Inventario Visual de Secciones (de arriba a abajo)

```
✅ HEADER
    - Logo: Izquierda, ~150px width, logo CaixaBank con texto "ONE"
    - Navegación: Horizontal, 5 items principales
      * CaixaBank en Francia
      * Productos y Servicios
      * Información Regulatoria y Financiera
      * International Banking
      * CaixaBank Group
    - CTA: Botón "Acceso a clientes ONE" - color azul CaixaBank (#0073C8)
    - Responsive: Menú hamburguesa en móvil (<768px)
    - Colores: Background=#FFFFFF, Texto=#333333, Hover=#0073C8
    - Idioma selector: ES (español) visible arriba a la derecha

✅ HERO/BANNER (Carousel)
    - Layout: Full-width overlay con imagen de fondo
    - Background: Imagen fotográfica (edificio corporativo con cristales)
    - Contenido: 
      * Título: "Sucursal internacional de CaixaBank en Francia" (blanco, grande)
      * Sin subtítulo visible
      * Overlay oscuro semi-transparente rgba(0, 0, 0, 0.4)
    - CTA: No hay botones visibles en el hero principal
    - Altura: ~600px desktop, ~400px mobile
    - Colores: Texto=#FFFFFF, Overlay=rgba(0,0,0,0.4)
    - Navegación: Dots de navegación en parte inferior (carousel)
    - Animación: Fade transition entre slides

✅ SECCIÓN CARDS PRINCIPALES (Grid 3x2)
    Fila 1:
    1. "Productos y Servicios para empresas francesas"
       - Imagen: Persona trabajando en laptop
       - Fondo: Blanco
       - Hover: Elevación y sombra
       
    2. "International Banking"
       - Imagen: Logo CaixaBank con estrellas animadas
       - Fondo: Blanco
       - Hover: Elevación y sombra
       
    3. "Análisis Económicos y de Mercado"
       - Imagen: Documentos y calculadora
       - Fondo: Blanco
       - Hover: Elevación y sombra
    
    Fila 2:
    4. "Información Regulatoria y Financiera"
       - Imagen: Edificio corporativo CaixaBank
       - Fondo: Blanco
       - Hover: Elevación y sombra
       
    5. "Fundación 'la Caixa' y la 'Obra Social'"
       - Imagen: Personas en reunión
       - Fondo: Blanco
       - Hover: Elevación y sombra
       
    6. "Ciberseguridad"
       - Imagen: Globo terráqueo con conexiones digitales
       - Fondo: Blanco
       - Hover: Elevación y sombra
    
    - Layout: CSS Grid 3 columnas desktop, 2 columnas tablet, 1 columna mobile
    - Gap: 2rem entre cards
    - Cards: Fondo blanco, borde sutil, border-radius 8px
    - Hover: transform: translateY(-8px) + box-shadow aumentada
    - Transición: 0.3s ease

✅ SECCIÓN "OTRAS SUCURSALES INTERNACIONALES"
    - Título: "Otras Sucursales Internacionales" centrado
    - Layout: Grid horizontal de 5 banderas circulares
    - Banderas (izquierda a derecha):
      * Alemania (negro-rojo-amarillo)
      * Marruecos (rojo con estrella verde)
      * Reino Unido (Union Jack)
      * Polonia (blanco-rojo)
      * Italia (verde-blanco-rojo)
    - Cada bandera: Círculo 120px, efecto hover scale(1.1)
    - Nombre del país debajo de cada bandera
    - Fondo: Gris muy claro #F8F8F8
    - Padding: 4rem vertical

✅ TEXTO INFORMATIVO
    - Párrafo explicativo sobre la sucursal
    - Texto: "Por favor, tenga en cuenta que CaixaBank, S.A. Sucursal en Francia tiene su oficina ubicada en Francia..."
    - Incluye emails de contacto:
      * Denuncias: canaldenuncias.internal@caixabank.com
      * Protección de datos: proteccion.de.datos.Francia@caixabank.com
      * Prevención blanqueo: SUCURSALFRANCIAREPREVENCIONBCDFT@caixabank.com
    - Fondo: Blanco
    - Tipografía: 14px, line-height: 1.6
    - Max-width: 1200px centrado

✅ FOOTER
    - Logo: CaixaBank en la parte superior izquierda
    - Contenido: 
      * Información corporativa
      * Enlaces legales
      * Iconos de redes sociales
    - Layout: Multi-columna en desktop, apilado en mobile
    - Colores: Background=#F5F5F5, Texto=#666666, Enlaces=#0073C8
    - Iconos: Certificaciones (CNMV, Banco de España, etc.)
    - Copyright: "© CaixaBank, SA 2025"
```

#### 1.2 Paleta de Colores CaixaBank

```css
:root {
  /* === COLORES PRIMARIOS CAIXABANK === */
  --primary-color: #0073C8;           /* Azul CaixaBank */
  --primary-dark: #005A9C;            /* Azul oscuro para hover */
  --secondary-color: #FF6200;         /* Naranja acento (opcional) */
  --accent-color: #00A3E0;            /* Azul claro */
  
  /* === COLORES DE TEXTO === */
  --text-color: #333333;              /* Texto principal */
  --text-color-light: #666666;        /* Texto secundario */
  --text-color-lighter: #999999;      /* Texto terciario */
  --heading-color: #000000;           /* Títulos */
  --text-white: #FFFFFF;              /* Texto blanco */
  
  /* === COLORES DE FONDO === */
  --background-color: #FFFFFF;        /* Fondo principal */
  --background-alt: #F8F8F8;          /* Fondo alternativo (sección banderas) */
  --background-light: #F5F5F5;        /* Fondo footer */
  --background-dark: #1A1A1A;         /* Fondo oscuro (si aplica) */
  
  /* === COLORES DE BOTONES === */
  --button-primary-bg: #0073C8;       /* Azul CaixaBank */
  --button-primary-text: #FFFFFF;     /* Texto blanco */
  --button-primary-hover: #005A9C;    /* Azul oscuro hover */
  
  --button-secondary-bg: transparent;  /* Fondo transparente */
  --button-secondary-text: #0073C8;   /* Texto azul */
  --button-secondary-border: #0073C8; /* Borde azul */
  --button-secondary-hover: #F0F7FC;  /* Fondo azul muy claro hover */
  
  /* === ESTADOS === */
  --hover-color: #005A9C;             /* Hover genérico */
  --focus-color: #0073C8;             /* Focus */
  --focus-outline: rgba(0, 115, 200, 0.3); /* Outline focus */
  --disabled-color: #CCCCCC;          /* Deshabilitado */
  
  /* === BORDES Y SOMBRAS === */
  --border-color: #E0E0E0;            /* Borde sutil */
  --border-color-light: #F0F0F0;      /* Borde más claro */
  --box-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --box-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --box-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  
  /* === OVERLAY === */
  --overlay-dark: rgba(0, 0, 0, 0.4); /* Overlay hero */
  --overlay-light: rgba(255, 255, 255, 0.9); /* Overlay claro */
}
```

#### 1.3 Tipografía

```css
/* Fuentes CaixaBank */
--font-family-base: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-heading: 'Roboto Condensed', 'Roboto', sans-serif;

/* Tamaños - Mobile First */
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */

--font-size-h1: 2rem;         /* 32px mobile */
--font-size-h2: 1.5rem;       /* 24px mobile */
--font-size-h3: 1.25rem;      /* 20px mobile */
--font-size-h4: 1.125rem;     /* 18px mobile */

/* Pesos */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;

/* Line Heights */
--line-height-tight: 1.2;
--line-height-base: 1.6;
--line-height-relaxed: 1.8;

/* Letter Spacing */
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.02em;

/* Responsive Typography - Tablet (768px+) */
@media (min-width: 768px) {
  --font-size-base: 1.0625rem; /* 17px */
  --font-size-h1: 2.5rem;      /* 40px */
  --font-size-h2: 1.875rem;    /* 30px */
  --font-size-h3: 1.5rem;      /* 24px */
}

/* Responsive Typography - Desktop (1024px+) */
@media (min-width: 1024px) {
  --font-size-base: 1.125rem;  /* 18px */
  --font-size-h1: 3rem;        /* 48px */
  --font-size-h2: 2.25rem;     /* 36px */
  --font-size-h3: 1.75rem;     /* 28px */
}

/* Responsive Typography - Large Desktop (1440px+) */
@media (min-width: 1440px) {
  --font-size-h1: 3.5rem;      /* 56px */
}
```

#### 1.4 Espaciado y Layout (Mobile-First)

```css
/* === ESPACIADO BASE === */
--spacing-xxs: 0.25rem;   /* 4px */
--spacing-xs: 0.5rem;     /* 8px */
--spacing-sm: 1rem;       /* 16px */
--spacing-md: 1.5rem;     /* 24px */
--spacing-lg: 2rem;       /* 32px */
--spacing-xl: 3rem;       /* 48px */
--spacing-xxl: 4rem;      /* 64px */
--spacing-xxxl: 6rem;     /* 96px */

/* === LAYOUT === */
/* Mobile First (375px base) */
--container-max-width: 100%;
--container-padding: 1rem;      /* 16px lateral */
--section-padding-vertical: 2rem; /* 32px vertical */
--section-padding-horizontal: 1rem;

/* Grid gaps */
--grid-gap-sm: 1rem;
--grid-gap-md: 1.5rem;
--grid-gap-lg: 2rem;

/* Border radius */
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-xl: 16px;
--border-radius-full: 50%;

/* Transitions */
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;

/* === RESPONSIVE LAYOUT === */

/* Tablet (768px+) */
@media (min-width: 768px) {
  --container-max-width: 720px;
  --container-padding: 1.5rem;
  --section-padding-vertical: 3rem;
  --section-padding-horizontal: 1.5rem;
  --grid-gap-md: 2rem;
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  --container-max-width: 960px;
  --container-padding: 2rem;
  --section-padding-vertical: 4rem;
  --section-padding-horizontal: 2rem;
  --grid-gap-lg: 2.5rem;
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  --container-max-width: 1200px;
  --container-padding: 3rem;
  --section-padding-vertical: 6rem;
  --section-padding-horizontal: 3rem;
}
```

#### 1.5 Breakpoints Recomendados (Mobile-First)

```css
/* === BREAKPOINTS === */
/* Mobile: 0 - 767px (default, no media query needed) */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px - 1439px */
/* Large Desktop: 1440px+ */

/* Uso en CSS */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }

/* Para casos específicos */
@media (max-width: 767px) { /* Solo móvil */ }
@media (min-width: 768px) and (max-width: 1023px) { /* Solo tablet */ }
```

---

## 📦 Fase 2: Inventario de Componentes ✅ COMPLETADO

### 2.1 Componentes Existentes (Reutilizar y Actualizar)

| Componente | Ubicación | Estado | Acciones Necesarias |
|------------|-----------|--------|---------------------|
| **Header** | `blocks/header/` | ✅ Existe | ❗ **ACTUALIZAR**: <br>- Logo CaixaBank ONE<br>- Navegación 5 items<br>- Selector de idioma (ES)<br>- Botón CTA "Acceso clientes ONE"<br>- Colores azul CaixaBank<br>- Menú hamburguesa móvil |
| **Hero** | `blocks/hero/` | ✅ Existe | ❗ **ACTUALIZAR**:<br>- Modo carousel con dots de navegación<br>- Overlay oscuro rgba(0,0,0,0.4)<br>- Título grande blanco centrado<br>- Sin botones CTA<br>- Altura 600px desktop, 400px mobile<br>- Fade transition CSS |
| **Cards** | `blocks/cards/` | ✅ Existe | ❗ **ACTUALIZAR**:<br>- Grid 3x2 (6 cards total)<br>- Fondo blanco con sombra sutil<br>- Border-radius 8px<br>- Hover: translateY(-8px) + sombra<br>- Responsive: 3 cols desktop, 2 tablet, 1 mobile<br>- Gap 2rem |
| **Footer** | `blocks/footer/` | ✅ Existe | ❗ **ACTUALIZAR**:<br>- Fondo gris claro #F5F5F5<br>- Logo CaixaBank arriba<br>- Iconos certificaciones<br>- Enlaces azul CaixaBank<br>- Copyright 2025<br>- Multi-columna desktop |
| **Carousel** | `blocks/carousel/` | ✅ Existe | ✅ **USAR** para hero con carousel |
| **Columns** | `blocks/columns/` | ✅ Existe | ❌ NO NECESARIO |
| **Teaser** | `blocks/teaser/` | ✅ Existe | ❌ NO NECESARIO |
| **Video** | `blocks/video/` | ✅ Existe | ❌ NO NECESARIO |
| **Content Fragment** | `blocks/content-fragment/` | ✅ Existe | ❌ **NO SE USA** (sin CF en proyecto) |
| **Form** | `blocks/form/` | ✅ Existe | ❌ NO NECESARIO |

### 2.2 Componentes Nuevos a Crear

| Componente | Ubicación | Justificación | Prioridad | Complejidad |
|------------|-----------|---------------|-----------|-------------|
| **Country Flags** | `blocks/country-flags/` | Sección "Otras Sucursales Internacionales"<br>- 5 banderas circulares<br>- Hover scale(1.1)<br>- Links a otras sucursales | **Alta** | Baja |
| **Info Text** | `blocks/info-text/` | Bloque de texto informativo con emails<br>- Párrafo con enlaces<br>- Emails clickeables<br>- Max-width 1200px centrado | **Media** | Muy Baja |
| **Language Selector** | `scripts/language-selector.js` | Selector de idioma en header<br>- Dropdown o toggle<br>- ES seleccionado por defecto | **Baja** | Media |

### 2.3 Estructura de Página Final

```html
<!-- Estructura HTML de la página -->
<header>
  <!-- Header con nav, logo, CTA, language selector -->
</header>

<main>
  <!-- Hero Carousel -->
  <div class="hero carousel">
    <div class="hero-slide">
      <h1>Sucursal internacional de CaixaBank en Francia</h1>
    </div>
  </div>
  
  <!-- Cards Grid 3x2 -->
  <section>
    <div class="cards">
      <ul>
        <li><!-- Card 1: Productos y Servicios --></li>
        <li><!-- Card 2: International Banking --></li>
        <li><!-- Card 3: Análisis Económicos --></li>
        <li><!-- Card 4: Información Regulatoria --></li>
        <li><!-- Card 5: Fundación "la Caixa" --></li>
        <li><!-- Card 6: Ciberseguridad --></li>
      </ul>
    </div>
  </section>
  
  <!-- Country Flags -->
  <section class="country-flags-section">
    <h2>Otras Sucursales Internacionales</h2>
    <div class="country-flags">
      <!-- 5 banderas circulares con links -->
    </div>
  </section>
  
  <!-- Info Text -->
  <section>
    <div class="info-text">
      <p><!-- Texto informativo con emails --></p>
    </div>
  </section>
</main>

<footer>
  <!-- Footer con logo, links, certificaciones -->
</footer>
```

---

## 🔧 Fase 3: Implementación por Capas

### 3.1 Capa 1: Variables Globales y Estilos Base

**Objetivo**: Establecer la base visual del proyecto.

#### Archivos a modificar:
- `styles/styles.css`

#### Tareas:
1. ✅ Actualizar variables CSS con colores de la especificación
2. ✅ Definir tipografía (font-family, sizes, weights)
3. ✅ Establecer espaciado global (margins, paddings)
4. ✅ Configurar breakpoints responsive

#### Template de variables CSS (styles/styles.css):

```css
/* ============================================
   CAIXABANK FRANCIA - VARIABLES CSS
   Mobile-First Approach
   ============================================ */

:root {
  /* === COLORES PRIMARIOS CAIXABANK === */
  --primary-color: #0073C8;
  --primary-dark: #005A9C;
  --secondary-color: #FF6200;
  --accent-color: #00A3E0;
  
  /* === COLORES DE TEXTO === */
  --text-color: #333333;
  --text-color-light: #666666;
  --text-color-lighter: #999999;
  --heading-color: #000000;
  --text-white: #FFFFFF;
  
  /* === COLORES DE FONDO === */
  --background-color: #FFFFFF;
  --background-alt: #F8F8F8;
  --background-light: #F5F5F5;
  --background-dark: #1A1A1A;
  
  /* === COLORES DE BOTONES === */
  --button-primary-bg: #0073C8;
  --button-primary-text: #FFFFFF;
  --button-primary-hover: #005A9C;
  
  --button-secondary-bg: transparent;
  --button-secondary-text: #0073C8;
  --button-secondary-border: #0073C8;
  --button-secondary-hover: #F0F7FC;
  
  /* === ESTADOS === */
  --hover-color: #005A9C;
  --focus-color: #0073C8;
  --focus-outline: rgba(0, 115, 200, 0.3);
  --disabled-color: #CCCCCC;
  
  /* === BORDES Y SOMBRAS === */
  --border-color: #E0E0E0;
  --border-color-light: #F0F0F0;
  --box-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --box-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --box-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  
  /* === OVERLAY === */
  --overlay-dark: rgba(0, 0, 0, 0.4);
  --overlay-light: rgba(255, 255, 255, 0.9);
  
  /* === TIPOGRAFÍA BASE (MOBILE) === */
  --font-family-base: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-heading: 'Roboto Condensed', 'Roboto', sans-serif;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  --font-size-h1: 2rem;
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
  --font-size-h4: 1.125rem;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.2;
  --line-height-base: 1.6;
  --line-height-relaxed: 1.8;
  
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  
  /* === ESPACIADO (MOBILE) === */
  --spacing-xxs: 0.25rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-xxl: 4rem;
  --spacing-xxxl: 6rem;
  
  /* === LAYOUT (MOBILE) === */
  --container-max-width: 100%;
  --container-padding: 1rem;
  --section-padding-vertical: 2rem;
  --section-padding-horizontal: 1rem;
  
  --grid-gap-sm: 1rem;
  --grid-gap-md: 1.5rem;
  --grid-gap-lg: 2rem;
  
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-full: 50%;
  
  /* === TRANSITIONS Y ANIMATIONS === */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  --animation-fade: fade 0.5s ease-in-out;
  --animation-slide-up: slideUp 0.3s ease-out;
  --animation-scale: scale 0.3s ease-in-out;
}

/* === RESPONSIVE BREAKPOINTS === */

/* Tablet (768px+) */
@media (min-width: 768px) {
  :root {
    --font-size-base: 1.0625rem;
    --font-size-h1: 2.5rem;
    --font-size-h2: 1.875rem;
    --font-size-h3: 1.5rem;
    
    --container-max-width: 720px;
    --container-padding: 1.5rem;
    --section-padding-vertical: 3rem;
    --section-padding-horizontal: 1.5rem;
    --grid-gap-md: 2rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  :root {
    --font-size-base: 1.125rem;
    --font-size-h1: 3rem;
    --font-size-h2: 2.25rem;
    --font-size-h3: 1.75rem;
    
    --container-max-width: 960px;
    --container-padding: 2rem;
    --section-padding-vertical: 4rem;
    --section-padding-horizontal: 2rem;
    --grid-gap-lg: 2.5rem;
  }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  :root {
    --font-size-h1: 3.5rem;
    
    --container-max-width: 1200px;
    --container-padding: 3rem;
    --section-padding-vertical: 6rem;
    --section-padding-horizontal: 3rem;
  }
}

/* === KEYFRAMES PARA ANIMACIONES CSS === */

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scale {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación para cards hover */
@keyframes cardHover {
  0% {
    transform: translateY(0);
    box-shadow: var(--box-shadow-sm);
  }
  100% {
    transform: translateY(-8px);
    box-shadow: var(--box-shadow-lg);
  }
}

/* Animación para banderas */
@keyframes flagHover {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.08);
  }
}

/* Animación de pulso para botones */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

#### Checklist Capa 1:
- [ ] Variables CSS definidas según especificación
- [ ] Tipografía configurada y fontes cargadas
- [ ] Espaciado global establecido
- [ ] `npm run lint:css` ✅ PASS
- [ ] Validación visual: Variables aplicadas correctamente en página de prueba

---

### 3.2 Capa 2: Actualización de Componentes Existentes

#### 3.2.1 Header (`blocks/header/`)

**Archivos a modificar**:
- `blocks/header/header.css`
- `blocks/header/header.js` (si es necesario)

**Tareas**:
```css
/* header.css - Actualizaciones */

header {
  background-color: var(--background-color); /* Actualizar según spec */
  border-bottom: 1px solid var(--border-color); /* Si aplica */
}

header nav a {
  color: var(--text-color); /* Actualizar según spec */
}

header nav a:hover {
  color: var(--primary-color); /* Actualizar según spec */
}

/* Logo */
header .logo {
  /* Ajustes de tamaño según spec */
}

/* CTA Button en Header */
header .button-container a {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
  /* ... más estilos según spec */
}
```

**Checklist Header**:
- [ ] Colores actualizados según especificación
- [ ] Logo ajustado (tamaño, posición)
- [ ] Navegación responsive funcional
- [ ] Estados hover/active correctos
- [ ] `npm run lint:css` ✅ PASS
- [ ] Validación visual en browser (desktop/tablet/mobile)
- [ ] Console sin errores

---

#### 3.2.2 Hero con Carousel (`blocks/hero/`)

**Archivos a modificar**:
- `blocks/hero/hero.css`
- `blocks/hero/hero.js`

**Comportamiento esperado** (basado en https://www.caixabank.fr/home_es.html):
- Carousel automático con fade transition
- Dots de navegación en la parte inferior
- Overlay oscuro sobre imagen
- Título centrado en blanco
- Sin botones CTA
- Auto-play cada 5 segundos
- Pausa en hover

**Tareas CSS**:
```css
/* hero.css - Actualizaciones CaixaBank */

.hero {
  position: relative;
  width: 100%;
  height: 400px; /* Mobile */
  overflow: hidden;
  background-color: var(--background-dark);
}

/* Responsive heights */
@media (min-width: 768px) {
  .hero {
    height: 500px;
  }
}

@media (min-width: 1024px) {
  .hero {
    height: 600px;
  }
}

/* Carousel container */
.hero .carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Individual slides */
.hero .hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  z-index: 1;
}

.hero .hero-slide.active {
  opacity: 1;
  z-index: 2;
}

/* Background image */
.hero .hero-slide picture,
.hero .hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay oscuro */
.hero .hero-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--overlay-dark); /* rgba(0, 0, 0, 0.4) */
  z-index: 1;
}

/* Contenido del hero */
.hero .hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  width: 90%;
  max-width: 1200px;
  padding: 0 var(--spacing-sm);
}

.hero h1 {
  color: var(--text-white);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeSlideUp 0.8s ease-out;
}

/* Dots de navegación */
.hero .carousel-dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  gap: var(--spacing-xs);
}

.hero .carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-full);
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-base);
}

.hero .carousel-dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.hero .carousel-dot.active {
  background-color: var(--text-white);
  width: 30px;
  border-radius: 6px;
}

/* Animación de entrada para slides */
@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.hero .hero-slide.animating-in {
  animation: heroFadeIn 0.8s ease-out;
}

/* Pausa en hover */
.hero:hover .hero-slide {
  animation-play-state: paused;
}

/* Responsive: Ajustes de contenido */
@media (min-width: 768px) {
  .hero .hero-content {
    width: 80%;
  }
  
  .hero .carousel-dots {
    bottom: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero .hero-content {
    width: 70%;
  }
}
```

**Tareas JavaScript**:
```javascript
/* hero.js - Implementación de carousel */

export default function decorate(block) {
  const slides = [...block.children];
  
  if (slides.length <= 1) {
    // Si solo hay un slide, no hacer carousel
    return;
  }
  
  // Crear wrapper para slides
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'carousel-wrapper';
  
  // Mover slides al wrapper
  slides.forEach((slide, index) => {
    slide.className = 'hero-slide';
    if (index === 0) slide.classList.add('active');
    
    // Crear contenedor de contenido
    const content = document.createElement('div');
    content.className = 'hero-content';
    
    // Mover el contenido del slide al contenedor
    while (slide.firstChild) {
      content.appendChild(slide.firstChild);
    }
    
    // Agregar contenido de vuelta al slide
    slide.appendChild(content);
    carouselWrapper.appendChild(slide);
  });
  
  // Crear dots de navegación
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'carousel-dots';
  
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  // Limpiar block y agregar nuevo contenido
  block.textContent = '';
  block.appendChild(carouselWrapper);
  block.appendChild(dotsContainer);
  
  // Estado del carousel
  let currentSlide = 0;
  let autoplayInterval;
  
  // Función para ir a un slide específico
  function goToSlide(index) {
    // Remover active de slide actual
    slides[currentSlide].classList.remove('active');
    dotsContainer.children[currentSlide].classList.remove('active');
    
    // Activar nuevo slide
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dotsContainer.children[currentSlide].classList.add('active');
    
    // Reiniciar autoplay
    resetAutoplay();
  }
  
  // Función para avanzar al siguiente slide
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }
  
  // Iniciar autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // 5 segundos
  }
  
  // Detener autoplay
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }
  
  // Reiniciar autoplay
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }
  
  // Pausar en hover
  block.addEventListener('mouseenter', stopAutoplay);
  block.addEventListener('mouseleave', startAutoplay);
  
  // Iniciar autoplay
  startAutoplay();
  
  // Limpiar interval al salir de la página
  window.addEventListener('beforeunload', stopAutoplay);
}
```

**Checklist Hero con Carousel**:
- [ ] Carousel con fade transition implementado
- [ ] Dots de navegación funcionales
- [ ] Auto-play cada 5 segundos
- [ ] Pausa en hover
- [ ] Overlay oscuro aplicado
- [ ] Título centrado en blanco
- [ ] Responsive (400px mobile, 500px tablet, 600px desktop)
- [ ] `npm run lint:js` ✅ PASS
- [ ] `npm run lint:css` ✅ PASS
- [ ] Validación visual en browser
- [ ] Responsive test (mobile/tablet/desktop)
- [ ] Console sin errores
- [ ] Animaciones CSS funcionando correctamente

---

#### 3.2.3 Cards Grid 3x2 (`blocks/cards/`)

**Archivos a modificar**:
- `blocks/cards/cards.css`
- `blocks/cards/cards.js` (validar variantes)

**Comportamiento esperado** (basado en https://www.caixabank.fr/home_es.html):
- Grid de 6 cards (3x2)
- Fondo blanco con sombra sutil
- Border-radius 8px
- Hover: Elevación (-8px) con sombra aumentada
- Imagen superior, título debajo
- Transition smooth 0.3s
- Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile

**Tareas CSS**:
```css
/* cards.css - Actualizaciones CaixaBank */

.cards {
  padding: var(--section-padding-vertical) var(--section-padding-horizontal);
  background-color: var(--background-color);
}

.cards > div {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

/* Grid de cards - Mobile First */
.cards ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr; /* 1 columna en móvil */
  gap: var(--grid-gap-md);
}

/* Tablet: 2 columnas */
@media (min-width: 768px) {
  .cards ul {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--grid-gap-lg);
  }
}

/* Desktop: 3 columnas */
@media (min-width: 1024px) {
  .cards ul {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap-lg);
  }
}

/* Estilo de cada card */
.cards li {
  background-color: var(--background-color);
  border: 1px solid var(--border-color-light);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-sm);
  overflow: hidden;
  transition: all var(--transition-base);
  cursor: pointer;
  
  /* Animación de entrada con delay escalonado */
  opacity: 0;
  animation: fadeSlideUp 0.6s ease-out forwards;
}

/* Delay escalonado para entrada de cards */
.cards li:nth-child(1) { animation-delay: 0.1s; }
.cards li:nth-child(2) { animation-delay: 0.2s; }
.cards li:nth-child(3) { animation-delay: 0.3s; }
.cards li:nth-child(4) { animation-delay: 0.4s; }
.cards li:nth-child(5) { animation-delay: 0.5s; }
.cards li:nth-child(6) { animation-delay: 0.6s; }

/* Hover effect - Elevación y sombra CSS */
.cards li:hover {
  transform: translateY(-8px);
  box-shadow: var(--box-shadow-lg);
  border-color: var(--border-color);
}

/* Imagen de la card */
.cards .cards-card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: var(--background-alt);
}

@media (min-width: 768px) {
  .cards .cards-card-image {
    height: 220px;
  }
}

@media (min-width: 1024px) {
  .cards .cards-card-image {
    height: 240px;
  }
}

.cards .cards-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

/* Zoom suave en hover de imagen */
.cards li:hover .cards-card-image img {
  transform: scale(1.05);
}

/* Contenido de la card */
.cards .cards-card-body {
  padding: var(--spacing-md);
}

.cards .cards-card-body h3 {
  color: var(--heading-color);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin: 0 0 var(--spacing-xs) 0;
  transition: color var(--transition-base);
}

.cards li:hover .cards-card-body h3 {
  color: var(--primary-color);
}

.cards .cards-card-body p {
  color: var(--text-color-light);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-base);
  margin: 0 0 var(--spacing-sm) 0;
}

/* Link/CTA dentro de cards (si aplica) */
.cards .cards-card-body .button-container {
  margin-top: var(--spacing-sm);
}

.cards .button-container a {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: transparent;
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-base);
}

.cards .button-container a:hover {
  background-color: var(--primary-color);
  color: var(--text-white);
}

/* Ocultar divs de configuración */
.cards .cards-config,
.cards .cards-cta-config {
  display: none;
}

/* Accesibilidad: Focus visible */
.cards li:focus-within {
  outline: 3px solid var(--focus-outline);
  outline-offset: 2px;
}

/* Animación al hacer scroll (opcional con Intersection Observer en JS) */
.cards li.animate-in {
  animation: fadeSlideUp 0.6s ease-out forwards;
}
```

**Tareas JavaScript** (validar y actualizar):
```javascript
/* cards.js - Validación */

import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    
    // Leer configuración (si aplica)
    const styleDiv = row.children[2];
    const styleParagraph = styleDiv?.querySelector('p');
    const cardStyle = styleParagraph?.textContent?.trim() || 'default';
    if (cardStyle && cardStyle !== 'default') {
      li.className = cardStyle;
    }
    
    // Leer CTA style (si aplica)
    const ctaDiv = row.children[3];
    const ctaParagraph = ctaDiv?.querySelector('p');
    const ctaStyle = ctaParagraph?.textContent?.trim() || 'default';
    
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    
    // Procesar hijos del li
    [...li.children].forEach((div, index) => {
      if (index === 0) {
        div.className = 'cards-card-image';
        
        // Optimizar imágenes
        const picture = div.querySelector('picture');
        if (picture) {
          const img = picture.querySelector('img');
          if (img && img.src) {
            const optimizedPicture = createOptimizedPicture(img.src, img.alt);
            picture.replaceWith(optimizedPicture);
          }
        }
      } else if (index === 1) {
        div.className = 'cards-card-body';
      } else if (index === 2) {
        div.className = 'cards-config';
      } else if (index === 3) {
        div.className = 'cards-cta-config';
      }
    });
    
    // Agregar link a toda la card (si no hay CTA específico)
    const cardLink = li.querySelector('a');
    if (cardLink) {
      li.style.cursor = 'pointer';
      li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
          cardLink.click();
        }
      });
    }
    
    ul.append(li);
  });
  
  block.textContent = '';
  block.append(ul);
  
  // Opcional: Intersection Observer para animación on scroll
  // (implementar solo si es necesario para performance)
}
```

**Checklist Cards**:
- [ ] Grid responsive (3x2 desktop, 2x3 tablet, 1x6 mobile)
- [ ] Colores CaixaBank aplicados
- [ ] Sombras sutiles (box-shadow-sm)
- [ ] Hover: translateY(-8px) + box-shadow-lg
- [ ] Zoom de imagen en hover (scale 1.05)
- [ ] Transiciones CSS suaves (0.3s)
- [ ] Animación de entrada con delay escalonado
- [ ] Border-radius 8px
- [ ] Imágenes optimizadas
- [ ] Links funcionales
- [ ] `npm run lint:js` ✅ PASS
- [ ] `npm run lint:css` ✅ PASS
- [ ] Validación visual en browser
- [ ] Responsive test (1, 2, 3 columnas)
- [ ] Console sin errores
- [ ] Accesibilidad (focus visible)

---

#### 3.2.4 Footer (`blocks/footer/`)

**Archivos a modificar**:
- `blocks/footer/footer.css`
- `blocks/footer/footer.js` (si es necesario)

**Tareas**:
```css
/* footer.css - Actualizaciones */

footer {
  background-color: var(--background-alt); /* Actualizar según spec */
  color: var(--text-color-light); /* Actualizar según spec */
  padding: var(--spacing-lg) var(--spacing-md);
}

footer a {
  color: var(--text-color); /* Actualizar según spec */
  transition: var(--transition);
}

footer a:hover {
  color: var(--primary-color); /* Actualizar según spec */
}

/* Social icons */
footer .social-icons a {
  /* Estilos según spec */
}
```

**Checklist Footer**:
- [ ] Colores de fondo actualizados
- [ ] Enlaces con estilos correctos
- [ ] Layout responsive (columnas en desktop, apilado en móvil)
- [ ] Iconos sociales (si aplica)
- [ ] `npm run lint:css` ✅ PASS
- [ ] Validación visual en browser
- [ ] Responsive test
- [ ] Console sin errores

---

### 3.3 Capa 3: Implementación de Componentes Nuevos ✅ DEFINIDOS

#### 3.3.1 Country Flags (`blocks/country-flags/`)

**Justificación**: Sección "Otras Sucursales Internacionales" con 5 banderas circulares de países.

**Archivos a crear**:
- `blocks/country-flags/country-flags.js`
- `blocks/country-flags/country-flags.css`
- `blocks/country-flags/_country-flags.json`

**Estructura HTML esperada**:
```html
<div class="country-flags">
  <div>
    <div><h2>Otras Sucursales Internacionales</h2></div>
  </div>
  <div>
    <div>
      <picture><img src="/icons/flag-de.svg" alt="Alemania"/></picture>
      <p><a href="/de">Alemania</a></p>
    </div>
    <div>
      <picture><img src="/icons/flag-ma.svg" alt="Marruecos"/></picture>
      <p><a href="/ma">Marruecos</a></p>
    </div>
    <div>
      <picture><img src="/icons/flag-gb.svg" alt="Reino Unido"/></picture>
      <p><a href="/gb">Reino Unido</a></p>
    </div>
    <div>
      <picture><img src="/icons/flag-pl.svg" alt="Polonia"/></picture>
      <p><a href="/pl">Polonia</a></p>
    </div>
    <div>
      <picture><img src="/icons/flag-it.svg" alt="Italia"/></picture>
      <p><a href="/it">Italia</a></p>
    </div>
  </div>
</div>
```

**Implementación JavaScript**:
```javascript
/* blocks/country-flags/country-flags.js */

export default function decorate(block) {
  // Obtener el título
  const titleDiv = block.querySelector(':scope > div:first-child');
  const title = titleDiv?.querySelector('h2');
  
  // Obtener el contenedor de banderas
  const flagsContainer = block.querySelector(':scope > div:nth-child(2)');
  
  if (!flagsContainer) return;
  
  // Crear estructura
  const wrapper = document.createElement('div');
  wrapper.className = 'country-flags-wrapper';
  
  // Mover título
  if (title) {
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'country-flags-title';
    titleWrapper.appendChild(title);
    wrapper.appendChild(titleWrapper);
  }
  
  // Crear grid de banderas
  const grid = document.createElement('div');
  grid.className = 'country-flags-grid';
  
  const flags = [...flagsContainer.children];
  flags.forEach((flag, index) => {
    const flagItem = document.createElement('div');
    flagItem.className = 'country-flag-item';
    
    // Animación escalonada
    flagItem.style.animationDelay = `${index * 0.1}s`;
    
    const picture = flag.querySelector('picture');
    const link = flag.querySelector('a');
    const text = link?.textContent || '';
    
    if (picture && link) {
      // Envolver imagen en link
      const flagLink = document.createElement('a');
      flagLink.href = link.href;
      flagLink.className = 'country-flag-link';
      flagLink.setAttribute('aria-label', `Visitar sucursal de ${text}`);
      
      const flagCircle = document.createElement('div');
      flagCircle.className = 'country-flag-circle';
      flagCircle.appendChild(picture);
      
      flagLink.appendChild(flagCircle);
      flagItem.appendChild(flagLink);
      
      // Nombre del país
      const countryName = document.createElement('p');
      countryName.className = 'country-name';
      countryName.textContent = text;
      flagItem.appendChild(countryName);
    }
    
    grid.appendChild(flagItem);
  });
  
  wrapper.appendChild(grid);
  
  // Reemplazar contenido del bloque
  block.textContent = '';
  block.appendChild(wrapper);
}
```

**Estilos CSS** (con animaciones CSS):
```css
/* blocks/country-flags/country-flags.css */

.country-flags {
  padding: var(--section-padding-vertical) var(--section-padding-horizontal);
  background-color: var(--background-alt); /* #F8F8F8 */
  text-align: center;
}

.country-flags-wrapper {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

/* Título */
.country-flags-title h2 {
  color: var(--heading-color);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  margin: 0 0 var(--spacing-xl) 0;
  animation: fadeSlideUp 0.6s ease-out;
}

/* Grid de banderas - Mobile First */
.country-flags-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas en móvil */
  gap: var(--spacing-lg);
  justify-items: center;
}

/* Tablet: 3 columnas */
@media (min-width: 768px) {
  .country-flags-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop: 5 columnas */
@media (min-width: 1024px) {
  .country-flags-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: var(--spacing-xl);
  }
}

/* Item individual */
.country-flag-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  opacity: 0;
  animation: fadeSlideUp 0.6s ease-out forwards;
}

/* Link de la bandera */
.country-flag-link {
  display: block;
  text-decoration: none;
  transition: transform var(--transition-base);
}

.country-flag-link:hover {
  transform: scale(1.1);
}

.country-flag-link:focus {
  outline: 3px solid var(--focus-outline);
  outline-offset: 4px;
  border-radius: var(--border-radius-full);
}

/* Círculo de la bandera */
.country-flag-circle {
  width: 100px;
  height: 100px;
  border-radius: var(--border-radius-full);
  overflow: hidden;
  border: 3px solid var(--border-color);
  box-shadow: var(--box-shadow-sm);
  transition: all var(--transition-base);
}

@media (min-width: 768px) {
  .country-flag-circle {
    width: 120px;
    height: 120px;
  }
}

@media (min-width: 1024px) {
  .country-flag-circle {
    width: 140px;
    height: 140px;
  }
}

.country-flag-link:hover .country-flag-circle {
  border-color: var(--primary-color);
  box-shadow: var(--box-shadow-md);
  animation: flagPulse 0.6s ease-in-out;
}

/* Imagen dentro del círculo */
.country-flag-circle picture,
.country-flag-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Nombre del país */
.country-name {
  color: var(--text-color);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  margin: 0;
  transition: color var(--transition-base);
}

.country-flag-link:hover + .country-name,
.country-flag-link:focus + .country-name {
  color: var(--primary-color);
}

/* Animación específica para banderas */
@keyframes flagPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

**Modelo JSON**:
```json
{
  "id": "country-flags",
  "fields": [
    {
      "component": "text",
      "name": "title",
      "label": "Section Title",
      "value": "Otras Sucursales Internacionales"
    },
    {
      "component": "multiselect",
      "name": "countries",
      "label": "Countries",
      "options": [
        {"value": "de", "text": "Alemania"},
        {"value": "ma", "text": "Marruecos"},
        {"value": "gb", "text": "Reino Unido"},
        {"value": "pl", "text": "Polonia"},
        {"value": "it", "text": "Italia"}
      ]
    }
  ]
}
```

**Checklist Country Flags**:
- [ ] Estructura HTML definida con 5 banderas
- [ ] Función `decorate()` implementada
- [ ] Grid responsive (2-3-5 columnas)
- [ ] Círculos con border-radius: 50%
- [ ] Hover: scale(1.1) con CSS
- [ ] Animación flagPulse en hover
- [ ] Animación de entrada escalonada
- [ ] Links funcionales a otras sucursales
- [ ] Accesibilidad (aria-labels, focus)
- [ ] Modelo JSON creado
- [ ] `npm run lint:js` ✅ PASS
- [ ] `npm run lint:css` ✅ PASS
- [ ] `npm run build:json` ✅ PASS
- [ ] Validación visual en browser
- [ ] Responsive test (mobile/tablet/desktop)
- [ ] Console sin errores

---

#### 3.3.2 Info Text (`blocks/info-text/`)

**Justificación**: Bloque de texto informativo con emails de contacto.

**Archivos a crear**:
- `blocks/info-text/info-text.js`
- `blocks/info-text/info-text.css`
- `blocks/info-text/_info-text.json`

**Estructura HTML esperada**:
```html
<div class="info-text">
  <div>
    <p>
      Por favor, tenga en cuenta que CaixaBank, S.A. Sucursal en Francia...
      <br>Correos electrónicos de contacto:
      <br>• Denuncias: <a href="mailto:canaldenuncias.internal@caixabank.com">canaldenuncias.internal@caixabank.com</a>
      <br>• Protección de datos: <a href="mailto:proteccion.de.datos.Francia@caixabank.com">proteccion.de.datos.Francia@caixabank.com</a>
      <br>• Prevención de blanqueo: <a href="mailto:SUCURSALFRANCIAREPREVENCIONBCDFT@caixabank.com">SUCURSALFRANCIAREPREVENCIONBCDFT@caixabank.com</a>
    </p>
  </div>
</div>
```

**Implementación JavaScript**:
```javascript
/* blocks/info-text/info-text.js */

export default function decorate(block) {
  // El bloque viene con contenido simple, solo aplicar clases
  const paragraph = block.querySelector('p');
  
  if (paragraph) {
    paragraph.className = 'info-text-content';
    
    // Convertir emails en enlaces si no lo son
    const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    
    paragraph.innerHTML = paragraph.innerHTML.replace(
      emailPattern,
      (match) => {
        // Si ya es un link, no hacer nada
        if (paragraph.innerHTML.includes(`href="mailto:${match}"`)) {
          return match;
        }
        return `<a href="mailto:${match}">${match}</a>`;
      }
    );
  }
  
  // Envolver en contenedor
  const wrapper = document.createElement('div');
  wrapper.className = 'info-text-wrapper';
  
  while (block.firstChild) {
    wrapper.appendChild(block.firstChild);
  }
  
  block.appendChild(wrapper);
}
```

**Estilos CSS**:
```css
/* blocks/info-text/info-text.css */

.info-text {
  padding: var(--section-padding-vertical) var(--section-padding-horizontal);
  background-color: var(--background-color);
}

.info-text-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.info-text-content {
  color: var(--text-color);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin: 0;
  text-align: left;
}

@media (min-width: 768px) {
  .info-text-content {
    font-size: var(--font-size-base);
  }
}

/* Enlaces de email */
.info-text-content a {
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);
  font-weight: var(--font-weight-medium);
}

.info-text-content a:hover {
  border-bottom-color: var(--primary-color);
}

.info-text-content a:focus {
  outline: 2px solid var(--focus-outline);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Bullets de lista */
.info-text-content br + • {
  color: var(--text-color-light);
}
```

**Modelo JSON**:
```json
{
  "id": "info-text",
  "fields": [
    {
      "component": "richtext",
      "name": "content",
      "label": "Information Text",
      "multiLine": true
    }
  ]
}
```

**Checklist Info Text**:
- [ ] Estructura HTML definida
- [ ] Función `decorate()` implementada
- [ ] Max-width 1200px centrado
- [ ] Emails convertidos en enlaces
- [ ] Enlaces con hover underline
- [ ] Tipografía legible (14-18px)
- [ ] Line-height: 1.8 para legibilidad
- [ ] Responsive ajustado
- [ ] Modelo JSON creado
- [ ] `npm run lint:js` ✅ PASS
- [ ] `npm run lint:css` ✅ PASS
- [ ] `npm run build:json` ✅ PASS
- [ ] Validación visual en browser
- [ ] Enlaces de email funcionales
- [ ] Console sin errores

---

## 🔍 Fase 4: Testing y Validación

### 4.1 Checklist General de Verificación

Según `.github/copilot/00-READ-FIRST.md`:

#### Linting
```bash
npm run lint:js   # ESLint para JavaScript
npm run lint:css  # Stylelint para CSS
```
- [ ] Sin errores ESLint en todos los archivos `.js`
- [ ] Sin errores Stylelint en todos los archivos `.css`

#### Build
```bash
npm run build:json
```
- [ ] Build completa sin errores
- [ ] Archivos JSON generados correctamente en root

#### Visual Validation (MANDATORY)
- [ ] Página abierta en servidor local (Live Server / `aem up`)
- [ ] Todos los bloques se decoran correctamente
- [ ] Diseño responsive funciona en:
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768px - 1023px)
  - [ ] Desktop (>= 1024px)
- [ ] Console del navegador sin errores
- [ ] Interacciones funcionan correctamente (clicks, hovers, animaciones)

#### Content Fragment Validation (si aplica)
- [ ] Content Fragments se muestran correctamente
- [ ] NO hay llamadas GraphQL en bloques (contenido viene pre-renderizado)
- [ ] Universal Editor funciona en modo edición

#### Cross-browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (si es posible)

---

### 4.2 Testing Manual por Componente

| Componente | Visual ✓ | Responsive ✓ | Interactions ✓ | Console ✓ | Notas |
|------------|----------|--------------|----------------|-----------|-------|
| Header | [ ] | [ ] | [ ] | [ ] | |
| Hero | [ ] | [ ] | [ ] | [ ] | |
| Cards | [ ] | [ ] | [ ] | [ ] | |
| Footer | [ ] | [ ] | [ ] | [ ] | |
| [Nuevo 1] | [ ] | [ ] | [ ] | [ ] | |
| [Nuevo 2] | [ ] | [ ] | [ ] | [ ] | |

---

### 4.3 Testing E2E (Recomendado)

Según `.github/copilot/03-testing.md`:

```javascript
// test/e2e/home.test.js
const puppeteer = require('puppeteer');

describe('Home Page Components', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Header should be visible', async () => {
    const header = await page.$('header');
    expect(header).not.toBeNull();
  });

  test('Hero block should be decorated', async () => {
    const hero = await page.$('.hero');
    expect(hero).not.toBeNull();
    
    const hasClass = await page.evaluate(() => {
      const heroEl = document.querySelector('.hero');
      return heroEl.classList.contains('overlay') || 
             heroEl.classList.contains('centered') ||
             heroEl.classList.contains('split');
    });
    expect(hasClass).toBe(true);
  });

  test('Cards should render in grid', async () => {
    const cards = await page.$$('.cards li');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('Footer should be visible', async () => {
    const footer = await page.$('footer');
    expect(footer).not.toBeNull();
  });
});
```

---

## 📋 Fase 5: Orden de Implementación Propuesto

### Sprint 1: Base y Componentes Existentes (Estimado: 2-3 días) ✅ DETALLADO

#### Día 1: Fundación CSS y Header

**Tarea 1.1: Variables Globales CSS** (`styles/styles.css`)  
*Duración estimada: 2-3 horas*
- [ ] Agregar paleta de colores CaixaBank (azul #0073C8, etc.)
- [ ] Definir tipografía (Roboto, Roboto Condensed)
- [ ] Establecer espaciado mobile-first
- [ ] Agregar keyframes de animaciones CSS
- [ ] Configurar breakpoints (768px, 1024px, 1440px)
- [ ] Testing: `npm run lint:css` ✅
- [ ] Validación: Variables aplicadas correctamente

**Tarea 1.2: Header** (`blocks/header/`)  
*Duración estimada: 3-4 horas*
- [ ] Actualizar `header.css` con colores CaixaBank
- [ ] Logo CaixaBank ONE (izquierda)
- [ ] Navegación 5 items horizontales
- [ ] Botón CTA "Acceso a clientes ONE" (azul)
- [ ] Selector de idioma (ES) arriba derecha
- [ ] Menú hamburguesa responsive (<768px)
- [ ] Hover effects con transitions CSS
- [ ] Testing: `npm run lint:js && npm run lint:css` ✅
- [ ] Validación: Header responsive funcional

#### Día 2: Hero Carousel y Cards

**Tarea 2.1: Hero con Carousel** (`blocks/hero/`)  
*Duración estimada: 4-5 horas*
- [ ] Implementar carousel en `hero.js` (auto-play 5s)
- [ ] Fade transitions CSS entre slides
- [ ] Dots de navegación en parte inferior
- [ ] Overlay oscuro rgba(0,0,0,0.4)
- [ ] Título centrado blanco grande
- [ ] Altura responsive (400px móvil, 600px desktop)
- [ ] Pausa en hover
- [ ] Animaciones CSS (fadeSlideUp para título)
- [ ] Testing: `npm run lint:js && npm run lint:css` ✅
- [ ] Validación: Carousel funcional en todos los dispositivos

**Tarea 2.2: Cards Grid 3x2** (`blocks/cards/`)  
*Duración estimada: 3-4 horas*
- [ ] Grid responsive CSS (1-2-3 columnas)
- [ ] 6 cards con imágenes y títulos
- [ ] Hover: translateY(-8px) + box-shadow-lg (CSS)
- [ ] Zoom de imagen en hover (scale 1.05)
- [ ] Border-radius 8px, sombra sutil
- [ ] Animación de entrada escalonada (animation-delay)
- [ ] Color hover del título (azul CaixaBank)
- [ ] Testing: `npm run lint:js && npm run lint:css` ✅
- [ ] Validación: Grid responsive con 6 cards

#### Día 3: Footer y Validación Sprint 1

**Tarea 3.1: Footer** (`blocks/footer/`)  
*Duración estimada: 2-3 horas*
- [ ] Fondo gris claro #F5F5F5
- [ ] Logo CaixaBank en parte superior
- [ ] Enlaces azul CaixaBank con hover
- [ ] Iconos de certificaciones (CNMV, Banco de España)
- [ ] Multi-columna desktop, apilado móvil
- [ ] Copyright "© CaixaBank, SA 2025"
- [ ] Testing: `npm run lint:css` ✅
- [ ] Validación: Footer responsive

**Tarea 3.2: Validación Integrada Sprint 1**  
*Duración estimada: 1-2 horas*
- [ ] Página de prueba con Header + Hero + Cards + Footer
- [ ] Testing cross-browser (Chrome, Firefox, Safari)
- [ ] Testing responsive (375px, 768px, 1024px, 1440px)
- [ ] Console sin errores JavaScript
- [ ] Performance: Lighthouse score > 90
- [ ] Animaciones CSS fluidas sin jank
- [ ] Screenshots comparativos con https://www.caixabank.fr

**Deliverable Sprint 1**: Componentes existentes actualizados con estilos CaixaBank y animaciones CSS funcionales.

---

### Sprint 2: Componentes Nuevos (Estimado: 1-2 días) ✅ DETALLADO

#### Día 1: Country Flags

**Tarea 2.1: Country Flags** (`blocks/country-flags/`)  
*Duración estimada: 4-5 horas*

**Subtareas**:
- [ ] Crear estructura de archivos:
  - `blocks/country-flags/country-flags.js`
  - `blocks/country-flags/country-flags.css`
  - `blocks/country-flags/_country-flags.json`

- [ ] Implementar JavaScript:
  - [ ] Función `decorate()` para transformar HTML
  - [ ] Crear grid de 5 banderas
  - [ ] Banderas circulares (border-radius: 50%)
  - [ ] Links a otras sucursales
  - [ ] Animación escalonada (animation-delay)

- [ ] Implementar CSS (animaciones CSS):
  - [ ] Grid responsive (2-3-5 columnas mobile-tablet-desktop)
  - [ ] Círculos 100px-120px-140px según breakpoint
  - [ ] Hover: scale(1.1) con transition
  - [ ] Animación flagPulse en hover
  - [ ] Animación fadeSlideUp en entrada
  - [ ] Fondo gris claro #F8F8F8

- [ ] Crear iconos SVG de banderas:
  - [ ] `icons/flag-de.svg` (Alemania)
  - [ ] `icons/flag-ma.svg` (Marruecos)
  - [ ] `icons/flag-gb.svg` (Reino Unido)
  - [ ] `icons/flag-pl.svg` (Polonia)
  - [ ] `icons/flag-it.svg` (Italia)

- [ ] Modelo JSON para Universal Editor

- [ ] Testing:
  - [ ] `npm run lint:js && npm run lint:css` ✅
  - [ ] `npm run build:json` ✅
  - [ ] Validación visual en browser
  - [ ] Hover effects funcionando
  - [ ] Links funcionales
  - [ ] Responsive test (2-3-5 columnas)
  - [ ] Accesibilidad (aria-labels, focus visible)

#### Día 2: Info Text y Validación Sprint 2

**Tarea 2.2: Info Text** (`blocks/info-text/`)  
*Duración estimada: 2-3 horas*

**Subtareas**:
- [ ] Crear estructura de archivos:
  - `blocks/info-text/info-text.js`
  - `blocks/info-text/info-text.css`
  - `blocks/info-text/_info-text.json`

- [ ] Implementar JavaScript:
  - [ ] Función `decorate()` simple
  - [ ] Convertir emails en enlaces (regex)
  - [ ] Aplicar clases CSS

- [ ] Implementar CSS:
  - [ ] Max-width 1200px centrado
  - [ ] Tipografía legible (14-18px)
  - [ ] Line-height 1.8 para legibilidad
  - [ ] Enlaces azul CaixaBank
  - [ ] Hover: border-bottom underline
  - [ ] Responsive ajustado

- [ ] Contenido:
  - [ ] Texto informativo de la sucursal
  - [ ] 3 emails de contacto clickeables:
    - canaldenuncias.internal@caixabank.com
    - proteccion.de.datos.Francia@caixabank.com
    - SUCURSALFRANCIAREPREVENCIONBCDFT@caixabank.com

- [ ] Testing:
  - [ ] `npm run lint:js && npm run lint:css` ✅
  - [ ] `npm run build:json` ✅
  - [ ] Enlaces de email funcionales (mailto:)
  - [ ] Validación visual
  - [ ] Responsive test

**Tarea 2.3: Validación Integrada Sprint 2**  
*Duración estimada: 1-2 horas*
- [ ] Página completa con todos los componentes:
  - Header + Hero Carousel + Cards + Country Flags + Info Text + Footer
- [ ] Testing integración entre componentes
- [ ] Espaciado vertical correcto entre secciones
- [ ] Animaciones CSS fluidas al hacer scroll
- [ ] Performance: Lighthouse score > 90
- [ ] Console sin errores
- [ ] Screenshots comparativos con https://www.caixabank.fr

**Deliverable Sprint 2**: Componentes nuevos (Country Flags, Info Text) implementados con animaciones CSS y funcionales.

---

### Sprint 3: Integración, Testing y Optimización (Estimado: 1-2 días) ✅ DETALLADO

#### Día 1: Integración y Testing Exhaustivo

**Tarea 3.1: Integración Completa**  
*Duración estimada: 2-3 horas*
- [ ] Crear página demo completa con todos los componentes
- [ ] Estructura final HTML:
  ```
  Header
  Hero Carousel (3 slides)
  Cards Grid (6 cards en 3x2)
  Country Flags (5 países)
  Info Text (texto + emails)
  Footer
  ```
- [ ] Validar espaciado vertical entre secciones
- [ ] Verificar consistencia de colores CaixaBank
- [ ] Asegurar transitions CSS suaves
- [ ] Probar navegación entre secciones

**Tarea 3.2: Testing Cross-Browser**  
*Duración estimada: 2 horas*
- [ ] **Chrome/Edge** (Chromium):
  - Animaciones CSS funcionando
  - Carousel auto-play correcto
  - Hover effects responsive
- [ ] **Firefox**:
  - Compatibilidad CSS Grid
  - Animations sin glitches
- [ ] **Safari** (si es posible):
  - Webkit prefixes correctos
  - Performance smooth
- [ ] **Móvil** (DevTools + dispositivos reales):
  - Touch interactions
  - Responsive breakpoints
  - Performance en móvil

**Tarea 3.3: Testing Responsive Detallado**  
*Duración estimada: 1-2 horas*
- [ ] **375px (Mobile pequeño)**:
  - Header: Hamburguesa funcional
  - Hero: 400px altura, título legible
  - Cards: 1 columna, sin overflow
  - Country Flags: 2 columnas
  - Info Text: Texto legible 14px
  
- [ ] **768px (Tablet)**:
  - Header: Nav horizontal
  - Hero: 500px altura
  - Cards: 2 columnas
  - Country Flags: 3 columnas
  
- [ ] **1024px (Desktop)**:
  - Hero: 600px altura
  - Cards: 3 columnas (grid 3x2)
  - Country Flags: 5 columnas horizontal
  
- [ ] **1440px+ (Large Desktop)**:
  - Todo centrado max-width 1200px
  - Tipografía aumentada
  - Espaciado generoso

**Tarea 3.4: Testing de Animaciones CSS**  
*Duración estimada: 1 hora*
- [ ] Hero carousel: Fade transition suave (0.8s)
- [ ] Hero título: fadeSlideUp en cambio de slide
- [ ] Cards: Entrada escalonada (delay 0.1-0.6s)
- [ ] Cards hover: translateY(-8px) smooth
- [ ] Imagen cards hover: scale(1.05) suave
- [ ] Country Flags: fadeSlideUp escalonado
- [ ] Flags hover: scale(1.1) + flagPulse
- [ ] Sin jank ni frame drops (60fps)
- [ ] Pausa de animaciones respetada en hover

#### Día 2: Optimización y Validación Final

**Tarea 3.5: Optimización de Performance**  
*Duración estimada: 2-3 horas*
- [ ] **Lighthouse Audit**:
  - Performance: > 90
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 90
  
- [ ] **Optimización de imágenes**:
  - Usar `createOptimizedPicture()` en cards
  - WebP para navegadores modernos
  - Lazy loading para imágenes below-the-fold
  
- [ ] **CSS Optimization**:
  - Eliminar CSS no usado
  - Combinar media queries
  - Minificar en producción
  
- [ ] **JavaScript Optimization**:
  - Code splitting si es necesario
  - Async/defer para scripts no críticos
  - Minimizar DOM manipulations

**Tarea 3.6: Accesibilidad (WCAG AA)**  
*Duración estimada: 1-2 horas*
- [ ] **Contraste de colores**:
  - Texto sobre fondo: ratio 4.5:1 mínimo
  - Botones CTA: contraste adecuado
  
- [ ] **Navegación por teclado**:
  - Tab order lógico
  - Focus visible en todos los elementos interactivos
  - Skip links si es necesario
  
- [ ] **ARIA labels**:
  - Carousel dots con aria-label
  - Country flags con aria-label descriptivo
  - Header nav con aria-current
  
- [ ] **Semántica HTML**:
  - Headings en orden correcto (H1 > H2 > H3)
  - Landmarks apropiados (header, main, footer, nav)
  - Alt text descriptivo en imágenes

**Tarea 3.7: Validación Final del Proyecto**  
*Duración estimada: 1-2 horas*
- [ ] **Checklist completo**:
  - ✅ Todos los linting checks pasados
  - ✅ Build sin errores
  - ✅ Validación visual vs. https://www.caixabank.fr
  - ✅ Responsive en 4 breakpoints
  - ✅ Cross-browser testeado
  - ✅ Console sin errores
  - ✅ Animaciones CSS fluidas
  - ✅ Performance optimizado
  - ✅ Accesibilidad WCAG AA
  
- [ ] **Documentación**:
  - Crear página demo con todos los componentes
  - Screenshots comparativos (spec vs. implementado)
  - Notas de implementación (decisiones técnicas)
  - Guía de colores y tipografía usada
  
- [ ] **Entrega**:
  - Commit final con mensaje descriptivo
  - Tag de versión (v1.0.0)
  - README actualizado con instrucciones
  - Demo URL funcionando

**Deliverable Sprint 3**: Implementación completa de CaixaBank Francia, testeada, optimizada y lista para producción con todas las animaciones CSS funcionando correctamente.

---

## 🚨 Reglas Críticas del Proyecto

Según `.github/copilot/00-READ-FIRST.md`:

### ❌ PROHIBIDO

1. **Documentar código sin testear**
   - NO crear documentación extensa antes de ejecutar el código
   - NO escribir guías sin validación visual en browser
   
2. **Olvidar verificación**
   - NO marcar tareas como completas sin pasar ESLint
   - NO considerar listo sin validación visual en browser
   - NO hacer commit sin testing responsive
   
3. **Usar GraphQL en bloques**
   - Content Fragments vienen pre-renderizados desde AEM
   - NO hacer fetch de GraphQL en `decorate()` functions
   
4. **Side effects globales**
   - Bloques solo modifican su propio DOM
   - NO modificar elementos fuera del `block` recibido

### ✅ OBLIGATORIO

1. **Test-Driven Documentation**
   - Implementar → Ejecutar → Validar → Documentar
   
2. **Verification Checklist**
   - ESLint ✅
   - Visual validation ✅
   - Responsive test ✅
   - Console clean ✅
   
3. **Patrón de bloques decoradores**
   - `export default function decorate(block) {}`
   - Leer configuración del DOM
   - Aplicar clases y estilos
   - Ocultar divs de configuración
   
4. **Utilidades core**
   - Reusar funciones de `scripts/aem.js`
   - `getMetadata()`, `decorateButtons()`, `loadFragment()`, etc.
   
5. **Responsive design**
   - Mobile-first approach
   - Media queries en 768px, 1024px

---

## 📚 Referencias del Proyecto

### Documentación Interna
- `.github/copilot/00-READ-FIRST.md` - Reglas críticas
- `.github/copilot/01-tech-stack.md` - Stack técnico
- `.github/copilot/02-code-patterns.md` - Templates de código
- `.github/copilot/03-testing.md` - Estrategia de testing

### Utilidades Core
- `scripts/aem.js` - Funciones helper
- `scripts/scripts.js` - `isAuthorEnvironment()`
- `scripts/utils.js` - Helpers generales

### Componentes de Referencia
- `blocks/hero/` - Bloque con configuración
- `blocks/cards/` - Bloque con grid
- `blocks/content-fragment/` - CF nativo (NO GraphQL)
- `blocks/header/` - Navegación responsive
- `blocks/footer/` - Footer con fragments

---

## 🎯 Próximos Pasos Inmediatos - LISTO PARA IMPLEMENTAR ✅

### ✅ Análisis Completado

El plan está **100% completo** y listo para ejecutar. Todos los componentes han sido analizados basándose en:
- Referencia funcional: https://www.caixabank.fr/home_es.html
- Especificación visual proporcionada
- Reglas del proyecto en `.github/copilot/`

### 🚀 Iniciar Implementación AHORA

#### Comando de Inicio (Validar entorno)
```powershell
# 1. Verificar dependencias
npm install

# 2. Ejecutar linting inicial
npm run lint:js
npm run lint:css

# 3. Iniciar servidor local (en terminal separada)
# Opción 1: AEM CLI (si está instalado)
aem up

# Opción 2: Live Server (VSCode extension)
# O usar http-server: npx http-server -p 3000
```

#### Sprint 1 - Iniciar AHORA (Día 1)

**Paso 1: Variables Globales CSS** (2-3 horas)
```powershell
# Abrir archivo para editar
code styles/styles.css

# Tarea: Agregar todas las variables definidas en Fase 3.1
# Incluye: colores, tipografía, espaciado, keyframes animaciones
```

**Checklist Paso 1**:
- [ ] Copiar variables CSS del plan (sección 3.1) a `styles/styles.css`
- [ ] Ejecutar: `npm run lint:css`
- [ ] Abrir página demo en browser
- [ ] Verificar que variables se aplican

**Paso 2: Header** (3-4 horas)
```powershell
# Abrir archivos para editar
code blocks/header/header.css
code blocks/header/header.js  # Si necesitas ajustes JS

# Tarea: Actualizar colores y estilos según sección 3.2.1
```

**Checklist Paso 2**:
- [ ] Actualizar `header.css` con colores CaixaBank
- [ ] Logo CaixaBank visible
- [ ] 5 items de navegación
- [ ] Botón CTA azul
- [ ] Menú hamburguesa responsive
- [ ] Ejecutar: `npm run lint:css`
- [ ] Validar en browser (desktop + mobile)

**Continuar con Sprint 1 siguiendo el plan...**

---

### 📋 Checklist Rápido de Inicio

**Antes de codificar**:
- [ ] ✅ Plan leído completamente
- [ ] ✅ Entorno Node.js instalado
- [ ] ✅ Dependencias instaladas (`npm install`)
- [ ] ✅ Servidor local listo (Live Server / aem up)
- [ ] ✅ Browser DevTools abierto
- [ ] ✅ `.github/copilot/00-READ-FIRST.md` revisado

**Durante implementación** (repetir por cada componente):
- [ ] Codificar cambios
- [ ] Ejecutar `npm run lint:js && npm run lint:css`
- [ ] Abrir en browser y validar visualmente
- [ ] Probar responsive (DevTools)
- [ ] Verificar console sin errores
- [ ] Commit con mensaje descriptivo

**Después de cada Sprint**:
- [ ] Testing cross-browser
- [ ] Testing responsive completo
- [ ] Performance audit (Lighthouse)
- [ ] Screenshots comparativos
- [ ] Checklist del Sprint completo ✅

---

### 🎨 Assets Necesarios (Preparar antes)

**Imágenes**:
- Logo CaixaBank ONE (SVG o PNG)
- Imágenes para Hero carousel (3 slides)
- Imágenes para Cards (6 imágenes)
- Iconos de certificaciones para Footer

**Iconos SVG** (banderas para Country Flags):
- `icons/flag-de.svg` (Alemania)
- `icons/flag-ma.svg` (Marruecos)
- `icons/flag-gb.svg` (Reino Unido)
- `icons/flag-pl.svg` (Polonia)
- `icons/flag-it.svg` (Italia)

**Fuentes**:
- Roboto (Regular, Medium, Bold)
- Roboto Condensed (Bold)

> **Nota**: Si las fuentes o imágenes no están disponibles, usa placeholders durante desarrollo.

---

### 🔥 Estimación Total del Proyecto

| Sprint | Duración | Componentes |
|--------|----------|-------------|
| **Sprint 1** | 2-3 días | Variables CSS, Header, Hero Carousel, Cards, Footer |
| **Sprint 2** | 1-2 días | Country Flags, Info Text |
| **Sprint 3** | 1-2 días | Integración, Testing, Optimización |
| **TOTAL** | **4-7 días** | Proyecto completo listo para producción |

---

### 📞 Soporte durante Implementación

**Si encuentras bloqueadores**:
1. Revisar documentación `.github/copilot/00-READ-FIRST.md`
2. Buscar patrones similares en bloques existentes
3. Consultar plan detallado (este documento)
4. Validar con `npm run lint:js && npm run lint:css`

**Recuerda**:
- ✅ Mobile-first siempre
- ✅ Animaciones en CSS cuando sea posible
- ✅ NO usar Content Fragments (no aplica en este proyecto)
- ✅ Validación visual es OBLIGATORIA
- ✅ Testing responsive después de cada componente

---

## 🎉 ¡Estás listo para implementar!

El plan está **100% completo** con:
- ✅ Todos los componentes analizados
- ✅ Colores y tipografía definidos
- ✅ Estructura HTML detallada
- ✅ CSS con animaciones especificado
- ✅ JavaScript implementado
- ✅ Responsive breakpoints claros
- ✅ Checklist de validación por componente
- ✅ Testing strategy completo

**Siguiente acción**: Abrir terminal y ejecutar `npm install && npm run lint:js`

**Luego**: Iniciar Sprint 1, Paso 1 (Variables CSS) ⚡

---

## 📝 Notas de Implementación

### Consideraciones Técnicas

1. **Content Fragments**: Si la especificación incluye Content Fragments, recordar que:
   - NO se usa GraphQL en bloques
   - El contenido viene pre-renderizado desde AEM
   - Solo decorar el HTML existente

2. **Universal Editor**: Si se necesita integración:
   - Agregar atributos `data-aue-*` en bloques
   - Usar `isAuthorEnvironment()` para lógica condicional

3. **Performance**:
   - Lazy loading para imágenes
   - `delayed.js` para bloques below-the-fold
   - Optimizar imágenes con `createOptimizedPicture()`

4. **Accesibilidad**:
   - Semántica HTML correcta
   - Atributos ARIA donde sea necesario
   - Contraste de colores WCAG AA (mínimo)
   - Navegación por teclado funcional

---

## ✅ Checklist Final del Proyecto CaixaBank Francia

Antes de considerar el proyecto **COMPLETO**:

### 📋 Componentes Implementados

- [ ] **Header**:
  - Logo CaixaBank ONE visible
  - 5 items de navegación funcionales
  - Selector de idioma (ES)
  - Botón CTA "Acceso clientes ONE" azul
  - Menú hamburguesa responsive (<768px)
  - Colores azul CaixaBank (#0073C8)
  
- [ ] **Hero Carousel**:
  - 3 slides con fade transition CSS
  - Auto-play cada 5 segundos
  - Dots de navegación funcionales
  - Overlay oscuro rgba(0,0,0,0.4)
  - Título grande blanco centrado
  - Pausa en hover
  - Altura responsive (400-500-600px)
  
- [ ] **Cards Grid 3x2**:
  - 6 cards con imágenes y títulos
  - Grid responsive (1-2-3 columnas)
  - Hover: translateY(-8px) con CSS
  - Zoom de imagen en hover (scale 1.05)
  - Sombra sutil y border-radius 8px
  - Animación de entrada escalonada
  - Colores CaixaBank
  
- [ ] **Country Flags**:
  - 5 banderas circulares (Alemania, Marruecos, UK, Polonia, Italia)
  - Grid responsive (2-3-5 columnas)
  - Hover: scale(1.1) con animación CSS
  - Links funcionales a otras sucursales
  - Fondo gris claro #F8F8F8
  
- [ ] **Info Text**:
  - Texto informativo centrado
  - Max-width 1200px
  - 3 emails clickeables (mailto:)
  - Enlaces azul CaixaBank con hover
  
- [ ] **Footer**:
  - Logo CaixaBank
  - Fondo gris claro #F5F5F5
  - Enlaces funcionales azul CaixaBank
  - Iconos de certificaciones
  - Copyright 2025
  - Multi-columna desktop, apilado móvil

### 🎨 Diseño y Estética

- [ ] Paleta de colores CaixaBank aplicada consistentemente:
  - Azul primario: #0073C8
  - Azul oscuro hover: #005A9C
  - Textos: #333333, #666666, #000000
  - Fondos: #FFFFFF, #F8F8F8, #F5F5F5
  
- [ ] Tipografía correcta:
  - Roboto para body text
  - Roboto Condensed para headings
  - Tamaños responsive (mobile-first)
  
- [ ] Espaciado consistente:
  - Padding de secciones correcto
  - Gaps en grids apropiados
  - Max-width 1200px en contenedores

### 🎭 Animaciones CSS

- [ ] Todas las animaciones implementadas en CSS (NO JavaScript):
  - Hero carousel fade transition
  - Cards entrada escalonada (animation-delay)
  - Cards hover elevation
  - Imagen zoom en hover
  - Country Flags hover scale
  - Animaciones fluidas 60fps sin jank
  
- [ ] Keyframes CSS definidos:
  - `fade`, `slideUp`, `fadeSlideUp`
  - `cardHover`, `flagPulse`
  - Todos en `styles/styles.css`

### 📱 Responsive Design (Mobile-First)

- [ ] **375px (Mobile)**:
  - Header hamburguesa
  - Hero 400px altura
  - Cards 1 columna
  - Country Flags 2 columnas
  - Todo funcional sin overflow
  
- [ ] **768px (Tablet)**:
  - Header navegación horizontal
  - Hero 500px
  - Cards 2 columnas
  - Country Flags 3 columnas
  
- [ ] **1024px (Desktop)**:
  - Hero 600px
  - Cards 3 columnas (grid 3x2)
  - Country Flags 5 columnas
  
- [ ] **1440px+ (Large Desktop)**:
  - Max-width 1200px centrado
  - Tipografía aumentada
  - Espaciado generoso

### 🔧 Calidad de Código

- [ ] **Linting**:
  - `npm run lint:js` → 0 errores
  - `npm run lint:css` → 0 errores
  
- [ ] **Build**:
  - `npm run build:json` → Exitoso
  - component-models.json generado
  
- [ ] **Console**:
  - Sin errores JavaScript
  - Sin warnings críticos
  - Sin 404 de recursos

### 🧪 Testing

- [ ] **Visual**:
  - Comparación side-by-side con https://www.caixabank.fr
  - Screenshots en 4 breakpoints
  - Diseño fiel a especificación
  
- [ ] **Cross-Browser**:
  - Chrome/Edge ✅
  - Firefox ✅
  - Safari ✅ (si es posible)
  - Móvil (iOS/Android) ✅
  
- [ ] **Responsive**:
  - DevTools de 375px a 1920px
  - Dispositivos reales testeados
  - Sin horizontal scroll no deseado
  
- [ ] **Interacciones**:
  - Carousel auto-play funciona
  - Dots de navegación clickeables
  - Cards hover funciona en desktop
  - Cards touch funciona en móvil
  - Links de banderas funcionales
  - Emails abrren cliente de correo
  - Menú hamburguesa funciona

### ⚡ Performance

- [ ] **Lighthouse Audit** (Desktop):
  - Performance: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90
  
- [ ] **Lighthouse Audit** (Mobile):
  - Performance: ≥ 85
  - Accessibility: ≥ 90
  
- [ ] **Optimizaciones**:
  - Imágenes optimizadas (WebP cuando sea posible)
  - Lazy loading para imágenes below-the-fold
  - CSS minificado en producción
  - Sin recursos bloqueantes innecesarios

### ♿ Accesibilidad (WCAG AA)

- [ ] **Contraste de colores**:
  - Ratio 4.5:1 para texto normal
  - Ratio 3:1 para texto grande
  
- [ ] **Navegación por teclado**:
  - Tab order lógico
  - Focus visible en todos los elementos interactivos
  - Skip links si es necesario
  
- [ ] **ARIA**:
  - Carousel dots con aria-label
  - Country flags con aria-label descriptivo
  - Landmarks apropiados (header, main, footer, nav)
  
- [ ] **Semántica**:
  - Headings en orden (H1 → H2 → H3)
  - Alt text en todas las imágenes
  - Links con texto descriptivo

### 📄 Documentación

- [ ] **Assets creados**:
  - Iconos SVG de banderas (5)
  - Imágenes para Hero (3)
  - Imágenes para Cards (6)
  - Logo CaixaBank ONE
  
- [ ] **Archivos del proyecto**:
  - `IMPLEMENTATION_PLAN.md` (este documento)
  - Screenshots comparativos
  - Notas de implementación
  - README actualizado con instrucciones

### 🚀 Despliegue

- [ ] **Git**:
  - Commits descriptivos por cada componente
  - Branch de desarrollo limpio
  - Tag de versión (v1.0.0)
  
- [ ] **Demo**:
  - Página demo funcional
  - URL accesible para revisión
  - Sin errores en producción

---

## 🎊 Criterio de Aceptación Final

El proyecto se considera **COMPLETO** cuando:

1. ✅ Todos los checkboxes de arriba están marcados
2. ✅ Diseño visual coincide ≥95% con https://www.caixabank.fr
3. ✅ Todas las animaciones CSS funcionan fluidas
4. ✅ Responsive perfecto en 4 breakpoints
5. ✅ Performance Lighthouse ≥90 en todas las métricas
6. ✅ Accesibilidad WCAG AA cumplida
7. ✅ Console sin errores en ningún navegador
8. ✅ Testing cross-browser exitoso
9. ✅ Código limpio y documentado
10. ✅ Demo funcional desplegado

---

**Última actualización**: 2026-02-09  
**Estado**: 🟢 PLAN COMPLETO - LISTO PARA IMPLEMENTAR  
**Siguiente acción**: Ejecutar `npm install && npm run lint:js` y comenzar Sprint 1  
**Referencia**: https://www.caixabank.fr/home_es.html  
**Especificación**: `spec/Captura de pantalla 2026-02-09 183532.png`

