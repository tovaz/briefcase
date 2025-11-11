/**
 * ============================================
 * ANIMATED BACKGROUNDS CONFIG
 * ============================================
 * Configuración de fondos animados inspirados en:
 * - iOS & macOS (glassmorphism, blur effects)
 * - Material Design (elevation, gradients)
 * - Flutter (hero animations, morphing shapes)
 */

export interface BackgroundConfig {
  name: string;
  svgPattern?: string;
  gradients?: string;
  animation?: string;
  animationDuration?: string;
  opacity?: number;
  blur?: number;
}

export const BACKGROUND_STYLES: { [key: string]: BackgroundConfig } = {
  // ============================================
  // MATERIAL DESIGN - Círculos con gradientes
  // ============================================
  material: {
    name: 'Material Design',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(156,39,176);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(103,58,183);stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(33,150,243);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(3,169,244);stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,87,34);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(244,67,54);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='10' cy='10' r='8' fill='url(%23grad1)' /%3E%3Ccircle cx='50' cy='30' r='6' fill='url(%23grad2)' /%3E%3Ccircle cx='80' cy='15' r='5' fill='url(%23grad3)' /%3E%3Ccircle cx='30' cy='70' r='7' fill='url(%23grad2)' /%3E%3Ccircle cx='70' cy='80' r='9' fill='url(%23grad1)' /%3E%3Ccircle cx='90' cy='60' r='4' fill='url(%23grad3)' /%3E%3C/svg%3E")`,
    animation: 'moveBackground',
    animationDuration: '60s',
    opacity: 0.15,
    blur: 1,
    gradients: `radial-gradient(circle at 10% 20%, rgba(156, 39, 176, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(33, 150, 243, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.06) 0%, transparent 50%)`
  },

  // ============================================
  // iOS - Glassmorphism con mesh gradient
  // ============================================
  ios: {
    name: 'iOS Glassmorphism',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='iosGrad1'%3E%3Cstop offset='0%25' style='stop-color:rgb(0,122,255);stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:rgb(88,86,214);stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='iosGrad2'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,45,85);stop-opacity:0.7' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,159,10);stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='iosGrad3'%3E%3Cstop offset='0%25' style='stop-color:rgb(48,209,88);stop-opacity:0.6' /%3E%3Cstop offset='100%25' style='stop-color:rgb(100,210,255);stop-opacity:0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='50' cy='40' rx='60' ry='50' fill='url(%23iosGrad1)' /%3E%3Cellipse cx='150' cy='100' rx='70' ry='60' fill='url(%23iosGrad2)' /%3E%3Cellipse cx='100' cy='160' rx='50' ry='40' fill='url(%23iosGrad3)' /%3E%3C/svg%3E")`,
    animation: 'iosFloat',
    animationDuration: '20s',
    opacity: 0.3,
    blur: 60,
    gradients: `radial-gradient(circle at 20% 30%, rgba(0, 122, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 45, 85, 0.12) 0%, transparent 50%)`
  },

  // ============================================
  // macOS - Dynamic wallpaper style
  // ============================================
  macos: {
    name: 'macOS Dynamic',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='macGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,100,200);stop-opacity:0.4' /%3E%3Cstop offset='50%25' style='stop-color:rgb(120,100,255);stop-opacity:0.3' /%3E%3Cstop offset='100%25' style='stop-color:rgb(100,200,255);stop-opacity:0.4' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,150 Q75,50 150,150 T300,150' stroke='url(%23macGrad1)' stroke-width='100' fill='none' opacity='0.3' /%3E%3Cpath d='M0,100 Q100,200 200,100 T400,100' stroke='url(%23macGrad1)' stroke-width='80' fill='none' opacity='0.2' /%3E%3C/svg%3E")`,
    animation: 'macosWave',
    animationDuration: '30s',
    opacity: 0.25,
    blur: 40,
    gradients: `linear-gradient(135deg, rgba(255, 100, 200, 0.08) 0%, transparent 50%),
                linear-gradient(-45deg, rgba(100, 200, 255, 0.08) 0%, transparent 50%)`
  },

  // ============================================
  // FLUTTER - Geometric shapes morphing
  // ============================================
  flutter: {
    name: 'Flutter Shapes',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='flutterGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(2,136,209);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(69,202,252);stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='flutterGrad2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(13,71,161);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(2,136,209);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='50,10 90,90 10,90' fill='url(%23flutterGrad1)' opacity='0.6' /%3E%3Cpolygon points='150,50 190,130 110,130' fill='url(%23flutterGrad2)' opacity='0.5' /%3E%3Crect x='20' y='120' width='60' height='60' rx='10' fill='url(%23flutterGrad1)' opacity='0.4' /%3E%3Ccircle cx='160' cy='30' r='20' fill='url(%23flutterGrad2)' opacity='0.5' /%3E%3C/svg%3E")`,
    animation: 'flutterMorph',
    animationDuration: '25s',
    opacity: 0.18,
    blur: 2,
    gradients: `radial-gradient(circle at 30% 40%, rgba(2, 136, 209, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(13, 71, 161, 0.08) 0%, transparent 50%)`
  },

  // ============================================
  // NORDIC - Minimal geometric
  // ============================================
  nordic: {
    name: 'Nordic Minimal',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='nordGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(136,192,208);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(94,129,172);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='url(%23nordGrad)' stroke-width='0.5' opacity='0.3' /%3E%3Cline x1='100' y1='0' x2='0' y2='100' stroke='url(%23nordGrad)' stroke-width='0.5' opacity='0.3' /%3E%3Ccircle cx='50' cy='50' r='3' fill='url(%23nordGrad)' opacity='0.4' /%3E%3C/svg%3E")`,
    animation: 'nordicDrift',
    animationDuration: '40s',
    opacity: 0.12,
    blur: 0.5,
    gradients: `linear-gradient(135deg, rgba(136, 192, 208, 0.05) 0%, transparent 60%),
                linear-gradient(-135deg, rgba(94, 129, 172, 0.05) 0%, transparent 60%)`
  },

  // ============================================
  // AURORA - Northern lights inspired
  // ============================================
  aurora: {
    name: 'Aurora Borealis',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='aurora1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(26,188,156);stop-opacity:0.6' /%3E%3Cstop offset='50%25' style='stop-color:rgb(52,152,219);stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:rgb(142,68,173);stop-opacity:0.6' /%3E%3C/linearGradient%3E%3ClinearGradient id='aurora2' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(52,152,219);stop-opacity:0.5' /%3E%3Cstop offset='50%25' style='stop-color:rgb(155,89,182);stop-opacity:0.3' /%3E%3Cstop offset='100%25' style='stop-color:rgb(26,188,156);stop-opacity:0.5' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,100 Q100,20 200,100 T400,100' fill='url(%23aurora1)' opacity='0.5' /%3E%3Cpath d='M0,80 Q100,140 200,80 T400,80' fill='url(%23aurora2)' opacity='0.4' /%3E%3C/svg%3E")`,
    animation: 'auroraFlow',
    animationDuration: '35s',
    opacity: 0.2,
    blur: 30,
    gradients: `radial-gradient(ellipse at 30% 50%, rgba(26, 188, 156, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 50%, rgba(142, 68, 173, 0.1) 0%, transparent 50%)`
  },

  // ============================================
  // NEON - Cyberpunk vibes
  // ============================================
  neon: {
    name: 'Neon Grid',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='neonGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,0,255);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(0,255,255);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='url(%23neonGrad1)' stroke-width='0.5' opacity='0.4' /%3E%3Cpath d='M50,0 L50,100' stroke='url(%23neonGrad1)' stroke-width='0.3' opacity='0.3' /%3E%3Cpath d='M0,50 L100,50' stroke='url(%23neonGrad1)' stroke-width='0.3' opacity='0.3' /%3E%3Ccircle cx='50' cy='50' r='5' fill='url(%23neonGrad1)' opacity='0.6' /%3E%3C/svg%3E")`,
    animation: 'neonPulse',
    animationDuration: '15s',
    opacity: 0.25,
    blur: 1.5,
    gradients: `radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.08) 0%, transparent 70%)`
  },

  // ============================================
  // GRADIENT MESH - Modern abstract
  // ============================================
  mesh: {
    name: 'Gradient Mesh',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='mesh1'%3E%3Cstop offset='0%25' style='stop-color:rgb(251,113,133);stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:rgb(217,70,239);stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='mesh2'%3E%3Cstop offset='0%25' style='stop-color:rgb(96,165,250);stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:rgb(147,51,234);stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='mesh3'%3E%3Cstop offset='0%25' style='stop-color:rgb(34,211,238);stop-opacity:0.7' /%3E%3Cstop offset='100%25' style='stop-color:rgb(59,130,246);stop-opacity:0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='80' fill='url(%23mesh1)' /%3E%3Ccircle cx='140' cy='80' r='90' fill='url(%23mesh2)' /%3E%3Ccircle cx='100' cy='150' r='70' fill='url(%23mesh3)' /%3E%3C/svg%3E")`,
    animation: 'meshFloat',
    animationDuration: '25s',
    opacity: 0.22,
    blur: 50,
    gradients: `radial-gradient(circle at 25% 25%, rgba(251, 113, 133, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)`
  },

  // ============================================
  // MATERIAL DESIGN 2 - Waves con elevation
  // ============================================
  materialWaves: {
    name: 'Material Waves',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='matWave1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(0,150,136);stop-opacity:0.6' /%3E%3Cstop offset='50%25' style='stop-color:rgb(0,188,212);stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:rgb(63,81,181);stop-opacity:0.6' /%3E%3C/linearGradient%3E%3ClinearGradient id='matWave2' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(121,134,203);stop-opacity:0.5' /%3E%3Cstop offset='50%25' style='stop-color:rgb(0,150,136);stop-opacity:0.3' /%3E%3Cstop offset='100%25' style='stop-color:rgb(0,188,212);stop-opacity:0.5' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,80 Q100,20 200,80 T400,80' fill='url(%23matWave1)' opacity='0.5' /%3E%3Cpath d='M0,120 Q100,160 200,120 T400,120' fill='url(%23matWave2)' opacity='0.4' /%3E%3Cpath d='M0,100 Q50,60 100,100 T200,100 T300,100 T400,100' stroke='url(%23matWave1)' stroke-width='2' fill='none' opacity='0.6' /%3E%3C/svg%3E")`,
    animation: 'materialWaveFlow',
    animationDuration: '28s',
    opacity: 0.16,
    blur: 3,
    gradients: `radial-gradient(circle at 25% 40%, rgba(0, 150, 136, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 75% 60%, rgba(63, 81, 181, 0.08) 0%, transparent 50%)`
  },

  // ============================================
  // MATERIAL DESIGN 3 - Hexagonal pattern
  // ============================================
  materialHex: {
    name: 'Material Hexagon',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='87' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='hexGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(103,58,183);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(156,39,176);stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='hexGrad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(233,30,99);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(244,67,54);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M50,0 L93.3,25 L93.3,62 L50,87 L6.7,62 L6.7,25 Z' fill='none' stroke='url(%23hexGrad1)' stroke-width='1' opacity='0.4' /%3E%3Ccircle cx='50' cy='43.5' r='8' fill='url(%23hexGrad2)' opacity='0.3' /%3E%3C/svg%3E")`,
    animation: 'hexagonSpin',
    animationDuration: '45s',
    opacity: 0.14,
    blur: 1.5,
    gradients: `radial-gradient(circle at 15% 25%, rgba(103, 58, 183, 0.06) 0%, transparent 40%),
                radial-gradient(circle at 85% 75%, rgba(233, 30, 99, 0.06) 0%, transparent 40%)`
  },

  // ============================================
  // FLUENT DESIGN - Acrylic effect
  // ============================================
  fluent: {
    name: 'Fluent Acrylic',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='fluentGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(0,120,212);stop-opacity:0.7' /%3E%3Cstop offset='100%25' style='stop-color:rgb(0,90,158);stop-opacity:0.4' /%3E%3C/linearGradient%3E%3ClinearGradient id='fluentGrad2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(16,124,16);stop-opacity:0.6' /%3E%3Cstop offset='100%25' style='stop-color:rgb(0,120,212);stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='10' y='10' width='80' height='80' rx='4' fill='url(%23fluentGrad1)' opacity='0.4' /%3E%3Crect x='110' y='60' width='70' height='70' rx='4' fill='url(%23fluentGrad2)' opacity='0.35' /%3E%3Crect x='60' y='110' width='60' height='60' rx='4' fill='url(%23fluentGrad1)' opacity='0.3' /%3E%3Ccircle cx='150' cy='30' r='25' fill='url(%23fluentGrad2)' opacity='0.4' /%3E%3C/svg%3E")`,
    animation: 'fluentGlow',
    animationDuration: '32s',
    opacity: 0.2,
    blur: 40,
    gradients: `radial-gradient(circle at 30% 30%, rgba(0, 120, 212, 0.12) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(16, 124, 16, 0.1) 0%, transparent 50%)`
  },

  // ============================================
  // FLUENT DESIGN 2 - Mica effect
  // ============================================
  fluentMica: {
    name: 'Fluent Mica',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='micaGrad1'%3E%3Cstop offset='0%25' style='stop-color:rgb(0,120,212);stop-opacity:0.3' /%3E%3Cstop offset='100%25' style='stop-color:rgb(16,110,190);stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='micaGrad2'%3E%3Cstop offset='0%25' style='stop-color:rgb(135,100,184);stop-opacity:0.25' /%3E%3Cstop offset='100%25' style='stop-color:rgb(0,120,212);stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='micaGrad3'%3E%3Cstop offset='0%25' style='stop-color:rgb(16,124,16);stop-opacity:0.2' /%3E%3Cstop offset='100%25' style='stop-color:rgb(76,194,255);stop-opacity:0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='80' cy='80' rx='100' ry='80' fill='url(%23micaGrad1)' /%3E%3Cellipse cx='220' cy='140' rx='90' ry='110' fill='url(%23micaGrad2)' /%3E%3Cellipse cx='150' cy='220' rx='80' ry='70' fill='url(%23micaGrad3)' /%3E%3Crect x='20' y='20' width='260' height='260' fill='none' stroke='url(%23micaGrad1)' stroke-width='0.5' opacity='0.2' rx='8' /%3E%3C/svg%3E")`,
    animation: 'micaShimmer',
    animationDuration: '38s',
    opacity: 0.18,
    blur: 50,
    gradients: `linear-gradient(135deg, rgba(0, 120, 212, 0.06) 0%, transparent 50%),
                linear-gradient(-45deg, rgba(135, 100, 184, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(16, 124, 16, 0.04) 0%, transparent 60%)`
  },

  // ============================================
  // GRID - Minimal grid lines
  // ============================================
  grid: {
    name: 'Minimal Grid',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='gridPattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(99,102,241,0.15)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23gridPattern)' /%3E%3Ccircle cx='50' cy='50' r='2' fill='rgba(139,92,246,0.3)' /%3E%3C/svg%3E")`,
    animation: 'gridFade',
    animationDuration: '20s',
    opacity: 0.2,
    blur: 0.5,
    gradients: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)`
  },

  // ============================================
  // DOT GRID - Blueprint style
  // ============================================
  dotGrid: {
    name: 'Dot Grid',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='dotGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(59,130,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(147,51,234);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='2' cy='2' r='1' fill='url(%23dotGrad)' opacity='0.3' /%3E%3Ccircle cx='20' cy='20' r='1.5' fill='url(%23dotGrad)' opacity='0.4' /%3E%3C/svg%3E")`,
    animation: 'dotPulse',
    animationDuration: '25s',
    opacity: 0.18,
    blur: 0.3,
    gradients: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.06) 0%, transparent 50%)`
  },

  // ============================================
  // CIRCUIT - Tech circuit board
  // ============================================
  circuit: {
    name: 'Circuit Board',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='circuitGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(16,185,129);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(5,150,105);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,25 L25,25 L25,0' stroke='url(%23circuitGrad)' stroke-width='0.5' fill='none' opacity='0.3' /%3E%3Cpath d='M50,50 L75,50 L75,25 L100,25' stroke='url(%23circuitGrad)' stroke-width='0.5' fill='none' opacity='0.3' /%3E%3Cpath d='M25,75 L50,75 L50,100' stroke='url(%23circuitGrad)' stroke-width='0.5' fill='none' opacity='0.3' /%3E%3Ccircle cx='25' cy='25' r='2' fill='url(%23circuitGrad)' opacity='0.5' /%3E%3Ccircle cx='75' cy='50' r='2' fill='url(%23circuitGrad)' opacity='0.5' /%3E%3Ccircle cx='50' cy='75' r='2' fill='url(%23circuitGrad)' opacity='0.5' /%3E%3C/svg%3E")`,
    animation: 'circuitFlow',
    animationDuration: '30s',
    opacity: 0.15,
    blur: 0.5,
    gradients: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.06) 0%, transparent 50%)`
  },

  // ============================================
  // ISOMETRIC GRID - 3D-like grid
  // ============================================
  isometric: {
    name: 'Isometric Grid',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='87' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='isoGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(124,58,237);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(79,70,229);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,43.5 L50,0 L100,43.5' stroke='url(%23isoGrad)' stroke-width='0.5' fill='none' opacity='0.25' /%3E%3Cpath d='M0,43.5 L50,87 L100,43.5' stroke='url(%23isoGrad)' stroke-width='0.5' fill='none' opacity='0.25' /%3E%3Cpath d='M50,0 L50,87' stroke='url(%23isoGrad)' stroke-width='0.5' opacity='0.2' /%3E%3C/svg%3E")`,
    animation: 'isometricShift',
    animationDuration: '35s',
    opacity: 0.16,
    blur: 0.4,
    gradients: `linear-gradient(60deg, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
                linear-gradient(-60deg, rgba(79, 70, 229, 0.05) 0%, transparent 50%)`
  },

  // ============================================
  // DIAGONAL STRIPES - Subtle lines
  // ============================================
  stripes: {
    name: 'Diagonal Stripes',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='stripeGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(236,72,153);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(219,39,119);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,0 L60,60 M-15,15 L45,75 M15,-15 L75,45' stroke='url(%23stripeGrad)' stroke-width='0.5' opacity='0.15' /%3E%3C/svg%3E")`,
    animation: 'stripeSlide',
    animationDuration: '40s',
    opacity: 0.12,
    blur: 0.3,
    gradients: `linear-gradient(45deg, rgba(236, 72, 153, 0.04) 0%, transparent 50%),
                linear-gradient(-45deg, rgba(219, 39, 119, 0.04) 0%, transparent 50%)`
  },

  // ============================================
  // CROSSHATCH - Woven pattern
  // ============================================
  crosshatch: {
    name: 'Crosshatch',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='crossGrad1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(14,165,233);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(6,182,212);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,20 L80,20 M0,40 L80,40 M0,60 L80,60' stroke='url(%23crossGrad1)' stroke-width='0.3' opacity='0.2' /%3E%3Cpath d='M20,0 L20,80 M40,0 L40,80 M60,0 L60,80' stroke='url(%23crossGrad1)' stroke-width='0.3' opacity='0.2' /%3E%3Ccircle cx='20' cy='20' r='1.5' fill='url(%23crossGrad1)' opacity='0.3' /%3E%3Ccircle cx='60' cy='60' r='1.5' fill='url(%23crossGrad1)' opacity='0.3' /%3E%3C/svg%3E")`,
    animation: 'crosshatchWeave',
    animationDuration: '32s',
    opacity: 0.14,
    blur: 0.4,
    gradients: `radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)`
  },

  // ============================================
  // BLUEPRINT - Technical drawing style
  // ============================================
  blueprint: {
    name: 'Blueprint',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='blueprintGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(59,130,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(37,99,235);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='url(%23blueprintGrad)' stroke-width='0.5' opacity='0.2' /%3E%3Cpath d='M25,0 L25,100 M50,0 L50,100 M75,0 L75,100' stroke='url(%23blueprintGrad)' stroke-width='0.3' opacity='0.15' /%3E%3Cpath d='M0,25 L100,25 M0,50 L100,50 M0,75 L100,75' stroke='url(%23blueprintGrad)' stroke-width='0.3' opacity='0.15' /%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='url(%23blueprintGrad)' stroke-width='0.5' opacity='0.2' /%3E%3Cpath d='M40,40 L60,60 M60,40 L40,60' stroke='url(%23blueprintGrad)' stroke-width='0.5' opacity='0.25' /%3E%3C/svg%3E")`,
    animation: 'blueprintScan',
    animationDuration: '28s',
    opacity: 0.15,
    blur: 0.3,
    gradients: `linear-gradient(0deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                linear-gradient(90deg, rgba(37, 99, 235, 0.05) 0%, transparent 50%)`
  },

  // ============================================
  // MONOCHROME GRID - Clean minimal
  // ============================================
  monoGrid: {
    name: 'Monochrome Grid',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='monoGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(100,116,139);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(71,85,105);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='50' height='50' fill='none' stroke='url(%23monoGrad)' stroke-width='0.5' opacity='0.15' /%3E%3Cpath d='M0,25 L50,25 M25,0 L25,50' stroke='url(%23monoGrad)' stroke-width='0.3' opacity='0.12' /%3E%3Ccircle cx='25' cy='25' r='1' fill='url(%23monoGrad)' opacity='0.2' /%3E%3C/svg%3E")`,
    animation: 'monoFade',
    animationDuration: '45s',
    opacity: 0.1,
    blur: 0.2,
    gradients: `radial-gradient(circle at 50% 50%, rgba(100, 116, 139, 0.04) 0%, transparent 60%)`
  },

  // ============================================
  // CODE - Development symbols
  // ============================================
  code: {
    name: 'Code Symbols',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='codeGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(16,185,129);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(5,150,105);stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='codeGrad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(59,130,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(37,99,235);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3C!-- Brackets <> --%3E%3Cpath d='M15,30 L5,40 L15,50' stroke='url(%23codeGrad1)' stroke-width='1.5' fill='none' opacity='1' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M25,30 L35,40 L25,50' stroke='url(%23codeGrad1)' stroke-width='1.5' fill='none' opacity='1' stroke-linecap='round' stroke-linejoin='round' /%3E%3C!-- Curly braces {} --%3E%3Cpath d='M50,28 Q48,30 48,32 L48,36 Q48,38 46,40 Q48,42 48,44 L48,48 Q48,50 50,52' stroke='url(%23codeGrad2)' stroke-width='1.2' fill='none' opacity='1' stroke-linecap='round' /%3E%3Cpath d='M58,28 Q60,30 60,32 L60,36 Q60,38 62,40 Q60,42 60,44 L60,48 Q60,50 58,52' stroke='url(%23codeGrad2)' stroke-width='1.2' fill='none' opacity='1' stroke-linecap='round' /%3E%3C!-- Forward slash / --%3E%3Cpath d='M75,50 L85,30' stroke='url(%23codeGrad1)' stroke-width='1.5' opacity='0.8' stroke-linecap='round' /%3E%3C!-- Semicolon ; --%3E%3Ccircle cx='95' cy='35' r='1.5' fill='url(%23codeGrad2)' opacity='1' /%3E%3Cpath d='M95,40 Q94,43 93,45' stroke='url(%23codeGrad2)' stroke-width='1.2' fill='none' opacity='1' stroke-linecap='round' /%3E%3C!-- Function symbol fn --%3E%3Ctext x='10' y='85' font-family='monospace' font-size='12' fill='url(%23codeGrad1)' opacity='0.8'%3Efn%3C/text%3E%3C!-- Arrow => --%3E%3Cpath d='M35,80 L45,80 M42,77 L45,80 L42,83' stroke='url(%23codeGrad2)' stroke-width='1.2' opacity='0.8' stroke-linecap='round' stroke-linejoin='round' /%3E%3C!-- Git branch --%3E%3Ccircle cx='65' cy='75' r='2' fill='none' stroke='url(%23codeGrad1)' stroke-width='1' opacity='1' /%3E%3Cpath d='M65,77 L65,85 M65,82 L70,82' stroke='url(%23codeGrad1)' stroke-width='1' opacity='1' stroke-linecap='round' /%3E%3Ccircle cx='70' cy='82' r='1.5' fill='url(%23codeGrad1)' opacity='1' /%3E%3C!-- Terminal prompt > --%3E%3Cpath d='M85,75 L90,80 L85,85' stroke='url(%23codeGrad2)' stroke-width='1.5' fill='none' opacity='0.8' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M95,85 L105,85' stroke='url(%23codeGrad2)' stroke-width='1.2' opacity='0.6' stroke-linecap='round' /%3E%3C/svg%3E")`,
    animation: 'codeGlitch',
    animationDuration: '35s',
    opacity: 0.16,
    blur: 0.5,
    gradients: `radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)`
  },

  // ============================================
  // TECH - Technology icons
  // ============================================
  tech: {
    name: 'Tech Icons',
    svgPattern: `url("data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='techGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(139,92,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(124,58,237);stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='techGrad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(236,72,153);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(219,39,119);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3C!-- CPU/Chip --%3E%3Crect x='10' y='10' width='20' height='20' rx='2' fill='none' stroke='url(%23techGrad1)' stroke-width='1' opacity='1' /%3E%3Cpath d='M10,15 L7,15 M10,20 L7,20 M10,25 L7,25' stroke='url(%23techGrad1)' stroke-width='0.8' opacity='0.8' /%3E%3Cpath d='M30,15 L33,15 M30,20 L33,20 M30,25 L33,25' stroke='url(%23techGrad1)' stroke-width='0.8' opacity='0.8' /%3E%3Crect x='15' y='15' width='10' height='10' fill='url(%23techGrad1)' opacity='0.5' /%3E%3C!-- Database --%3E%3Cellipse cx='50' cy='15' rx='10' ry='4' fill='none' stroke='url(%23techGrad2)' stroke-width='1' opacity='1' /%3E%3Cpath d='M40,15 L40,25 M60,15 L60,25' stroke='url(%23techGrad2)' stroke-width='1' opacity='1' /%3E%3Cellipse cx='50' cy='25' rx='10' ry='4' fill='none' stroke='url(%23techGrad2)' stroke-width='1' opacity='1' /%3E%3Cellipse cx='50' cy='20' rx='10' ry='4' fill='none' stroke='url(%23techGrad2)' stroke-width='1' opacity='0.6' /%3E%3C!-- Cloud --%3E%3Cpath d='M80,18 Q78,15 75,15 Q72,15 70,18 Q68,16 65,16 Q62,16 60,19 Q60,23 63,25 L87,25 Q90,23 90,20 Q90,17 87,16 Q85,14 82,15 Q81,16 80,18 Z' fill='none' stroke='url(%23techGrad1)' stroke-width='1' opacity='1' /%3E%3C!-- API/Network nodes --%3E%3Ccircle cx='15' cy='50' r='3' fill='url(%23techGrad2)' opacity='1' /%3E%3Ccircle cx='30' cy='55' r='3' fill='url(%23techGrad2)' opacity='1' /%3E%3Ccircle cx='25' cy='65' r='3' fill='url(%23techGrad2)' opacity='1' /%3E%3Cpath d='M17,52 L27,54 M28,57 L26,62' stroke='url(%23techGrad2)' stroke-width='0.8' opacity='0.8' /%3E%3C!-- Gear/Settings --%3E%3Ccircle cx='65' cy='60' r='8' fill='none' stroke='url(%23techGrad1)' stroke-width='1' opacity='1' /%3E%3Ccircle cx='65' cy='60' r='4' fill='none' stroke='url(%23techGrad1)' stroke-width='1' opacity='1' /%3E%3Cpath d='M65,52 L65,54 M65,66 L65,68 M73,60 L71,60 M59,60 L57,60' stroke='url(%23techGrad1)' stroke-width='1.5' opacity='0.8' /%3E%3C!-- Code brackets --%3E%3Cpath d='M95,55 L90,60 L95,65' stroke='url(%23techGrad2)' stroke-width='1.5' fill='none' opacity='1' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M100,55 L105,60 L100,65' stroke='url(%23techGrad2)' stroke-width='1.5' fill='none' opacity='1' stroke-linecap='round' stroke-linejoin='round' /%3E%3C!-- Server rack --%3E%3Crect x='10' y='85' width='25' height='18' rx='2' fill='none' stroke='url(%23techGrad1)' stroke-width='1' opacity='1' /%3E%3Cpath d='M10,91 L35,91 M10,97 L35,97' stroke='url(%23techGrad1)' stroke-width='0.8' opacity='0.8' /%3E%3Ccircle cx='30' cy='88' r='1' fill='url(%23techGrad1)' opacity='1' /%3E%3Ccircle cx='30' cy='94' r='1' fill='url(%23techGrad1)' opacity='1' /%3E%3Ccircle cx='30' cy='100' r='1' fill='url(%23techGrad1)' opacity='1' /%3E%3C!-- Mobile device --%3E%3Crect x='50' y='85' width='15' height='25' rx='2' fill='none' stroke='url(%23techGrad2)' stroke-width='1' opacity='1' /%3E%3Cpath d='M50,90 L65,90 M50,105 L65,105' stroke='url(%23techGrad2)' stroke-width='0.8' opacity='0.6' /%3E%3Ccircle cx='57.5' cy='107.5' r='1' fill='url(%23techGrad2)' opacity='1' /%3E%3C!-- Lock/Security --%3E%3Crect x='85' y='95' width='15' height='12' rx='1' fill='none' stroke='url(%23techGrad1)' stroke-width='1' opacity='1' /%3E%3Cpath d='M88,95 L88,90 Q88,85 92.5,85 Q97,85 97,90 L97,95' stroke='url(%23techGrad1)' stroke-width='1' fill='none' opacity='1' /%3E%3Ccircle cx='92.5' cy='101' r='1.5' fill='url(%23techGrad1)' opacity='1' /%3E%3C!-- Arrow deployment --%3E%3Cpath d='M115,95 L125,95 M122,92 L125,95 L122,98' stroke='url(%23techGrad2)' stroke-width='1.2' opacity='0.8' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E")`,
    animation: 'techPulse',
    animationDuration: '42s',
    opacity: 0.14,
    blur: 0.4,
    gradients: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)`
  }
};

// ============================================
// KEYFRAME ANIMATIONS
// ============================================
export const BACKGROUND_ANIMATIONS = `
@keyframes moveBackground {
  0% { background-position: 0 0; }
  100% { background-position: 200px 200px; }
}

@keyframes iosFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes macosWave {
  0%, 100% { transform: translateY(0) scaleX(1); }
  50% { transform: translateY(-30px) scaleX(1.1); }
}

@keyframes flutterMorph {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(0.9); }
  75% { transform: rotate(270deg) scale(1.05); }
}

@keyframes nordicDrift {
  0% { background-position: 0 0; }
  100% { background-position: 100px 100px; }
}

@keyframes auroraFlow {
  0%, 100% { transform: translateX(0) scaleY(1); }
  50% { transform: translateX(50px) scaleY(1.2); }
}

@keyframes neonPulse {
  0%, 100% { opacity: var(--bg-opacity, 0.25); filter: brightness(1); }
  50% { opacity: calc(var(--bg-opacity, 0.25) * 1.3); filter: brightness(1.2); }
}

@keyframes meshFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(5deg); }
  66% { transform: translate(-30px, 30px) rotate(-5deg); }
}

@keyframes materialWaveFlow {
  0%, 100% { transform: translateX(0) scaleY(1); }
  50% { transform: translateX(40px) scaleY(1.15); }
}

@keyframes hexagonSpin {
  0% { transform: rotate(0deg) scale(1); background-position: 0 0; }
  50% { transform: rotate(180deg) scale(1.05); background-position: 50px 43.5px; }
  100% { transform: rotate(360deg) scale(1); background-position: 0 0; }
}

@keyframes fluentGlow {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: var(--bg-opacity, 0.2); }
  50% { transform: translate(15px, -15px) scale(1.08); opacity: calc(var(--bg-opacity, 0.2) * 1.2); }
}

@keyframes micaShimmer {
  0%, 100% { transform: translate(0, 0) rotate(0deg); filter: brightness(1); }
  25% { transform: translate(10px, -10px) rotate(1deg); filter: brightness(1.05); }
  50% { transform: translate(20px, 0) rotate(0deg); filter: brightness(1.1); }
  75% { transform: translate(10px, 10px) rotate(-1deg); filter: brightness(1.05); }
}

@keyframes gridFade {
  0%, 100% { opacity: var(--bg-opacity, 0.2); }
  50% { opacity: calc(var(--bg-opacity, 0.2) * 1.2); }
}

@keyframes dotPulse {
  0%, 100% { background-position: 0 0; opacity: var(--bg-opacity, 0.18); }
  50% { background-position: 20px 20px; opacity: calc(var(--bg-opacity, 0.18) * 1.15); }
}

@keyframes circuitFlow {
  0% { background-position: 0 0; filter: brightness(1); }
  100% { background-position: 100px 100px; filter: brightness(1.05); }
}

@keyframes isometricShift {
  0%, 100% { background-position: 0 0; }
  50% { background-position: 50px 43.5px; }
}

@keyframes stripeSlide {
  0% { background-position: 0 0; }
  100% { background-position: 60px 60px; }
}

@keyframes crosshatchWeave {
  0%, 100% { transform: translate(0, 0); opacity: var(--bg-opacity, 0.14); }
  50% { transform: translate(2px, 2px); opacity: calc(var(--bg-opacity, 0.14) * 1.1); }
}

@keyframes blueprintScan {
  0%, 100% { background-position: 0 0; filter: brightness(1); }
  50% { background-position: 0 50px; filter: brightness(1.08); }
}

@keyframes monoFade {
  0%, 100% { opacity: var(--bg-opacity, 0.1); background-position: 0 0; }
  50% { opacity: calc(var(--bg-opacity, 0.1) * 1.3); background-position: 25px 25px; }
}

@keyframes codeGlitch {
  0%, 100% {
    background-position: 0 0;
    filter: brightness(1);
  }
  25% {
    background-position: 2px 0;
    filter: brightness(1.05);
  }
  50% {
    background-position: 0 2px;
    filter: brightness(1.08);
  }
  75% {
    background-position: -2px 0;
    filter: brightness(1.03);
  }
}

@keyframes techPulse {
  0%, 100% {
    opacity: var(--bg-opacity, 0.14);
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    opacity: calc(var(--bg-opacity, 0.14) * 1.2);
    transform: scale(1.02);
    filter: brightness(1.1);
  }
}
`;
