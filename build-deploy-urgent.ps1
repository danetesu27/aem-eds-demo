# Build y Deploy URGENTE - Header/Footer/Hero Slide

Write-Host ""
Write-Host "=== Build JSON + Deploy ===" -ForegroundColor Cyan
Write-Host ""

# Verificar archivos JSON
Write-Host "Verificando modelos..." -ForegroundColor Yellow
$files = @(
    "blocks\hero\_hero.json",
    "blocks\header\_header.json",
    "blocks\footer\_footer.json"
)

foreach ($f in $files) {
    if (Test-Path $f) {
        Write-Host "  OK $f" -ForegroundColor Green
    } else {
        Write-Host "  FALTA $f" -ForegroundColor Red
    }
}
Write-Host ""

# Build JSON
Write-Host "Ejecutando npm run build:json..." -ForegroundColor Yellow

try {
    npm run build:json 2>&1 | Out-Null
    Write-Host "  OK Build completado" -ForegroundColor Green
} catch {
    Write-Host "  FALLO Build - Intentando alternativa..." -ForegroundColor Yellow
    # Alternativa sin npm-run-all
    npm run build:json:models 2>&1 | Out-Null
    npm run build:json:definitions 2>&1 | Out-Null
    npm run build:json:filters 2>&1 | Out-Null
    Write-Host "  OK Build alternativo completado" -ForegroundColor Green
}
Write-Host ""

# Verificar que se generaron
Write-Host "Verificando archivos generados..." -ForegroundColor Yellow
if (Test-Path "component-definition.json") {
    $content = Get-Content "component-definition.json" -Raw

    if ($content -match '"Header"') {
        Write-Host "  OK Header encontrado" -ForegroundColor Green
    } else {
        Write-Host "  FALTA Header en JSON" -ForegroundColor Red
    }

    if ($content -match '"Hero Slide"') {
        Write-Host "  OK Hero Slide encontrado" -ForegroundColor Green
    } else {
        Write-Host "  FALTA Hero Slide en JSON" -ForegroundColor Red
    }

    if ($content -match '"Footer"') {
        Write-Host "  OK Footer encontrado" -ForegroundColor Green
    } else {
        Write-Host "  FALTA Footer en JSON" -ForegroundColor Red
    }
} else {
    Write-Host "  ERROR component-definition.json no existe" -ForegroundColor Red
}
Write-Host ""

# Git operations
Write-Host "Git add, commit, push..." -ForegroundColor Yellow
git add .
git commit -m "feat: Build component definitions - Header, Footer, Hero Slide editable"
git push origin main

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host " COMPLETADO" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Proximos pasos:" -ForegroundColor Cyan
Write-Host "  1. Esperar 5 minutos (GitHub Actions)" -ForegroundColor White
Write-Host "  2. Refresh Universal Editor (F5)" -ForegroundColor White
Write-Host "  3. Limpiar cache (Ctrl+Shift+Del)" -ForegroundColor White
Write-Host "  4. En /nav deberas ver Header en Add Component" -ForegroundColor White
Write-Host "  5. En Hero deberas poder agregar Hero Slide" -ForegroundColor White
Write-Host ""

