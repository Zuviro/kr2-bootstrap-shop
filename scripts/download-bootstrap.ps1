$ErrorActionPreference = 'Stop'
$Version = '5.3.3'
$BaseUrl = "https://cdn.jsdelivr.net/npm/bootstrap@$Version"

New-Item -ItemType Directory -Force -Path "vendor/bootstrap/css", "vendor/bootstrap/js" | Out-Null

Write-Host "Downloading Bootstrap CSS..."
Invoke-WebRequest -Uri "$BaseUrl/dist/css/bootstrap.min.css" -OutFile "vendor/bootstrap/css/bootstrap.min.css"

Write-Host "Downloading Bootstrap JS..."
Invoke-WebRequest -Uri "$BaseUrl/dist/js/bootstrap.bundle.min.js" -OutFile "vendor/bootstrap/js/bootstrap.bundle.min.js"