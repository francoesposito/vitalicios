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
 * ============================================================================
 */

const listaDeNoticias = [
    {
        titulo: "¡Bienvenidos a nuestro nuevo canal de comunicación!",
        fecha: "14 de Abril de 2026",
        contenido: "Hoy inauguramos formalmente este nuevo espacio web.\n\nDesde la Comisión de Vitalicios del Club Atlético Talleres queríamos contar con una herramienta moderna, pero sumamente fácil de leer y navegar, pensada exclusivamente en las necesidades de nuestros socios mayores.\n\nA través de esta página estaremos comunicando fechas de asambleas, reuniones, eventos sociales, proyectos de obras impulsados por vitalicios, e información general sobre la actualidad de nuestra amada institución.\n\n¡Los invitamos a revisar esta página periódicamente!"
    },
    {
        titulo: "Cena Anual de Vitalicios: Reserva tu lugar",
        fecha: "10 de Abril de 2026",
        contenido: "Recordamos a toda la familia albirroja que ya se encuentran a la venta las tarjetas para la tradicional Cena Anual de Vitalicios que se desarrollará en el salón del primer piso de la Sede Social.\n\nEl menú consistirá en empanadas de entrada, pernil de cerdo braseado de plato principal, bebida (vino, cerveza y gaseosas libres) y postre. Contaremos con la presencia de directivos y ex jugadores homenajeados de nuestro club.\n\nPara reservar tu tarjeta, acercate de martes a viernes a la secretaría del club. \n\n¡Te esperamos para compartir una noche a puro Talleres!"
    }
];

// No borrar esta línea final: exporta las noticias para que app.js pueda leerlas.
window.MIS_NOTICIAS_VITALICIOS = listaDeNoticias;
