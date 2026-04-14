/**
 * Este archivo se encarga de leer las noticias de 'noticias.js' 
 * e insertarlas en el diseño de la página de forma automática.
 * 
 * No es necesario que edites este archivo, salvo que quieras 
 * cambiar cómo funciona el diseño de la página.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contenedorNoticias = document.getElementById('noticias-container');
    const filtroTextoInput = document.getElementById('filtro-texto');
    const filtroFechaInput = document.getElementById('filtro-fecha');

    // Revisamos si pudimos cargar los datos desde noticias.js
    if (!window.MIS_NOTICIAS_VITALICIOS || window.MIS_NOTICIAS_VITALICIOS.length === 0) {
        contenedorNoticias.innerHTML = '<div class="no-news-message">Actualmente no hay noticias para mostrar.</div>';
        return;
    }

    // Función que dibuja las noticias basándose en lo que haya escrito el usuario
    function renderizarNoticias() {
        const textoBusqueda = filtroTextoInput.value.toLowerCase().trim();
        const fechaBusqueda = filtroFechaInput.value.toLowerCase().trim();

        // Filtramos las noticias
        const noticiasFiltradas = window.MIS_NOTICIAS_VITALICIOS.filter(noticia => {
            const coincideTexto = noticia.titulo.toLowerCase().includes(textoBusqueda) || 
                                  noticia.contenido.toLowerCase().includes(textoBusqueda);
            const coincideFecha = noticia.fecha.toLowerCase().includes(fechaBusqueda);
            
            return coincideTexto && coincideFecha;
        });

        // Limpiamos el contenedor
        contenedorNoticias.innerHTML = '';

        if (noticiasFiltradas.length === 0) {
            contenedorNoticias.innerHTML = '<div class="no-news-message">No se encontraron noticias con esos filtros.</div>';
            return;
        }

        // Recorremos la lista filtrada
        noticiasFiltradas.forEach(noticia => {
            const article = document.createElement('article');
            article.className = 'noticia-card';
            
            const contenidoHTMLExtraido = `
                <span class="noticia-fecha">${escaparHTML(noticia.fecha)}</span>
                <h3 class="noticia-titulo">${escaparHTML(noticia.titulo)}</h3>
                <div class="noticia-contenido">${formatearTexto(noticia.contenido)}</div>
            `;
            
            article.innerHTML = contenidoHTMLExtraido;
            contenedorNoticias.appendChild(article);
        });
    }

    // Escuchamos cada vez que el usuario escribe en los buscadores
    filtroTextoInput.addEventListener('input', renderizarNoticias);
    filtroFechaInput.addEventListener('input', renderizarNoticias);

    // Dibujamos las noticias por primera vez al cargar la página
    renderizarNoticias();
});

/**
 * Función de seguridad: sirve para que si alguien pone símbolos como < o > en las noticias, 
 * no rompan la página web ni inyecten código malicioso.
 */
function escaparHTML(texto) {
    if (!texto) return '';
    const div = document.createElement('div');
    div.innerText = texto;
    return div.innerHTML;
}

/**
 * Función que convierte los saltos de línea del texto de la noticia (\n)
 * en párrafos (<p>) del lenguaje HTML para que queden separados correctamente.
 */
function formatearTexto(textoOriginal) {
    if (!textoOriginal) return '';
    
    // Primero, hacemos seguro el texto
    let textoSeguro = escaparHTML(textoOriginal);
    
    // Luego, dividimos por cada salto de línea y encerramos todo entre <p> parrafos
    const parrafos = textoSeguro.split('\n').filter(parrafo => parrafo.trim() !== '');
    
    let htmlParrafos = '';
    parrafos.forEach(p => {
        htmlParrafos += `<p>${p}</p>`;
    });

    return htmlParrafos;
}
