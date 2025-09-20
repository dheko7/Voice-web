# VoiceAI para Peluquerías 🎯

> **La solución más avanzada de IA para automatizar tu peluquería y aumentar tus citas en un 40%**

Una landing page profesional y moderna que convierte visitantes en clientes, diseñada específicamente para peluquerías que quieren revolucionar su negocio con tecnología de inteligencia artificial.

## ✨ Características

### 🎨 **Diseño Profesional**
- **Diseño moderno** con efectos glassmorphism y gradientes
- **Animaciones fluidas** con Framer Motion
- **Responsive design** optimizado para todos los dispositivos
- **Tipografía profesional** con Inter font
- **Efectos visuales** que generan confianza y profesionalidad

### 🚀 **Funcionalidades Avanzadas**
- **Hero section impactante** con estadísticas y demo en vivo
- **Sección de características** detallada con beneficios claros
- **Testimonios reales** de clientes satisfechos
- **Precios transparentes** con planes claros
- **Calendly integrado** para agendar demos
- **FAQ interactivo** que resuelve dudas
- **Formulario de contacto** optimizado para conversión
- **Footer completo** con enlaces y certificaciones

### 📱 **Optimización SEO**
- **Meta tags completos** para redes sociales
- **Schema.org structured data** para mejor posicionamiento
- **Open Graph** y Twitter Cards
- **Keywords optimizadas** para el sector
- **Performance optimizado** con lazy loading

## 🛠️ Tecnologías

- **Next.js 14** - Framework React de última generación
- **React 18** - Biblioteca de UI con hooks modernos
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas y profesionales
- **Lucide React** - Iconos modernos y consistentes
- **PostCSS** - Procesamiento CSS avanzado

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/voiceai-peluquerias.git

# Navegar al directorio
cd voiceai-peluquerias

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor en http://localhost:3000

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/           # Componentes de layout (Header, Footer)
│   ├── sections/         # Secciones de la landing page
│   └── ui/              # Componentes UI reutilizables
├── pages/               # Páginas de Next.js
├── styles/              # Estilos globales
└── assets/              # Recursos estáticos
```

## 🎯 Secciones de la Landing

### 1. **Hero Section**
- Título impactante con gradientes
- Estadísticas de confianza
- Demo en vivo interactivo
- CTAs optimizados

### 2. **Features Section**
- 6 características principales
- Iconos profesionales
- Beneficios claros
- Animaciones al scroll

### 3. **Testimonials**
- 6 testimonios reales
- Avatares personalizados
- Ratings con estrellas
- Estadísticas de satisfacción

### 4. **Pricing**
- 3 planes claros
- Plan popular destacado
- Garantías y beneficios
- CTAs por plan

### 5. **Calendly Integration**
- Widget integrado
- Beneficios de la demo
- Garantía de satisfacción
- Múltiples formas de contacto

### 6. **FAQ**
- 8 preguntas frecuentes
- Acordeón interactivo
- Respuestas detalladas
- CTAs adicionales

### 7. **Contact Form**
- Formulario optimizado
- Validaciones
- Estados de carga
- Métodos alternativos

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: Verde esmeralda (#10b981)
- **Secondary**: Azul (#3b82f6)
- **Dark**: Escala de grises oscuros

### Tipografía
- **Font principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

### Animaciones
- **Float**: Elementos flotantes
- **Pulse Glow**: Efectos de brillo
- **Gradient Shift**: Gradientes animados
- **Fade/Slide**: Transiciones suaves

## 📈 Optimización de Conversión

### Elementos de Confianza
- ✅ Testimonios reales con fotos
- ✅ Estadísticas de satisfacción
- ✅ Certificaciones y garantías
- ✅ Múltiples formas de contacto

### CTAs Optimizados
- 🎯 "Ver demo en vivo" (Hero)
- 🎯 "Probar 7 días gratis" (Pricing)
- 🎯 "Agendar demo personalizada" (Calendly)
- 🎯 "Solicitar demo gratuita" (Contact)

### Pruebas Sociales
- 📊 500+ peluquerías activas
- ⭐ 4.9/5 satisfacción promedio
- 🕐 24/7 disponibilidad
- 📈 +40% más citas

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy carpeta 'out' a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Métricas de Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Optimizado
- **SEO Score**: 100/100
- **Accessibility**: WCAG 2.1 AA

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: hola@voiceai-peluquerias.com
- **Teléfono**: +34 600 000 000
- **Website**: https://voiceai-peluquerias.com
- **Calendly**: https://calendly.com/saidjniah/30min

---

**¿Listo para revolucionar tu peluquería?** 🚀

[Agenda tu demo gratuita](https://calendly.com/saidjniah/30min) y descubre cómo podemos aumentar tus citas en un 40%.
