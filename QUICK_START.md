# 🚀 Quick Start - CaixaBank Francia Implementation

> **Guía rápida** para iniciar la implementación inmediatamente  
> Plan completo en: [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)

---

## ⚡ Inicio Rápido (5 minutos)

### 1. Verificar Entorno

```powershell
# Instalar dependencias
npm install

# Verificar linting
npm run lint:js
npm run lint:css

# Verificar build
npm run build:json
```

### 2. Iniciar Servidor Local

```powershell
# Opción 1: AEM CLI (recomendado)
aem up

# Opción 2: http-server
npx http-server -p 3000

# Opción 3: Live Server (VSCode extension)
# Click derecho en index.html → Open with Live Server
```

### 3. Abrir Browser

```
http://localhost:3000
```

---

## 📋 Tareas del Día 1 (Sprint 1)

### ✅ Tarea 1: Variables CSS (2-3 horas)

**Archivo**: `styles/styles.css`

**Qué hacer**:
1. Abrir `styles/styles.css`
2. Agregar todas las variables CSS del plan (Fase 3.1)
3. Incluye: colores, tipografía, espaciado, keyframes

**Checklist**:
- [ ] Variables de colores CaixaBank agregadas
- [ ] Tipografía Roboto configurada
- [ ] Espaciado mobile-first definido
- [ ] Keyframes de animaciones CSS agregados
- [ ] Ejecutar: `npm run lint:css` ✅
- [ ] Abrir página en browser y verificar

### ✅ Tarea 2: Header (3-4 horas)

**Archivo**: `blocks/header/header.css`

**Qué hacer**:
1. Actualizar colores a azul CaixaBank (#0073C8)
2. Logo CaixaBank ONE
3. 5 items de navegación
4. Botón CTA azul
5. Menú hamburguesa responsive

**Checklist**:
- [ ] Colores CaixaBank aplicados
- [ ] Logo visible y ajustado
- [ ] 5 items de navegación funcionales
- [ ] Botón CTA "Acceso clientes ONE" azul
- [ ] Menú hamburguesa en móvil (<768px)
- [ ] Hover effects con transitions CSS
- [ ] Ejecutar: `npm run lint:css` ✅
- [ ] Validar en browser (desktop + mobile)

---

## 🎨 Paleta de Colores CaixaBank

```css
--primary-color: #0073C8;           /* Azul CaixaBank */
--primary-dark: #005A9C;            /* Hover */
--text-color: #333333;              /* Texto principal */
--text-color-light: #666666;        /* Secundario */
--background-color: #FFFFFF;        /* Fondo */
--background-alt: #F8F8F8;          /* Alternativo */
--background-light: #F5F5F5;        /* Footer */
```

---

## 📱 Breakpoints Mobile-First

```css
/* Mobile: 0 - 767px (default) */
/* Tablet: 768px+ */
@media (min-width: 768px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) { }
```

---

## 🎭 Animaciones CSS Principales

```css
/* Fade */
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
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

/* Card Hover (CSS, no JS) */
.cards li:hover {
  transform: translateY(-8px);
  box-shadow: var(--box-shadow-lg);
}

/* Flag Hover (CSS, no JS) */
.country-flag-link:hover {
  transform: scale(1.1);
}
```

---

## 🧪 Testing Rápido

Después de cada cambio:

```powershell
# 1. Linting
npm run lint:js
npm run lint:css

# 2. Browser
# Abrir localhost:3000 en browser

# 3. DevTools Responsive
# F12 → Toggle device toolbar (Ctrl+Shift+M)
# Probar: 375px, 768px, 1024px, 1440px

# 4. Console
# Verificar sin errores JavaScript
```

---

## 📂 Componentes a Implementar

### Sprint 1 (2-3 días)
- [x] Variables CSS globales
- [ ] Header (actualizar)
- [ ] Hero Carousel (actualizar)
- [ ] Cards Grid 3x2 (actualizar)
- [ ] Footer (actualizar)

### Sprint 2 (1-2 días)
- [ ] Country Flags (crear)
- [ ] Info Text (crear)

### Sprint 3 (1-2 días)
- [ ] Integración completa
- [ ] Testing cross-browser
- [ ] Optimización performance

---

## 🆘 Si Encuentras Problemas

### Error de Linting

```powershell
# Ver detalles del error
npm run lint:js -- --debug

# Arreglar automáticamente (si es posible)
npm run lint:js -- --fix
```

### Página no carga

1. Verificar que servidor está corriendo
2. Verificar console de browser (F12)
3. Verificar que archivos JS/CSS están cargando (Network tab)

### Animaciones no funcionan

1. Verificar que keyframes están en `styles/styles.css`
2. Verificar que variables CSS están definidas
3. Verificar console sin errores

---

## 📖 Documentación de Referencia

| Documento | Contenido |
|-----------|-----------|
| [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | Plan completo detallado (2000+ líneas) |
| [.github/copilot/00-READ-FIRST.md](./.github/copilot/00-READ-FIRST.md) | Reglas críticas del proyecto |
| [.github/copilot/02-code-patterns.md](./.github/copilot/02-code-patterns.md) | Patrones de código |
| https://www.caixabank.fr/home_es.html | Referencia funcional |

---

## ✅ Checklist Diario

**Cada día antes de terminar**:
- [ ] Todos los cambios cometidos con mensajes descriptivos
- [ ] `npm run lint:js && npm run lint:css` ✅ PASS
- [ ] Validación visual en browser
- [ ] Testing responsive básico
- [ ] Console sin errores críticos
- [ ] Componentes del día funcionando

---

## 🎯 Objetivo Final

**Implementar página completa de CaixaBank Francia** con:
- ✅ Todos los componentes funcionales
- ✅ Diseño responsive perfecto (mobile-first)
- ✅ Animaciones CSS fluidas (60fps)
- ✅ Performance Lighthouse > 90
- ✅ Accesibilidad WCAG AA
- ✅ Cross-browser compatible

**Duración estimada**: 4-7 días  
**Estado actual**: Listo para iniciar Sprint 1

---

## 🚀 Empezar AHORA

```powershell
# 1. Abrir archivo
code styles/styles.css

# 2. Copiar variables del IMPLEMENTATION_PLAN.md (Fase 3.1)
# 3. Guardar
# 4. Ejecutar linting
npm run lint:css

# 5. Abrir browser
# http://localhost:3000

# 6. ¡Continuar con Header!
```

**¡Buena suerte con la implementación! 🎉**

