# Guía de Uso - Web de Vitalicios Talleres (R.E.)

¡El proyecto ya tiene su primera versión funcionando! Aquí te explico brevemente las decisiones que tomamos y **cómo puedes mantener la web actualizada tú mismo.**

## ¿Qué hicimos?

Se crearon cuatro archivos base que ya no hará falta tocar: 
- `index.html`: (El esqueleto de la página).
- `css/styles.css`: (Donde le dimos ese look moderno, rojo talleres y contrastado para la buena lectura).
- `js/app.js`: (El motor que inyecta las novedades automáticamente).
- **`js/noticias.js`**: Este es tu archivo de trabajo principal.

## ¿Cómo agregar o modificar una noticia?

¡Es la parte más sencilla de todas! Si abres el archivo **`js/noticias.js`** en cualquier editor de texto o código (como un bloc de notas o Visual Studio Code), verás que tus noticias están guardadas entre `[` y `]`.

### Ejemplo Práctico

1. Verás que las noticias tienen esta forma de "bloque":
```javascript
  {
      titulo: "Asamblea Anual Ordinaria",
      fecha: "18 de Mayo de 2026",
      contenido: "Están todos invitados a participar de la próxima asamblea a realizarse en la sede del club..."
  },
```

2. Para agregar una noticia nueva, solo debes **copiar ese bloque** y pegarlo por encima o por debajo de otro. 

3. **¡Súper importante!** Asegurate de que los bloques estén siempre separados por una **coma** (`,`), menos el último de todos. Tu listado debería verse así:

```javascript
const listaDeNoticias = [ // Inicio de las noticias
    {
        titulo: "Mi noticia MÁS NUEVA",
        fecha: "Hoy",
        contenido: "Texto de ejemplo..."
    }, // <-- ¡Atención a esta coma que separa la siguiente noticia!
    {
        titulo: "Mi noticia ANTERIOR",
        fecha: "Ayer",
        contenido: "Texto de ejemplo..."
    }  // <-- El último no necesita coma al final
];
```

### Saltos de línea (Párrafos)
Si quieres que tu noticia tenga varios párrafos para que sea más fácil de leer, simplemente escribe `\n` en el lugar donde quieres que el texto baje de renglón. 

**Ejemplo:**
`"Párrafo uno.\n\nPárrafo dos."`

¡Todo lo demás se acomodará automáticamente con diseños de letras grandes y legibles en toda la pantalla! 

## Próximos pasos
Haz doble clic sobre el archivo `index.html` en tu computadora para abrirlo en tu navegador web de preferencia (Chrome, Edge, etc.) y podrás ver el resultado.
