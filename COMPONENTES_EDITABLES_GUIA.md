# 📚 Guía Completa de Componentes Editables - AEM EDS Demo

## 🎯 Componentes Disponibles

---

## 1️⃣ HERO (Carousel)

### Ubicación en Universal Editor:
**Blocks** → **Hero**

### Campos Editables:

#### A. Hero Block (Contenedor):
```
📋 Block Title
   Título opcional para el bloque
   
☑️ Enable Underline
   Mostrar línea decorativa bajo títulos
   
📐 Layout Style
   • Overlay (recomendado para carousel)
   • Image Left
   • Image Right
   • Image Top
   • Image Bottom
   
🎨 CTA Style
   • Default
   • Primary Button (azul CaixaBank)
   • Secondary Button (outline)
   • Link (solo texto)
   
🎨 Background Style
   • Default
   • Dark (fondo oscuro)
   • Light (fondo claro)
```

#### B. Hero Slide (Diapositivas):
```
🖼️ Slide Image
   Imagen de fondo para esta diapositiva
   
📝 Image Alt Text
   Texto alternativo para accesibilidad
   
📄 Slide Content (Rich Text)
   Título, descripción y botones
```

### Cómo Crear Carousel:
1. Agregar Hero Block
2. Dentro del Hero, agregar 2+ Hero Slides
3. Cada slide con su imagen y contenido
4. Preview → Carousel automático con dots

---

## 2️⃣ CARDS (Grid)

### Ubicación en Universal Editor:
**Blocks** → **Cards**

### Campos Editables:

#### A. Cards Block (Contenedor):
```
No tiene campos propios, solo contiene Cards
```

#### B. Card (Item individual):
```
🖼️ Image
   Imagen de la card (aspect ratio 16:9)
   
📄 Text (Rich Text)
   • Título (usar <h2> o <h3>)
   • Descripción
   • Botón CTA
   
🎨 Card Style
   Estilo visual de la card
   
🎨 CTA Style
   Estilo del botón dentro de la card
```

### Cómo Crear Grid 3x2:
1. Agregar Cards Block
2. Agregar 6 Cards dentro
3. Cada card con imagen y texto
4. Preview → Grid responsive automático

---

## 3️⃣ COLUMNS

### Ubicación en Universal Editor:
**Blocks** → **Columns**

### Campos Editables:
```
📊 Number of Columns
   2, 3 o 4 columnas
   
📏 Column Width
   Automático o personalizado
```

### Contenido:
Dentro de cada columna puedes agregar:
- Text
- Image
- Button
- Otros componentes

---

## 4️⃣ ACTION BUTTON

### Ubicación en Universal Editor:
**Blocks** → **Action Button**

### Campos Editables:
```
📝 Button Text
   Texto del botón
   
🔗 Button Link
   URL de destino
   
🎨 Button Style
   • Primary (azul CaixaBank)
   • Secondary (outline)
   • Default
   
📐 Alignment
   Left, Center, Right
```

---

## 5️⃣ FRAGMENT

### Ubicación en Universal Editor:
**Blocks** → **Fragment**

### Campos Editables:
```
🔗 Fragment Path
   Ruta a un fragmento reutilizable
```

### Uso:
Permite reutilizar contenido creado en otra parte

---

## 6️⃣ DEFAULT CONTENT

### Text
```
📄 Rich Text Editor
   Párrafos, listas, enlaces, negrita, cursiva
```

### Title
```
📝 Title Text
   Texto del título
   
📐 Title Level
   H1, H2, H3, H4, H5, H6
```

### Image
```
🖼️ Image Asset
   Seleccionar desde DAM
   
📝 Alt Text
   Texto alternativo
   
📏 Width/Height
   Dimensiones
```

### Button
```
📝 Button Text
   Texto del botón
   
🔗 Link
   URL de destino
   
🎨 Style
   Primary, Secondary, Link
```

---

## 7️⃣ HEADER (Navegación Global)

### ⚠️ IMPORTANTE: Edición Especial

El Header **NO se agrega desde "Add Component"**. Se edita en una página especial:

**Ruta**: `/nav` o `/header`

### Cómo Editar el Header:

1. En AEM Sites, ir a la raíz del sitio
2. Buscar página: **nav** o **header**
3. Abrir en Universal Editor
4. Editar contenido

### Campos Editables:

#### A. Header Block (Contenedor):
```
🖼️ Logo
   Logo de CaixaBank (imagen)
   
📝 Logo Alt Text
   "CaixaBank" (accesibilidad)
   
🔗 Logo Link
   "/" (link a home)
```

#### B. Navigation Items (Enlaces):
```
📝 Navigation Title
   Texto del enlace: "Productos", "Servicios", etc.
   
🔗 Link URL
   URL de destino: "/productos", "/servicios"
   
☑️ Open in New Tab
   Abrir en nueva pestaña
   
☑️ Is CTA Button
   Mostrar como botón azul CaixaBank (en lugar de enlace)
```

### Estructura Header Típica:
```
Header Block
  ├─ Logo: [caixabank-logo.png]
  ├─ Logo Alt: "CaixaBank"
  ├─ Logo Link: "/"
  │
  ├─ Nav Item 1: Productos → /productos
  ├─ Nav Item 2: Servicios → /servicios
  ├─ Nav Item 3: Empresas → /empresas
  ├─ Nav Item 4: Ayuda → /ayuda
  └─ Nav Item 5: Área Cliente → /login (CTA Button)
```

### Preview del Header:
```
┌──────────────────────────────────────────────┐
│ [Logo] Productos  Servicios  [Área Cliente] │
└──────────────────────────────────────────────┘
  ↑                              ↑
  Link a /                       Botón CTA
```

---

## 8️⃣ FOOTER (Pie de Página Global)

### ⚠️ IMPORTANTE: Edición Especial

El Footer **NO se agrega desde "Add Component"**. Se edita en una página especial:

**Ruta**: `/footer`

### Cómo Editar el Footer:

1. En AEM Sites, ir a la raíz del sitio
2. Buscar página: **footer**
3. Abrir en Universal Editor
4. Editar contenido

### Campos Editables:

#### A. Footer Block (Contenedor):
```
🖼️ Footer Logo
   Logo de CaixaBank (puede ser diferente al header)
   
📝 Logo Alt Text
   "CaixaBank" (accesibilidad)
   
📄 Copyright Text (Rich Text)
   "© 2026 CaixaBank. Todos los derechos reservados."
```

#### B. Footer Sections (Columnas):
```
📝 Section Title
   Título de la columna: "Productos", "Contacto", etc.
   
📄 Section Content (Rich Text)
   • Enlaces de navegación
   • Información de contacto
   • Redes sociales
   • Textos legales
```

### Estructura Footer Típica:
```
Footer Block
  ├─ Footer Logo: [caixabank-logo-white.png]
  ├─ Copyright: "© 2026 CaixaBank..."
  │
  ├─ Footer Section 1: "Productos"
  │   • Cuenta Corriente
  │   • Tarjetas
  │   • Hipotecas
  │   • Inversiones
  │
  ├─ Footer Section 2: "Servicios"
  │   • Banca Online
  │   • Banca Móvil
  │   • Asesoramiento
  │   • Seguros
  │
  ├─ Footer Section 3: "Contacto"
  │   • Teléfono: +33 1 234 567
  │   • Email: info@caixabank.fr
  │   • Dirección: París, Francia
  │
  └─ Footer Section 4: "Legal"
      • Aviso Legal
      • Política de Privacidad
      • Cookies
      • Accesibilidad
```

### Preview del Footer:
```
┌──────────────────────────────────────────────────────┐
│ [Logo CaixaBank]                                     │
│                                                      │
│ Productos    Servicios    Contacto    Legal         │
│ • Cuenta     • Banca      Tel: +33    • Aviso Legal │
│ • Tarjetas   • Móvil      Email: ..   • Privacidad  │
│ • Hipotecas  • Seguros    París       • Cookies     │
│                                                      │
│ © 2026 CaixaBank. Todos los derechos reservados.   │
└──────────────────────────────────────────────────────┘
```

---

## 🔧 Cómo Funciona Header/Footer en EDS

### Concepto Clave:

En Edge Delivery Services:
```
/nav o /header  → Se renderiza automáticamente como <header>
/footer         → Se renderiza automáticamente como <footer>
```

**Todas las páginas** heredan automáticamente el mismo Header y Footer.

### Flujo de Edición:

```
1. Editar /nav
   ↓
2. Guardar cambios
   ↓
3. Publish
   ↓
4. TODAS las páginas del sitio
   se actualizan con el nuevo header
```

### Ventajas:

✅ **Una sola edición** → Afecta todo el sitio
✅ **Consistencia global** → Mismo header/footer en todas partes
✅ **Fácil mantenimiento** → No hay que editar página por página

---

## 🎨 Estilos Aplicados Automáticamente

### Colores CaixaBank:
```css
--primary-color: #0073C8  (azul CaixaBank)
--primary-dark: #005A9C   (azul hover)
```

### Hover Effects (CSS automático):
```
Cards:
  ✓ Elevación (translateY -8px)
  ✓ Imagen zoom (scale 1.05)
  ✓ Título azul en hover
  ✓ Sombra aumentada

Hero:
  ✓ Carousel fade transitions
  ✓ Auto-play 5 segundos
  ✓ Dots interactivos
  ✓ Pausa en hover

Header:
  ✓ Links azul en hover
  ✓ Sticky scroll shadow
  ✓ Active page indicator

Footer:
  ✓ Fondo gris claro
  ✓ Enlaces azules
```

---

## 📋 Workflow Típico

### Configurar Header y Footer (Una vez):

#### 1. Editar Header (/nav):
```
AEM Sites → Raíz del sitio → Página "nav"
  ├─ Header Block:
  │   • Logo: caixabank-logo.svg
  │   • Logo Alt: "CaixaBank"
  │   • Logo Link: "/"
  │
  ├─ Nav Item: "Productos" → /productos
  ├─ Nav Item: "Servicios" → /servicios  
  ├─ Nav Item: "Empresas" → /empresas
  ├─ Nav Item: "Ayuda" → /ayuda
  └─ Nav Item: "Área Cliente" → /login (CTA)
  
Save → Publish → Header se aplica a TODO el sitio
```

#### 2. Editar Footer (/footer):
```
AEM Sites → Raíz del sitio → Página "footer"
  ├─ Footer Block:
  │   • Logo: caixabank-logo-white.png
  │   • Copyright: "© 2026 CaixaBank..."
  │
  ├─ Footer Section: "Productos"
  │   • Enlaces a productos
  │
  ├─ Footer Section: "Servicios"
  │   • Enlaces a servicios
  │
  ├─ Footer Section: "Contacto"
  │   • Teléfono, email, dirección
  │
  └─ Footer Section: "Legal"
      • Avisos legales, privacidad
      
Save → Publish → Footer se aplica a TODO el sitio
```

---

### Crear Página de CaixaBank (Individual):

#### 1. Hero Section:
```
Add Component → Blocks → Hero
  ├─ Properties: Layout = Overlay
  │
  ├─ Hero Slide 1:
  │   • Image: sucursal-paris.jpg
  │   • Content: "Bienvenido a CaixaBank Francia"
  │
  ├─ Hero Slide 2:
  │   • Image: servicios.jpg
  │   • Content: "Servicios Bancarios Internacionales"
  │
  └─ Hero Slide 3:
      • Image: equipo.jpg
      • Content: "Nuestro Equipo en París"
```

#### 2. Cards Section:
```
Add Component → Blocks → Cards
  ├─ Card 1: Productos para empresas
  ├─ Card 2: International Banking
  ├─ Card 3: Asesoramiento personalizado
  ├─ Card 4: Cuenta corriente
  ├─ Card 5: Tarjetas de crédito
  └─ Card 6: Hipotecas
```

#### 3. Text Section:
```
Add Component → Default Content → Text
  • "Por favor, tenga en cuenta que CaixaBank..."
```

---

## 🚀 Mejoras Implementadas

### Hero Carousel:
- ✅ Multi-slide editable
- ✅ Campos individuales por slide
- ✅ Dropdown para estilos
- ✅ Auto-play automático
- ✅ Keyboard navigation (arrows)

### Cards Grid:
- ✅ 100% clickeable
- ✅ Grid responsive 1→2→3
- ✅ Hover effects CSS
- ✅ Animaciones entrada

### Header:
- ✅ Sticky scroll
- ✅ Active page indicator
- ✅ Colores CaixaBank

### Footer:
- ✅ Grid responsive
- ✅ Fondo gris claro
- ✅ Enlaces azules

---

## 🎯 Tips de Edición

### Rich Text Editor:
```
Bold: Ctrl + B
Italic: Ctrl + I
Link: Ctrl + K
Heading: # + Space
List: - + Space
```

### Seleccionar Imágenes:
```
1. Click en campo Image
2. Browse Assets
3. Buscar en DAM
4. Select
```

### Agregar Botones:
```
En Rich Text Editor:
1. Escribir texto: "Ver más"
2. Seleccionar texto
3. Click botón "Link"
4. Convertir a "Button"
5. Elegir estilo
```

---

## 📸 Resultado en Preview

### Desktop (>= 1024px):
```
Hero: Full width, 600px height
Cards: 3 columnas
Columns: Layout definido
```

### Tablet (768px - 1023px):
```
Hero: Full width, 500px height
Cards: 2 columnas
```

### Mobile (< 768px):
```
Hero: Full width, 400px height
Cards: 1 columna
Stack vertical
```

---

## ✅ Checklist de Contenido

Al crear una página, asegúrate de:

- [ ] Hero con al menos 1 slide
- [ ] Hero con imagen de alta calidad (min 1920x600)
- [ ] Título descriptivo en cada slide
- [ ] Alt text en todas las imágenes
- [ ] Cards con imágenes 16:9
- [ ] Títulos concisos en cards
- [ ] CTAs claros ("Ver más", "Contactar", etc.)
- [ ] Footer con información de contacto
- [ ] Metadata de la página configurado

---

**Todos estos componentes son editables AHORA después de ejecutar `npm run build:json` y push a GitHub** 🎯

