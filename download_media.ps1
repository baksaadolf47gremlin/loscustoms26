$targetDir = "C:\Users\Asus\Desktop\loscustoms26\loscustoms kepek es videok"

$urls = @(
    "https://loscustoms.hu/wp-content/uploads/2026/02/Larissza.mp4",
    "https://loscustoms.hu/wp-content/uploads/2026/02/hellyeah.mp4",
    "https://loscustoms.hu/wp-content/uploads/2026/02/Comp-1_2.mp4",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_103_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_102_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_101_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_100_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_99_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_98_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_97_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_96_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_95_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_94_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_93_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_92_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_91_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/image_126_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/image_125_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_77_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_76_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_75_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_74_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_73_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_72_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_71_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_70_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_69_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_68_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_67_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_66_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_65_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_64_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_63_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_62_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_61_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_60_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/02/group_59_1x.webp",
    "https://loscustoms.hu/wp-content/uploads/2026/01/ChatGPT-Image-2026.-jan.-21.-19_52_10-1-2.png",
    "https://loscustoms.hu/wp-content/uploads/2026/01/ChatGPT-Image-2026.-jan.-21.-19_52_10-1-1.png",
    "https://loscustoms.hu/wp-content/uploads/2026/01/ChatGPT-Image-2026.-jan.-21.-19_52_10-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Nagy-Racsos-Hatter-1-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-37-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Telos-Map-2.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Telos-Map-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-33-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-32-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Telos-Map.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-30-2.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/TESZT-KEP-002.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/TESZT-KEP.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-33-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-33.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-48.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-49.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-44-3.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-44-2.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/ChatGPT_Image_2025._jun._24._12_41_48_2__1_-removebg-preview-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/ChatGPT_Image_2025._jun._24._12_34_06_2__1_-removebg-preview-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/ChatGPT-Image-2025.-jul.-15.-21_45_34-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-17.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Firefly_logo_84403_1-removebg-preview-3.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-31-1-e1753545468774.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Nagy-Racsos-Hatter-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-30-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-43-e1753564268674.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Frame-14-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-29.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-27-1-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-20-2-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-25-1-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-28.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Racsos-Hatter-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-24-3-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-22-1-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-21-1-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-15-2.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-14-3.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-13-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-12-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-14-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-11.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-12-2.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/Group-11-1.png",
    "https://loscustoms.hu/wp-content/uploads/2025/07/image-10.png"
)

$total = $urls.Count
$index = 0

foreach ($url in $urls) {
    $index++
    $fileName = [System.IO.Path]::GetFileName($url)
    $destPath = Join-Path $targetDir $fileName
    
    try {
        Write-Host "[$index/$total] Letöltés: $fileName"
        Invoke-WebRequest -Uri $url -OutFile $destPath -UseBasicParsing
        Write-Host "  OK: $fileName" -ForegroundColor Green
    } catch {
        Write-Host "  HIBA: $fileName - $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Letöltés kész! $total fájl feldolgozva." -ForegroundColor Cyan
