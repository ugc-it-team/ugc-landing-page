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
