# Quick Deploy - Solo Git Push
# El build lo hace GitHub Actions automaticamente

Write-Host ""
Write-Host "=== Quick Deploy AEM EDS ===" -ForegroundColor Cyan
Write-Host ""

# Verificar cambios
$cambios = git status --porcelain

if ($cambios) {
    Write-Host "Archivos modificados:" -ForegroundColor Yellow
    git status --short
    Write-Host ""

    # Commit y Push
    git add .
    git commit -m "feat: Add editable models - Hero, Header, Footer"

    Write-Host ""
    Write-Host "Haciendo push..." -ForegroundColor Yellow
    git push origin main

    Write-Host ""
    Write-Host "OK - Push completo!" -ForegroundColor Green
    Write-Host ""
    Write-Host "GitHub Actions esta haciendo el build..." -ForegroundColor Cyan
    Write-Host "Revisa: github.com/danetesu27/aem-eds-demo/actions" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Espera 5 minutos total:" -ForegroundColor Yellow
    Write-Host "  2 min - GitHub Actions build" -ForegroundColor White
    Write-Host "  3 min - AEM sincronizacion" -ForegroundColor White
    Write-Host ""
    Write-Host "Luego en Universal Editor:" -ForegroundColor Yellow
    Write-Host "  F5 (refresh)" -ForegroundColor White
    Write-Host "  Ctrl+Shift+Del (limpiar cache)" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "No hay cambios pendientes" -ForegroundColor Green
    Write-Host ""
    Write-Host "Revisa GitHub Actions:" -ForegroundColor Yellow
    Write-Host "github.com/danetesu27/aem-eds-demo/actions" -ForegroundColor Gray
    Write-Host ""
}

