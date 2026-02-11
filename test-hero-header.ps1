# Test Hero & Header - Quick Validation Script
# Usage: .\test-hero-header.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Hero & Header Fix - Validation Test" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Run ESLint
Write-Host "[1/4] Running ESLint on JavaScript files..." -ForegroundColor Yellow
try {
    npm run lint:js 2>&1 | Tee-Object -Variable lintOutput
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ ESLint passed successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ ESLint failed. Fix errors before continuing." -ForegroundColor Red
        Write-Host $lintOutput -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "⚠️  Could not run ESLint. Make sure dependencies are installed." -ForegroundColor Yellow
    Write-Host "   Run: npm install" -ForegroundColor Yellow
}

Write-Host ""

# Step 2: Check Hero block files
Write-Host "[2/4] Checking Hero block files..." -ForegroundColor Yellow
$heroJs = "blocks\hero\hero.js"
$heroCss = "blocks\hero\hero.css"
$heroJson = "blocks\hero\_hero.json"

if (Test-Path $heroJs) {
    Write-Host "✅ $heroJs exists" -ForegroundColor Green
} else {
    Write-Host "❌ $heroJs NOT FOUND" -ForegroundColor Red
}

if (Test-Path $heroCss) {
    Write-Host "✅ $heroCss exists" -ForegroundColor Green
} else {
    Write-Host "❌ $heroCss NOT FOUND" -ForegroundColor Red
}

if (Test-Path $heroJson) {
    Write-Host "✅ $heroJson exists" -ForegroundColor Green
} else {
    Write-Host "❌ $heroJson NOT FOUND" -ForegroundColor Red
}

Write-Host ""

# Step 3: Check Header block files
Write-Host "[3/4] Checking Header block files..." -ForegroundColor Yellow
$headerJs = "blocks\header\header.js"
$headerCss = "blocks\header\header.css"
$headerJson = "blocks\header\_header.json"

if (Test-Path $headerJs) {
    Write-Host "✅ $headerJs exists" -ForegroundColor Green
} else {
    Write-Host "❌ $headerJs NOT FOUND" -ForegroundColor Red
}

if (Test-Path $headerCss) {
    Write-Host "✅ $headerCss exists" -ForegroundColor Green
} else {
    Write-Host "❌ $headerCss NOT FOUND" -ForegroundColor Red
}

if (Test-Path $headerJson) {
    Write-Host "✅ $headerJson exists" -ForegroundColor Green
} else {
    Write-Host "❌ $headerJson NOT FOUND" -ForegroundColor Red
}

Write-Host ""

# Step 4: Verify modifications
Write-Host "[4/4] Verifying code modifications..." -ForegroundColor Yellow

# Check Hero.js for the new strategies
$heroContent = Get-Content $heroJs -Raw
if ($heroContent -match "Strategy 1:.*data-aue-prop") {
    Write-Host "✅ Hero: Strategy 1 (data-aue-prop) found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Hero: Strategy 1 not found" -ForegroundColor Yellow
}

if ($heroContent -match "Strategy 2:.*cell position") {
    Write-Host "✅ Hero: Strategy 2 (cell position) found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Hero: Strategy 2 not found" -ForegroundColor Yellow
}

if ($heroContent -match "Strategy 3:.*all divs") {
    Write-Host "✅ Hero: Strategy 3 (all divs) found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Hero: Strategy 3 not found" -ForegroundColor Yellow
}

# Check Header.js for console.log
$headerContent = Get-Content $headerJs -Raw
if ($headerContent -match "console\.log\('Header Config:") {
    Write-Host "✅ Header: Debug console.log found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Header: Debug console.log not found" -ForegroundColor Yellow
}

if ($headerContent -match "Strategy 1:") {
    Write-Host "✅ Header: Strategy 1 found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Header: Strategy 1 not found" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✅ Validation Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "  1. Commit changes: git add . && git commit -m 'fix: Hero & Header Universal Editor integration'" -ForegroundColor White
Write-Host "  2. Push to repo: git push" -ForegroundColor White
Write-Host "  3. Test in Universal Editor (see HEADER_HERO_FIX_GUIDE.md)" -ForegroundColor White
Write-Host "  4. Validate visually in browser (MANDATORY)" -ForegroundColor Yellow
Write-Host ""

u
