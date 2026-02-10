# Script Final - Todos los Cambios

Write-Host ""
Write-Host "=== Deploy Completo - Hero + Header + Footer ===" -ForegroundColor Cyan
Write-Host ""

# 1. Agregar todos los cambios
Write-Host "1. Agregando archivos..." -ForegroundColor Yellow
git add .

# 2. Ver qué se va a commitear
Write-Host ""
Write-Host "Archivos modificados/nuevos:" -ForegroundColor Cyan
git status --short

# 3. Commit
Write-Host ""
Write-Host "2. Creando commit..." -ForegroundColor Yellow
git commit -m "feat: Add Hero, Header, Footer models + fix paths + add placeholders"

# 4. Push
Write-Host ""
Write-Host "3. Haciendo push..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host " PUSH COMPLETADO" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""

Write-Host "GitHub Actions:" -ForegroundColor Cyan
Write-Host "  https://github.com/danetesu27/aem-eds-demo/actions" -ForegroundColor Gray
Write-Host ""

Write-Host "IMPORTANTE - Proximos pasos:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Esperar 5 minutos (GitHub Actions build)" -ForegroundColor White
Write-Host ""
Write-Host "2. Crear paginas en AEM Sites Console:" -ForegroundColor White
Write-Host "   a) /content/aem-eds-demo/en/nav" -ForegroundColor Gray
Write-Host "   b) /content/aem-eds-demo/en/footer" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Editar nav page:" -ForegroundColor White
Write-Host "   - Add Component → Header" -ForegroundColor Gray
Write-Host "   - Agregar Navigation Items" -ForegroundColor Gray
Write-Host "   - Save y Publish" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Editar footer page:" -ForegroundColor White
Write-Host "   - Add Component → Footer" -ForegroundColor Gray
Write-Host "   - Agregar Footer Sections" -ForegroundColor Gray
Write-Host "   - Save y Publish" -ForegroundColor Gray
Write-Host ""
Write-Host "5. Volver a index page:" -ForegroundColor White
Write-Host "   - F5 (refresh)" -ForegroundColor Gray
Write-Host "   - Ctrl+Shift+Del (limpiar cache)" -ForegroundColor Gray
Write-Host "   - Los errores 404 desapareceran" -ForegroundColor Gray
Write-Host ""

Write-Host "Componentes disponibles:" -ForegroundColor Yellow
Write-Host "  - Hero (carousel)" -ForegroundColor White
Write-Host "  - Hero Slide" -ForegroundColor White
Write-Host "  - Header (para nav page)" -ForegroundColor White
Write-Host "  - Navigation Item" -ForegroundColor White
Write-Host "  - Footer (para footer page)" -ForegroundColor White
Write-Host "  - Footer Section" -ForegroundColor White
Write-Host ""

