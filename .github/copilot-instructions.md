# GitHub Copilot Instructions - AEM Edge Delivery Services Project

> **📖 Modular Documentation System**  
> This is the quick reference index. Detailed guides in `.github/copilot/`

---

## READ FIRST - Critical Rules

**Before ANY code**: Read [00-READ-FIRST.md](copilot/00-READ-FIRST.md)

### Non-Negotiable Rules

1. **Test-Driven Documentation** → Never document untested code
2. **Verification Checklist** → ESLint ✓ + Visual validation ✓ + Manual tests ✓ (ALL must pass)
3. **Tests (Manual / E2E)** → Visual validation in browser is mandatory

---
## Complete Documentation Index

| Doc | Content | File |
|-----|---------|------|
| 🚨 **Critical** | Test-driven docs • Verification checklist • Anti-patterns | [00-READ-FIRST.md](copilot/00-READ-FIRST.md) |
| ⚙️ **Tech Stack** | Dependencies • Setup • Naming | [01-tech-stack.md](copilot/01-tech-stack.md) |
| 📝 **Patterns** | Copy-paste templates (blocks, decorators) | [02-code-patterns.md](copilot/02-code-patterns.md) |
| 🎭 **Testing** | Manual testing • E2E best practices | [03-testing.md](copilot/03-testing.md) |

---

### Tech Stack
1. **JavaScript ES6+ — Primary language (vanilla JS)**
2. **AEM Universal Editor — Content authoring (includes native Content Fragments)**
3. **AEM EDS Runtime — Content delivery**
4. **Node.js — Runtime / tooling**

### File Structure Pattern

```
blocks/            # Bloques (componentes decoradores)
├─ hero/
│  ├─ hero.js      # export default function decorate(block)
│  └─ hero.css
├─ content-fragment/
│  ├─ content-fragment.js  # Decora CF nativo de AEM (NO GraphQL)
│  └─ content-fragment.css
scripts/           # Scripts globales
├─ aem.js          # Utilidades core
├─ scripts.js      # Inicialización
└─ utils.js
styles/            # Estilos globales
└─ styles.css
models/            # Definiciones JSON
├─ _page.json
└─ _section.json
fstab.yaml         # Configuración de contenido AEM
helix-query.yaml   # Indexación de contenido
```

### Architecture Rules

1. **No side effects globales** → Bloques solo modifican su propio DOM
2. **Data fetching lives in: blocks decorators or scripts/aem.js**
3. **Content authoring**: Universal Editor (AEM) → Decoración client-side
4. **Content Fragments**: Renderizados nativamente por AEM (NO GraphQL en bloques)
5. **Utilidades core**: Reusar funciones de `scripts/aem.js` (decorateButtons, getMetadata, loadFragment)

### Must Follow

- ✅ **Reuse first** → Search blocks before creating
- ✅ **ESLint** → Must pass lint:js before committing
- ✅ **Visual testing** → Validate in browser (mandatory)
- ✅ **E2E Testing** → Puppeteer for critical flows (recommended)

---

## 🎓 Learning Path

**New developer**:
1. [00-READ-FIRST.md](copilot/00-READ-FIRST.md) → Critical rules
2. [01-tech-stack.md](copilot/01-tech-stack.md) → Architecture & dependencies
3. [02-code-patterns.md](copilot/02-code-patterns.md) → Block templates
4. [03-testing.md](copilot/03-testing.md) → Testing strategy
