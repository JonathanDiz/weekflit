const puppeteer = require('puppeteer');

async function scrapeAnimeFLV() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  try {
    const animeUrl = 'https://www3.animeflv.net/ver/one-piece-tv-1';
    await page.goto(animeUrl, { waitUntil: 'domcontentloaded' });

    // Aumentar el tiempo de espera o usar waitForFunction
    const videoSelector = 'video';
    await page.waitForFunction(
      (selector) => document.querySelector(selector),
      { timeout: 50000 },
      videoSelector
    );

    // Selecciona el título del anime
    const title = await page.$eval('h1.Title', (element) => element.textContent);

    // Ejecuta scripts en la página para obtener la URL del video
    const videoUrl = await page.evaluate((selector) => {
      const videoElement = document.querySelector(selector);
      return videoElement ? videoElement.src : null;
    }, videoSelector);

    if (!videoUrl) {
      console.error('No se pudo encontrar la URL del video.');
      return;
    }

    // Imprime el título del anime y la URL del video
    console.log('Título del Anime:', title);
    console.log('URL del video:', videoUrl);
  } catch (error) {
    console.error('Error al extraer la información:', error);
  } finally {
    await browser.close();
  }
}

scrapeAnimeFLV();