/**
 * ============================================================================
 * ARCHIVO DE NOTICIAS DE VITALICIOS
 * ============================================================================
 * 
 * Este es el archivo donde vas a modificar y agregar las nuevas noticias.
 * Es tu panel de administración. ¡Súper sencillo!
 * 
 * INSTRUCCIONES PARA AGREGAR UNA NOTICIA:
 * 1. Copia un bloque entero de una noticia que empieza con la llave { y termina con }, 
 * 2. Pégalo justo ARRIBA de la última noticia (para que la más nueva salga primero).
 * 3. Asegurate de que quede separada por una coma de la que le sigue.
 * 4. Cambiá el título, la fecha y el contenido como prefieras.
 * 
 * TIPS DE CONTENIDO:
 * - podés usar \n para hacer saltos de línea y separar en párrafos.
 * - Podés agregar IMPORTANTE: agregando    importante: true,
 * - Podés agregar FOTOS, agregando         imagen: "./img/mifoto.jpg", 
 * - Si pones un link completo (ej: https://... ) se iluminará de rojo y será clickeable automáticamente.
 * ============================================================================
 */

const listaDeNoticias = [
    {
        importante: false,
        titulo: "Artículo de prueba",
        fecha: "14 de Abril de 2026",
        imagen: "./img/imgart1.png",
        contenido: "Este es un artíbulo de prueba de la nueva página de los vitalicios de talleres!!\n\nhttps://talleres.org.ar"
    },
    {
        importante: true,
        titulo: "Cena Anual de Vitalicios: Reserva tu lugar",
        fecha: "10 de Abril de 2026",
        contenido: "Recordamos a toda la familia albirroja que ya se encuentran a la venta las tarjetas para la tradicional Cena Anual de Vitalicios que se desarrollará en el salón del primer piso de la Sede Social.\n\nEl menú consistirá en empanadas de entrada, pernil de cerdo braseado de plato principal, bebida (vino, cerveza y gaseosas libres) y postre. Contaremos con la presencia de directivos y ex jugadores homenajeados de nuestro club.\n\nPara reservar tu tarjeta, acercate de martes a viernes a la secretaría del club. \n\n¡Te esperamos para compartir una noche a puro Talleres!"
    },
    {
        importante: true,
        titulo: "Reunión el Martes 21 de Abril",
        fecha: "14 de Abril de 2026",
        contenido: "El martes hay reunión en el Club Atlético Talleres."
    }

];

// No borrar esta línea final: exporta las noticias para que app.js pueda leerlas.
window.MIS_NOTICIAS_VITALICIOS = listaDeNoticias;
