# Animated Background Directive

Directiva Angular para aplicar fondos animados dinámicos inspirados en iOS, macOS, Material Design y Flutter.

## 🎨 Estilos Disponibles

### Material Design
Círculos con gradientes vibrantes (Purple, Blue, Orange)
```html
<div appAnimatedBackground backgroundStyle="material"></div>
```

### iOS Glassmorphism
Efecto de vidrio esmerilado con mesh gradient suave
```html
<div appAnimatedBackground backgroundStyle="ios" [backgroundOpacity]="0.3"></div>
```

### macOS Dynamic
Ondas fluidas estilo wallpaper dinámico de macOS
```html
<div appAnimatedBackground backgroundStyle="macos" [backgroundBlur]="40"></div>
```

### Flutter Shapes
Formas geométricas con transformación y rotación
```html
<div appAnimatedBackground backgroundStyle="flutter"></div>
```

### Nordic Minimal
Diseño minimalista con líneas geométricas sutiles
```html
<div appAnimatedBackground backgroundStyle="nordic" [backgroundOpacity]="0.12"></div>
```

### Aurora Borealis
Luces del norte con flujo ondulante
```html
<div appAnimatedBackground backgroundStyle="aurora" [backgroundBlur]="30"></div>
```

### Neon Grid
Grid cyberpunk con efecto de pulso neón
```html
<div appAnimatedBackground backgroundStyle="neon"></div>
```

### Gradient Mesh
Malla de gradientes moderna y abstracta
```html
<div appAnimatedBackground backgroundStyle="mesh" [backgroundBlur]="50"></div>
```

## 📋 Parámetros

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `backgroundStyle` | string | 'material' | Estilo del fondo (material, ios, macos, flutter, nordic, aurora, neon, mesh) |
| `backgroundOpacity` | number | *varies* | Opacidad del fondo (0-1) |
| `backgroundBlur` | number | *varies* | Intensidad del blur en píxeles |
| `backgroundSize` | string | '200px 200px' | Tamaño del patrón SVG |
| `disableAnimation` | boolean | false | Desactiva la animación |

## 🚀 Uso Básico

```typescript
// app.module.ts
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [DirectivesModule]
})
export class AppModule { }
```

```html
<!-- Ejemplo simple -->
<div appAnimatedBackground backgroundStyle="material">
  <h1>Mi Contenido</h1>
</div>

<!-- Con parámetros personalizados -->
<div appAnimatedBackground 
     backgroundStyle="ios"
     [backgroundOpacity]="0.25"
     [backgroundBlur]="60">
  <mat-card>Contenido con glassmorphism</mat-card>
</div>

<!-- Sin animación -->
<div appAnimatedBackground 
     backgroundStyle="flutter"
     [disableAnimation]="true">
  <p>Fondo estático</p>
</div>
```

## 💡 Casos de Uso

### Hero Section
```html
<section class="hero" 
         appAnimatedBackground 
         backgroundStyle="aurora"
         [backgroundOpacity]="0.2">
  <h1>Bienvenido</h1>
  <p>Descripción</p>
</section>
```

### Card con Efecto iOS
```html
<mat-card appAnimatedBackground 
          backgroundStyle="ios"
          [backgroundBlur]="60"
          [backgroundOpacity]="0.3">
  <mat-card-content>
    Contenido con glassmorphism
  </mat-card-content>
</mat-card>
```

### Sidebar Moderna
```html
<aside appAnimatedBackground 
       backgroundStyle="nordic"
       [backgroundOpacity]="0.1">
  <nav>Links</nav>
</aside>
```

### Footer Neon
```html
<footer appAnimatedBackground 
        backgroundStyle="neon"
        [backgroundOpacity]="0.15">
  <p>&copy; 2024</p>
</footer>
```

## 🎯 Características de Cada Estilo

| Estilo | Colores | Animación | Mejor Para |
|--------|---------|-----------|------------|
| **material** | Purple, Blue, Orange | Movimiento diagonal | Secciones principales, hero |
| **ios** | Blue, Pink/Red, Green | Flotación suave | Cards, modales, glassmorphism |
| **macos** | Pink, Purple, Blue | Ondas fluidas | Fondos completos, wallpapers |
| **flutter** | Blue variants | Rotación y morfismo | Secciones técnicas, dashboards |
| **nordic** | Blue-grey tones | Deriva sutil | Sidebars, áreas de lectura |
| **aurora** | Turquoise, Blue, Purple | Flujo horizontal | Headers, footers, secciones amplias |
| **neon** | Magenta, Cyan | Pulso | Secciones tech, gaming, moderno |
| **mesh** | Pink, Blue, Cyan | Flotación multi-direccional | Fondos artísticos, portfolios |

## 🔧 Personalización

### Cambiar Colores
Edita `/directives/backgrounds.config.ts`:
```typescript
export const BACKGROUND_STYLES = {
  custom: {
    name: 'Mi Estilo',
    svgPattern: `url("data:image/svg+xml,...")`,
    animation: 'myAnimation',
    animationDuration: '30s',
    opacity: 0.2,
    blur: 5,
    gradients: 'radial-gradient(...)'
  }
}
```

### Agregar Animación
En el mismo archivo:
```typescript
export const BACKGROUND_ANIMATIONS = `
@keyframes myAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
`;
```

## 📱 Responsive

La directiva es totalmente responsive. Los elementos `::before` y `::after` se ajustan automáticamente al contenedor.

```scss
// Ajustar opacidad en móvil
@media (max-width: 599px) {
  .hero {
    --bg-opacity: 0.1; // Variable CSS disponible
  }
}
```

## ⚡ Rendimiento

- Usa `will-change` solo cuando es necesario
- Animaciones optimizadas con `transform` y `opacity`
- `pointer-events: none` en pseudo-elementos
- Lazy injection de keyframes (solo se inyectan una vez)

## 🎨 Combinaciones Recomendadas

```html
<!-- Material + Cursor Glow -->
<div appAnimatedBackground backgroundStyle="material">
  <mat-card appCursorGlow glowColor="156, 39, 176">
    Efecto combinado
  </mat-card>
</div>

<!-- iOS + Scroll Class -->
<div appAnimatedBackground backgroundStyle="ios" appScrollClass>
  Header con glassmorphism
</div>
```

## 📦 Archivos

- `/directives/animated-background.directive.ts` - Directiva principal
- `/directives/backgrounds.config.ts` - Configuración y estilos
- `/directives/directives.module.ts` - Módulo exportador

## 🐛 Troubleshooting

**El fondo no se muestra:**
- Verifica que el elemento tenga altura/contenido
- Asegúrate de que `DirectivesModule` esté importado

**La animación no funciona:**
- Verifica que `disableAnimation` no esté en `true`
- Chequea que el navegador soporte CSS animations

**El blur no se ve:**
- Algunos navegadores requieren `-webkit-backdrop-filter`
- Ajusta el valor de `backgroundBlur`

---

**Creado con** ❤️ usando Angular 18+, TypeScript y Material Design
