/**
 * Async/Await - Sintaxis Moderna para Programación Asíncrona
 * 
 * Este archivo demuestra cómo usar async/await para escribir código asíncrono
 * de manera más limpia y legible, comparado con las Promises tradicionales.
 * Async/await es "syntactic sugar" que hace que el código asíncrono se vea
 * y se comporte más como código síncrono.
 * 
 * Conceptos clave:
 * - Palabras clave async y await
 * - Simplificación de cadenas de Promises
 * - Manejo de errores con try/catch (aunque no implementado aquí)
 * - Type assertions con 'as' keyword
 * - Funciones que retornan Promise implícitamente
 * - Mejores prácticas con async/await
 * 
 * Ventajas sobre Promises tradicionales:
 * ✅ Código más legible y fácil de entender
 * ✅ Menos anidamiento (evita "callback hell")
 * ✅ Manejo de errores más intuitivo con try/catch
 * ✅ Debugging más sencillo
 * ✅ Flujo de control más natural
 * 
 * @author Alonso Anchante
 * @version 1.0.0
 */

import type {GiphyRandomResponse} from "../data/giphy.response.ts";

/**
 * Clave de API de Giphy para autenticación
 * Misma configuración que en el ejemplo de fetch tradicional
 * 
 * @constant {string}
 */
const API_KEY = '<TU_API_KEY>'

/**
 * Función auxiliar para crear y mostrar una imagen en el DOM
 * 
 * Función reutilizable que encapsula la lógica de manipulación del DOM.
 * Idéntica a la implementación en el ejemplo de fetch tradicional,
 * demostrando que la lógica de presentación permanece igual independientemente
 * de cómo obtengamos los datos.
 * 
 * @param {string} url - URL de la imagen a mostrar
 * @returns {void}
 */
const createImageInsideDOM = (url: string): void => {
  const img = document.createElement('img')
  img.src = url
  document.body.appendChild(img)
}

/**
 * Función asíncrona que obtiene una URL de GIF aleatorio usando async/await
 * 
 * Esta función demuestra la sintaxis moderna async/await para manejar operaciones
 * asíncronas. Compara esta implementación con la versión de Promises tradicionales
 * en 12-fetch-api.ts para ver las diferencias en legibilidad.
 * 
 * Flujo de la función:
 * 1. Realiza petición HTTP con fetch (await pausa hasta completar)
 * 2. Convierte respuesta a JSON (await pausa hasta completar)
 * 3. Extrae datos usando destructuring
 * 4. Retorna URL de la imagen original
 * 
 * @async
 * @function getRandomGifUrl
 * @returns {Promise<string>} Promise que resuelve con la URL del GIF
 * 
 * @example
 * ```typescript
 * // Uso con await (dentro de función async)
 * const url = await getRandomGifUrl();
 * console.log(url); // https://media.giphy.com/media/abc123/giphy.gif
 * 
 * // Uso con .then() (mixed approach)
 * getRandomGifUrl().then(url => console.log(url));
 * ```
 */
const getRandomGifUrl = async (): Promise<string> => {
  /**
   * Petición HTTP usando await
   * 
   * await pausa la ejecución de la función hasta que fetch() se resuelve.
   * Esto elimina la necesidad de .then() y hace que el código se lea
   * de manera más natural, de arriba hacia abajo.
   * 
   * Equivalente con Promises:
   * fetch(...).then(response => ...)
   */
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=dogs&rating=g`)

  /**
   * Conversión a JSON usando await + destructuring + type assertion
   * 
   * Aquí ocurren varias operaciones importantes:
   * 
   * 1. await response.json(): Pausa hasta que el JSON sea parseado
   * 2. Destructuring: {data} extrae solo la propiedad 'data'
   * 3. Type assertion: 'as GiphyRandomResponse' le dice a TypeScript
   *    el tipo exacto de la respuesta
   * 
   * Equivalente con Promises:
   * .then(response => response.json())
   * .then(({data}: GiphyRandomResponse) => ...)
   */
  const {data} = (await response.json()) as GiphyRandomResponse

  /**
   * Retorno de la URL
   * 
   * Navega por la estructura anidada para obtener la URL original.
   * El retorno implícito crea una Promise<string> automáticamente
   * gracias a la palabra clave 'async'.
   */
  return data.images.original.url
}

/**
 * Ejecución y uso de la función async
 * 
 * Aquí demostramos cómo consumir una función async. Aunque getRandomGifUrl()
 * usa async/await internamente, cuando la llamamos desde fuera podemos usar
 * tanto .then() como await (si estamos en contexto async).
 * 
 * Opciones de uso:
 * 
 * 1. Con .then() (como se muestra):
 *    getRandomGifUrl().then(createImageInsideDOM)
 * 
 * 2. Con await (requiere contexto async):
 *    const url = await getRandomGifUrl()
 *    createImageInsideDOM(url)
 * 
 * 3. Con IIFE async:
 *    (async () => {
 *      const url = await getRandomGifUrl()
 *      createImageInsideDOM(url)
 *    })()
 */
getRandomGifUrl().then(createImageInsideDOM)

/**
 * NOTA IMPORTANTE sobre manejo de errores:
 * 
 * En este ejemplo no implementamos manejo de errores para mantenerlo simple,
 * pero en aplicaciones reales deberías usar try/catch:
 * 
 * ```typescript
 * const getRandomGifUrlSafe = async (): Promise<string | null> => {
 *   try {
 *     const response = await fetch(`...`);
 *     
 *     if (!response.ok) {
 *       throw new Error(`HTTP error! status: ${response.status}`);
 *     }
 *     
 *     const {data} = (await response.json()) as GiphyRandomResponse;
 *     return data.images.original.url;
 *     
 *   } catch (error) {
 *     console.error('Error al obtener GIF:', error);
 *     return null;
 *   }
 * }
 * ```
 * 
 * Esta implementación con try/catch es mucho más limpia que el manejo
 * de errores con .catch() en Promises tradicionales.
 */
