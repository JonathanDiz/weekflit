const axios = require('axios');

// URL del anime en AnimeFLV
const animeUrl = 'https://www3.animeflv.net/ver/one-piece-tv-1';

// Realiza la solicitud HTTP para obtener el contenido de la página
axios.get(animeUrl)
  .then((response) => {
    const html = response.data;

    // Crear un objeto DOM virtual para usar querySelector
    const { JSDOM } = require('jsdom');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Selecciona el título del anime (ajusta el selector según la estructura de la página)
    const title = document.querySelector('h1.Title').textContent;

    // Selecciona el atributo src del elemento video con las clases jw-video y jw-reset
    const videoUrl = document.querySelector('video').getAttribute('src');

    if (!videoUrl) {
      console.error('No se pudo encontrar la URL del video.');
      return;
    }

    // Imprime el título del anime y la URL del video
    console.log('Título del Anime:', title);
    console.log('URL del video:', videoUrl);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
