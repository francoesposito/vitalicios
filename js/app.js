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
    const btnCargarMas = document.getElementById('btn-cargar-mas');
    const btnVolverArriba = document.getElementById('btn-volver-arriba');

    const NOTICIAS_POR_PAGINA = 5;
    let paginaActual = 1;

    // Revisamos si pudimos cargar los datos desde noticias.js
    if (!window.MIS_NOTICIAS_VITALICIOS || window.MIS_NOTICIAS_VITALICIOS.length === 0) {
        contenedorNoticias.innerHTML = '<div class="no-news-message">Actualmente no hay noticias para mostrar.</div>';
        return;
    }

    // Función que dibuja las noticias basándose en lo que haya escrito el usuario
    function renderizarNoticias(resetearPaginacion = true) {
        if (resetearPaginacion) {
            paginaActual = 1;
        }

        const textoBusqueda = filtroTextoInput.value.toLowerCase().trim();
        const fechaBusqueda = filtroFechaInput.value.toLowerCase().trim();

        // Filtramos las noticias
        const noticiasFiltradas = window.MIS_NOTICIAS_VITALICIOS.filter(noticia => {
            const coincideTexto = noticia.titulo.toLowerCase().includes(textoBusqueda) || 
                                  noticia.contenido.toLowerCase().includes(textoBusqueda);
            const coincideFecha = noticia.fecha.toLowerCase().includes(fechaBusqueda);
            
            return coincideTexto && coincideFecha;
        });

        // Ordenamos para que las IMPORTANTES queden por encima de las normales, 
        // pero respetando el orden general en el que aparecen en el archivo.
        const importantes = noticiasFiltradas.filter(n => n.importante);
        const normales = noticiasFiltradas.filter(n => !n.importante);
        const noticiasOrdenadas = [...importantes, ...normales];

        const maximoNoticiasAMostrar = paginaActual * NOTICIAS_POR_PAGINA;
        const noticiasMostradas = noticiasOrdenadas.slice(0, maximoNoticiasAMostrar);

        // Limpiamos el contenedor
        contenedorNoticias.innerHTML = '';

        if (noticiasOrdenadas.length === 0) {
            contenedorNoticias.innerHTML = '<div class="no-news-message">No se encontraron noticias con esos filtros.</div>';
            btnCargarMas.style.display = 'none';
            return;
        }

        // Recorremos la lista filtrada y truncada
        noticiasMostradas.forEach(noticia => {
            const article = document.createElement('article');
            article.className = 'noticia-card' + (noticia.importante ? ' es-importante' : '');
            
            let contenidoHTMLExtraido = '';
            
            // Si es importante, mostramos una etiqueta
            if (noticia.importante) {
                contenidoHTMLExtraido += `<span class="badge-importante">⚠️ Importante</span>`;
            }

            contenidoHTMLExtraido += `<span class="noticia-fecha">${escaparHTML(noticia.fecha)}</span>`;
            contenidoHTMLExtraido += `<h3 class="noticia-titulo">${escaparHTML(noticia.titulo)}</h3>`;
            
            // Si tiene imagen, la dibujamos
            if (noticia.imagen) {
                contenidoHTMLExtraido += `<img src="${escaparHTML(noticia.imagen)}" class="noticia-imagen" alt="Imagen adjunta de noticia">`;
            }

            contenidoHTMLExtraido += `<div class="noticia-contenido">${formatearTexto(noticia.contenido)}</div>`;
            
            article.innerHTML = contenidoHTMLExtraido;
            contenedorNoticias.appendChild(article);
        });

        // Mostrar u ocultar el botón "Ver más"
        if (maximoNoticiasAMostrar >= noticiasOrdenadas.length) {
            btnCargarMas.style.display = 'none';
        } else {
            btnCargarMas.style.display = 'inline-block';
        }
    }

    // Escuchamos cada vez que el usuario escribe en los buscadores (resetea paginación)
    filtroTextoInput.addEventListener('input', () => renderizarNoticias(true));
    filtroFechaInput.addEventListener('input', () => renderizarNoticias(true));

    // Botón para cargar más noticias
    btnCargarMas.addEventListener('click', () => {
        paginaActual++;
        renderizarNoticias(false); // Falso para no reiniciar la página
    });

    // Lógica del Botón flotante "Volver Arriba"
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnVolverArriba.classList.add('mostrar');
        } else {
            btnVolverArriba.classList.remove('mostrar');
        }
    });

    btnVolverArriba.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dibujamos las noticias por primera vez al cargar la página
    renderizarNoticias(true);
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
 * en párrafos (<p>) del lenguaje HTML para que queden separados correctamente,
 * e identifica si hay enlaces (links) web para hacerlos clickeables.
 */
function formatearTexto(textoOriginal) {
    if (!textoOriginal) return '';
    
    // Primero, hacemos seguro el texto
    let textoSeguro = escaparHTML(textoOriginal);
    
    // Identificar links (Ej. https://google.com) y pasarlos a botones que abren en otra pestaña
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    textoSeguro = textoSeguro.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" class="noticia-link">${url}</a>`;
    });
    
    // Luego, dividimos por cada salto de línea y encerramos todo entre <p> parrafos
    const parrafos = textoSeguro.split('\n').filter(parrafo => parrafo.trim() !== '');
    
    let htmlParrafos = '';
    parrafos.forEach(p => {
        htmlParrafos += `<p>${p}</p>`;
    });

    return htmlParrafos;
}
