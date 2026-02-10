# 🚨 READ FIRST - Critical Rules

**Before writing ANY code, understand these non-negotiable rules.**
---
## Core Principles

### 1. Test-Driven Documentation (MANDATORY)
**NEVER document or generate extensive documentation for untested code.**

#### Rule: Test-Driven Documentation
**Forbidden:**
- Creating README, guides, or extensive docs for code that hasn't been executed
- Generating multiple documentation files before verifying the solution works
- Writing tutorials, examples, or "Quick Start" guides for untested features
- Writing "How it works" documentation without runtime verification

**Required:**
- Code MUST be executed at least once (local server or AEM CLI)
- The block MUST render correctly in browser
- **Content Fragments**: Come pre-rendered from AEM (NO GraphQL fetch in blocks)
- ESLint MUST pass without errors
- Code MUST achieve its stated objective before writing extensive docs
- Tests MUST pass before claiming success
- Results MUST be verified in browser before documentation

#### Documentation Workflow for AEM EDS Blocks
1. Write block code (`blocks/{name}/{name}.js`)
2. Implement `decorate(block)` function
3. Run ESLint: `npm run lint:js` → MUST PASS
4. Open page in local server (Live Server, `aem up`, or http-server)
5. Verify block decorates correctly in browser
6. Test responsive design (mobile/tablet/desktop)
7. Validate Universal Editor integration (if applicable)
8. ONLY THEN write minimal documentation with REAL screenshots
9. ONE file with actual test results

#### Red Flags to Avoid
- Creating 3+ documentation files for one feature
- Documentation > 10KB before testing
- Documenting blocks that haven't rendered in browser
- Writing docs before visual validation
- Creating blocks that haven't been executed end-to-end
- Writing "Quick Start" guides before manual testing

#### Documentation File Creation Policy

**Do NOT create**: `CHANGES.md`, `IMPLEMENTATION.md`, `SUMMARY.md`, `TODO.md`, or similar files after each task unless explicitly requested by the user.

## ✅ Verification Checklist (MANDATORY)

**Before marking ANY requirement as "complete" or "done":**

### Step 1: Linting
```bash
npm run lint:js   # ESLint para JavaScript
npm run lint:css  # Stylelint para CSS
```
- Must: No ESLint errors
- Must: No Stylelint errors
- Optional: JSDoc comments for complex functions

### Step 2: Build verification
```bash
npm run build:json  # Genera component-models.json, component-definition.json, etc.
```
- Must: Build completes without errors
- Must: JSON files generated correctly in root

### Step 3: Visual validation (MANDATORY)
- Open page in browser (local server or `aem up`)
- Verify block decorates correctly
- Check responsive design (mobile/tablet/desktop)
- Verify Universal Editor integration (if applicable)
- Check browser console (no errors)
- Test interactions (clicks, hovers, animations)

### Step 4: Content Fragment validation (if applicable)
- Content Fragment comes pre-rendered from AEM
- Block only decorates the HTML (NO GraphQL fetch)
- Verify CF displays correctly
- Test with Universal Editor (edit mode)

### Verification Flow Example
```
1. Block implemented → hero.js with decorate()
2. npm run lint:js → ✅ PASS
3. Open http://localhost:3000/ → ✅ PASS
4. Visual validation → ✅ Block renders correctly
5. Responsive check → ✅ Mobile/Tablet/Desktop OK
```

### When Verification Fails
- Do NOT claim the requirement is complete
- Do NOT ask user for confirmation
- Debug and fix ALL issues
- Re-run verification checklist
- Only mark complete when ALL steps pass

## Next Steps
Read next:
1. **[Tech Stack Reference](01-tech-stack.md)** - Dependencies, configuration, setup
2. **[Code Patterns](02-code-patterns.md)** - Copy-paste block templates
3. **[Testing Guidelines](03-testing.md)** - Manual testing / E2E with Puppeteer

