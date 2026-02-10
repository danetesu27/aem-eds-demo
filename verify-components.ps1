# AEM EDS Demo - Component Verification

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "AEM EDS Component Verification" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if component JSON files exist
Write-Host "Checking component JSON files..." -ForegroundColor Yellow
$jsonFiles = @("component-definition.json", "component-models.json", "component-filters.json")
foreach ($file in $jsonFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file exists" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file missing" -ForegroundColor Red
    }
}
Write-Host ""

# Check Hero component
Write-Host "Checking Hero component files..." -ForegroundColor Yellow
if (Test-Path "blocks/hero/hero.js") {
    Write-Host "  ✓ hero.js exists" -ForegroundColor Green
    $heroJs = Get-Content "blocks/hero/hero.js" -Raw
    if ($heroJs -match "createDots") {
        Write-Host "  ✓ Carousel functionality present" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Carousel functionality missing" -ForegroundColor Red
    }
} else {
    Write-Host "  ✗ hero.js missing" -ForegroundColor Red
}

if (Test-Path "blocks/hero/hero.css") {
    Write-Host "  ✓ hero.css exists" -ForegroundColor Green
} else {
    Write-Host "  ✗ hero.css missing" -ForegroundColor Red
}
Write-Host ""

# Check if Hero is in component-definition.json
Write-Host "Checking Hero in component-definition.json..." -ForegroundColor Yellow
if (Test-Path "component-definition.json") {
    $componentDef = Get-Content "component-definition.json" -Raw
    if ($componentDef -match '"Hero"') {
        Write-Host "  ✓ Hero found in component-definition.json" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Hero NOT found in component-definition.json" -ForegroundColor Red
    }
}
Write-Host ""

# Check git status
Write-Host "Checking git status..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "  ⚠ Uncommitted changes found:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    Write-Host "  Run: git add . && git commit -m 'Update components' && git push" -ForegroundColor Cyan
} else {
    Write-Host "  ✓ No uncommitted changes" -ForegroundColor Green
}
Write-Host ""

# Next steps
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "1. If files are missing, run: npm run build:json" -ForegroundColor White
Write-Host "2. If changes uncommitted, run: git push" -ForegroundColor White
Write-Host "3. Wait 2-3 minutes for AEM to sync" -ForegroundColor White
Write-Host "4. Refresh Universal Editor (F5)" -ForegroundColor White
Write-Host "5. Check hlx.page preview" -ForegroundColor White
Write-Host ""

