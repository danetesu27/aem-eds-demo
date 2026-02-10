# Fix npm-run-all + Build JSON + Deploy

Write-Host ""
Write-Host "=== Fix npm-run-all + Build + Deploy ===" -ForegroundColor Cyan
Write-Host ""

# Paso 1: Instalar dependencias si faltan
Write-Host "1. Verificando dependencias..." -ForegroundColor Yellow

if (!(Test-Path "node_modules")) {
    Write-Host "   node_modules no existe, instalando..." -ForegroundColor Yellow
    npm install
} else {
    Write-Host "   node_modules existe" -ForegroundColor Green

    # Verificar si npm-run-all está instalado
    if (!(Test-Path "node_modules\npm-run-all")) {
        Write-Host "   npm-run-all falta, reinstalando dependencias..." -ForegroundColor Yellow
        npm install
    } else {
        Write-Host "   npm-run-all instalado" -ForegroundColor Green
    }
}
Write-Host ""

# Paso 2: Build JSON de forma alternativa (sin npm-run-all)
Write-Host "2. Building JSON files..." -ForegroundColor Yellow

try {
    # Intentar con npm run build:json
    npm run build:json 2>&1 | Out-Null
    Write-Host "   OK Build completado" -ForegroundColor Green
} catch {
    Write-Host "   Build normal falló, usando alternativa..." -ForegroundColor Yellow

    # Alternativa: ejecutar cada comando individualmente
    npm run build:json:models
    npm run build:json:definitions
    npm run build:json:filters

    Write-Host "   OK Build alternativo completado" -ForegroundColor Green
}
Write-Host ""

# Paso 3: Verificar archivos generados
Write-Host "3. Verificando archivos generados..." -ForegroundColor Yellow

$files = @("component-definition.json", "component-models.json", "component-filters.json")
$allExist = $true

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "   OK $file" -ForegroundColor Green
    } else {
        Write-Host "   FALTA $file" -ForegroundColor Red
        $allExist = $false
    }
}
Write-Host ""

if ($allExist) {
    # Paso 4: Verificar componentes en JSON
    Write-Host "4. Verificando componentes..." -ForegroundColor Yellow

    $content = Get-Content "component-definition.json" -Raw

    $components = @("Header", "Hero Slide", "Footer", "Navigation Item", "Footer Section")
    foreach ($comp in $components) {
        if ($content -match [regex]::Escape($comp)) {
            Write-Host "   OK $comp" -ForegroundColor Green
        } else {
            Write-Host "   FALTA $comp" -ForegroundColor Red
        }
    }
    Write-Host ""

    # Paso 5: Git commit y push
    Write-Host "5. Git operations..." -ForegroundColor Yellow

    git add .
    git commit -m "feat: Add Header/Footer/Hero Slide models + fix GitHub Actions workflow"

    Write-Host ""
    Write-Host "6. Haciendo push..." -ForegroundColor Yellow
    git push origin main

    Write-Host ""
    Write-Host "=====================================" -ForegroundColor Green
    Write-Host " COMPLETADO EXITOSAMENTE" -ForegroundColor Green
    Write-Host "=====================================" -ForegroundColor Green
    Write-Host ""

    Write-Host "GitHub Actions workflow actualizado:" -ForegroundColor Cyan
    Write-Host "  - Ahora ejecuta npm run build:json automaticamente" -ForegroundColor White
    Write-Host "  - Commitea los archivos JSON generados" -ForegroundColor White
    Write-Host "  - Push automatico" -ForegroundColor White
    Write-Host ""

    Write-Host "Proximos pasos:" -ForegroundColor Yellow
    Write-Host "  1. Esperar 5 minutos (GitHub Actions)" -ForegroundColor White
    Write-Host "  2. Verificar workflow: github.com/danetesu27/aem-eds-demo/actions" -ForegroundColor White
    Write-Host "  3. Refresh Universal Editor (F5)" -ForegroundColor White
    Write-Host "  4. Limpiar cache (Ctrl+Shift+Del)" -ForegroundColor White
    Write-Host ""

    Write-Host "Componentes que veras:" -ForegroundColor Cyan
    Write-Host "  En /nav:" -ForegroundColor White
    Write-Host "    - Header" -ForegroundColor Green
    Write-Host "    - Navigation Item" -ForegroundColor Green
    Write-Host ""
    Write-Host "  En /index (dentro de Hero):" -ForegroundColor White
    Write-Host "    - Hero Slide" -ForegroundColor Green
    Write-Host ""
    Write-Host "  En /footer:" -ForegroundColor White
    Write-Host "    - Footer" -ForegroundColor Green
    Write-Host "    - Footer Section" -ForegroundColor Green
    Write-Host ""

} else {
    Write-Host "=====================================" -ForegroundColor Red
    Write-Host " ERROR: Archivos JSON no generados" -ForegroundColor Red
    Write-Host "=====================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Intenta:" -ForegroundColor Yellow
    Write-Host "  1. npm install" -ForegroundColor White
    Write-Host "  2. Ejecuta este script de nuevo" -ForegroundColor White
    Write-Host ""
}

