# Script Simplificado - AEM EDS Deploy
# Para proyectos con GitHub Actions

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deploy Componentes - AEM EDS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar archivos JSON
Write-Host "Verificando modelos JSON..." -ForegroundColor Yellow
$files = @("blocks\hero\_hero.json", "blocks\header\_header.json", "blocks\footer\_footer.json")
foreach ($f in $files) {
    if (Test-Path $f) {
        Write-Host "  OK $f" -ForegroundColor Green
    } else {
        Write-Host "  FALTA $f" -ForegroundColor Red
    }
}
Write-Host ""

# Git status
Write-Host "Estado Git..." -ForegroundColor Yellow
$status = git status --porcelain

if ($status) {
    Write-Host "  Archivos pendientes:" -ForegroundColor Cyan
    git status --short
    Write-Host ""

    # Add y Commit
    Write-Host "Haciendo commit..." -ForegroundColor Yellow
    git add .
    git commit -m "feat: Add Hero, Header, Footer editable models"
    Write-Host "  OK Commit creado" -ForegroundColor Green
    Write-Host ""

    # Push
    Write-Host "Push a GitHub? (S/N): " -ForegroundColor Yellow -NoNewline
    $resp = Read-Host

    if ($resp -eq "S" -or $resp -eq "s") {
        Write-Host ""
        Write-Host "Pushing..." -ForegroundColor Yellow
        git push origin main
        Write-Host "  OK Push completo" -ForegroundColor Green
        Write-Host ""

        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "  COMPLETADO" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "GitHub Actions hara el build automaticamente" -ForegroundColor Yellow
        Write-Host "Revisa: github.com/danetesu27/aem-eds-demo/actions" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Proximos pasos:" -ForegroundColor Yellow
        Write-Host "1. Esperar 2-3 min (Actions build)" -ForegroundColor White
        Write-Host "2. Esperar 2-3 min mas (AEM sync)" -ForegroundColor White
        Write-Host "3. Refresh Universal Editor (F5)" -ForegroundColor White
        Write-Host "4. Limpiar cache (Ctrl+Shift+Del)" -ForegroundColor White
        Write-Host ""
        Write-Host "Componentes nuevos:" -ForegroundColor Yellow
        Write-Host "  - Hero" -ForegroundColor White
        Write-Host "  - Hero Slide" -ForegroundColor White
        Write-Host "  - Header" -ForegroundColor White
        Write-Host "  - Navigation Item" -ForegroundColor White
        Write-Host "  - Footer" -ForegroundColor White
        Write-Host "  - Footer Section" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "  Push cancelado" -ForegroundColor Yellow
        Write-Host "  Ejecuta manualmente: git push origin main" -ForegroundColor Cyan
        Write-Host ""
    }
} else {
    Write-Host "  No hay cambios pendientes" -ForegroundColor Green
    Write-Host ""
    Write-Host "Revisa GitHub Actions:" -ForegroundColor Yellow
    Write-Host "github.com/danetesu27/aem-eds-demo/actions" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host "URLs de verificacion:" -ForegroundColor Cyan
Write-Host "  GitHub repo:" -ForegroundColor White
Write-Host "  https://github.com/danetesu27/aem-eds-demo" -ForegroundColor Gray
Write-Host ""
Write-Host "  Component definition:" -ForegroundColor White
$url = "https://main--aem-eds-demo--danetesu27.hlx.page"
$path = "/component-definition.json"
Write-Host "  $url$path" -ForegroundColor Gray
Write-Host ""

