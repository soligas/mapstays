# MapStays

Aplicación web para búsqueda y reserva de alojamientos con integración de mapas y APIs externas.

## Tecnologías

- Next.js
- Tailwind CSS (con paleta personalizada)
- Leaflet + OpenStreetMap
- Context API para gestión de estado
- Integración con APIs Stay22 y TravelPayouts
- Lazy loading de imágenes con react-lazy-load-image-component

## Scripts

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia la aplicación en modo producción

## Despliegue

Para desplegar la aplicación:

1. Construir la aplicación:
   ```
   npm run build
   ```

2. Iniciar el servidor para pruebas:
   ```
   npm start
   ```

3. Subir la carpeta generada a la plataforma de hosting de tu preferencia (Vercel, Netlify, AWS, etc.)

## Notas

- Asegúrate de configurar las variables de entorno para los tokens de las APIs si decides moverlos a variables de entorno.
- La aplicación está optimizada para dispositivos móviles y desktop.
- El mapa usa Leaflet con OpenStreetMap y carga dinámica para evitar problemas con SSR.

## Contacto

Para dudas o soporte, contacta al desarrollador.

---
