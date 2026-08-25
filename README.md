# ugc-landing-page

Sitio estático de UGConnect listo para subir.

## Ver local

```bash
python3 -m http.server 4178
```

Abrir `http://localhost:4178`.

## Configuración

Editar `assets/runtime-config.js` para configurar integraciones sin recompilar:

```js
window.UGCONFIG = {
  calcomUrl: "https://cal.com/tu-usuario/tu-evento",
  platformUrl: "https://app.ugconnect.pe"
};
```

Si los valores están vacíos, la landing usa fallbacks internos.

## Logos de marcas

El carrusel de logos se configura en `assets/runtime-config.js`, dentro de
`window.UGCONFIG.marcas`.

Para cambiar una marca:

1. Agrega el logo optimizado en `assets/logos/small/` como WebP de 120x120.
2. Actualiza el objeto `{ nombre, logo }` correspondiente.
3. Conserva las rutas con espacios codificados como `%20`.
