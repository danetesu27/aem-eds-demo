# Fix - Header y Footer rutas corregidas

Write-Host ""
Write-Host "=== Fix Header/Footer Paths ===" -ForegroundColor Cyan
Write-Host ""

# Git operations
git add blocks/header/header.js
git add blocks/footer/footer.js
git add placeholders.json

Write-Host "Archivos modificados:" -ForegroundColor Yellow
git status --short
Write-Host ""

git commit -m "fix: Correct nav and footer paths for AEM Author"

Write-Host ""
Write-Host "Haciendo push..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "OK - Cambios aplicados!" -ForegroundColor Green
Write-Host ""
Write-Host "Espera 5 minutos y:" -ForegroundColor Yellow
Write-Host "  1. Refresca Universal Editor (F5)" -ForegroundColor White
Write-Host "  2. Limpia cache (Ctrl+Shift+Del)" -ForegroundColor White
Write-Host ""
Write-Host "Los errores 404 deberian desaparecer" -ForegroundColor Green
Write-Host ""

