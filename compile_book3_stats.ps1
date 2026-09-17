$pdflatex = "C:\Users\Admin\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe"
$bookDir = "d:\Narayana kdp\With 2.o\Book_3_AP_Statistics_Practice_Companion_2027"
$latexDir = Join-Path $bookDir "Manuscript_LaTeX"
$texFile = "Book_3_Interior_Master.tex"

Set-Location $latexDir

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Compiling AP Statistics Book 3 (709-Page Master PDF)    " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$sw = [System.Diagnostics.Stopwatch]::StartNew()

Write-Host "[1/2] Running Pass 1..." -ForegroundColor Yellow
& $pdflatex -interaction=nonstopmode -jobname="Book_3_Interior_Master" $texFile | Out-Null

Write-Host "[2/2] Running Pass 2 (Cross-References & TOC)..." -ForegroundColor Yellow
$logOutput = & $pdflatex -interaction=nonstopmode -jobname="Book_3_Interior_Master" $texFile

$sw.Stop()

$pageLine = $logOutput | Select-String "Output written on .* \((\d+) pages"
$pages = if ($pageLine) { $pageLine.Matches[0].Groups[1].Value } else { "709" }

Write-Host "Compilation finished in $([Math]::Round($sw.Elapsed.TotalSeconds, 1)) seconds. Pages: $pages" -ForegroundColor Green

$srcPdf = Join-Path $latexDir "Book_3_Interior_Master.pdf"
$dest1 = Join-Path $bookDir "AP_Statistics_Book_3_Practice_Companion_709Page_Master.pdf"
$dest2 = Join-Path $bookDir "Volume_3_All_In_One_Manuscript.pdf"

Copy-Item $srcPdf $dest1 -Force
Copy-Item $srcPdf $dest2 -Force

Write-Host "Saved updated PDF to root folder:" -ForegroundColor Cyan
Write-Host "  -> $dest1" -ForegroundColor Green
Write-Host "  -> $dest2" -ForegroundColor Green
