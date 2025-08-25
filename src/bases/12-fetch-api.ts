/**
 * Fetch API y Consumo de Servicios REST
 * 
 * Este archivo demuestra cómo usar la Fetch API nativa de JavaScript para consumir
 * servicios REST externos, manejar respuestas JSON complejas y manipular el DOM.
 * 
 * Conceptos clave:
 * - Fetch API para peticiones HTTP
 * - Manejo de Promises con APIs externas
 * - Destructuring de objetos complejos anidados
 * - Manipulación del DOM con TypeScript
 * - Tipado fuerte de respuestas de APIs
 * - Manejo de errores en peticiones asíncronas
 * 
 * @author Alonso Anchante
 * @version 1.0.0
 */

import type {GiphyRandomResponse} from "../data/giphy.response.ts";

/**
 * Clave de API de Giphy para autenticación
 * 
 * Esta clave permite acceder a la API pública de Giphy para obtener GIFs aleatorios.
 * En un proyecto real, esta clave debería estar en variables de entorno (.env)
 * para mayor seguridad.
 * 
 * @constant {string}
 */
const API_KEY = '<TU_API_KEY>'

/**
 * Petición HTTP usando Fetch API
 * 
 * Realiza una petición GET a la API de Giphy para obtener un GIF aleatorio.
 * Los parámetros de la URL incluyen:
 * - api_key: Clave de autenticación
 * - tag: Categoría de búsqueda (dogs/perros)
 * - rating: Clasificación del contenido (g = general audiences)
 * 
 * fetch() retorna una Promise<Response> que se resuelve cuando la petición completa.
 * 
 * @type {Promise<Response>}
 * 
 * @example
 * ```typescript
 * // URL construida: https://api.giphy.com/v1/gifs/random?api_key=XXX&tag=dogs&rating=g
 * // Respuesta esperada: Objeto JSON con estructura GiphyRandomResponse
 * ```
 */
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=dogs&rating=g`)

/**
 * Función para crear y mostrar una imagen en el DOM
 * 
 * Crea dinámicamente un elemento <img> con la URL proporcionada
 * y lo agrega al body del documento HTML. Esta función demuestra
 * la manipulación básica del DOM usando JavaScript vanilla.
 * 
 * @param {string} url - URL de la imagen a mostrar
 * @returns {void}
 * 
 * @example
 * ```typescript
 * createImageInsideDOM('https://media.giphy.com/media/abc123/giphy.gif');
 * // Resultado: Se agrega <img src="https://media.giphy.com/media/abc123/giphy.gif" /> al body
 * ```
 */
const createImageInsideDOM = (url: string): void => {
  /**
   * Creación del elemento imagen
   * document.createElement() crea un nuevo elemento HTML en memoria
   */
  const img = document.createElement('img')

  /**
   * Asignación del atributo src
   * Establece la URL de la imagen que se va a mostrar
   */
  img.src = url

  /**
   * Inserción en el DOM
   * appendChild() agrega el elemento al final del body
   */
  document.body.appendChild(img)
}

/**
 * Cadena de manejo de la Promise para procesar la respuesta
 * 
 * Esta cadena demuestra el patrón típico para consumir APIs REST:
 * 1. Realizar la petición con fetch()
 * 2. Convertir la respuesta a JSON
 * 3. Extraer los datos necesarios usando destructuring
 * 4. Procesar los datos (mostrar imagen)
 * 5. Manejar posibles errores
 */
myRequest
  /**
   * Primer .then(): Conversión de Response a JSON
   * 
   * response.json() retorna otra Promise que resuelve con el objeto JavaScript
   * parseado desde el JSON de la respuesta. Es importante verificar que
   * response.ok sea true antes de hacer esto en aplicaciones de producción.
   * 
   * @param {Response} response - Objeto Response de la petición fetch
   * @returns {Promise<GiphyRandomResponse>} Promise con el JSON parseado
   */
  .then(response => response.json())

  /**
   * Segundo .then(): Procesamiento de datos
   * 
   * Aquí ocurre la magia del destructuring. Del objeto GiphyRandomResponse
   * complejo, extraemos solo la propiedad 'data' que contiene la información
   * del GIF. Luego navegamos por la estructura anidada para obtener la URL
   * de la imagen original.
   * 
   * Estructura de navegación:
   * response.data.images.original.url
   * 
   * @param {GiphyRandomResponse} giphyResponse - Respuesta completa de Giphy
   * @param {GiphyRandomResponse.data} data - Destructuring: extraemos solo 'data'
   */
  .then(({data}: GiphyRandomResponse) => {
    /**
     * Extracción de la URL de la imagen original
     * 
     * La respuesta de Giphy incluye múltiples versiones de cada GIF
     * (original, downsized, fixed_width, etc.). Elegimos 'original'
     * para obtener la máxima calidad.
     */
    const imageUrl = data.images.original.url

    /**
     * Mostrar la imagen en el DOM
     * Llamamos a nuestra función helper para agregar la imagen al documento
     */
    createImageInsideDOM(imageUrl)
  })

  /**
   * Manejo de errores
   * 
   * .catch() captura cualquier error que ocurra en toda la cadena:
   * - Errores de red (sin conexión, servidor caído)
   * - Errores de parsing JSON (respuesta malformada)
   * - Errores en el procesamiento de datos
   * 
   * @param {Error} error - Error capturado de cualquier punto de la cadena
   */
  .catch(error => console.error('Error al obtener el GIF:', error))