/**
 * Promises en TypeScript
 * 
 * Este archivo demuestra el uso de Promises para manejar operaciones asíncronas.
 * Las Promises son objetos que representan la eventual finalización (o falla) 
 * de una operación asíncrona y su valor resultante.
 * 
 * Conceptos clave:
 * - Promise<T>: Tipo genérico donde T es el tipo del valor resuelto
 * - resolve(): Función para completar exitosamente la Promise
 * - reject(): Función para rechazar la Promise con un error
 * - then(): Maneja el caso de éxito
 * - catch(): Maneja el caso de error
 * - finally(): Se ejecuta siempre, independientemente del resultado
 * 
 * @author Alonso Anchante
 * @version 1.0.0
 */

/**
 * Promise que simula una operación asíncrona
 * 
 * Crea una nueva Promise que se resuelve después de 2 segundos con el valor 100.
 * Utiliza el tipo genérico <number> para especificar que el valor resuelto será un número.
 * 
 * @type {Promise<number>} Promise que resuelve con un número después de 2 segundos
 * 
 * @example
 * ```typescript
 * // La Promise se resuelve automáticamente después de 2 segundos
 * // Valor resuelto: 100 (tipo number)
 * ```
 */
const myPromise = new Promise<number>((resolve /*, reject*/) => {
  /**
   * setTimeout simula una operación asíncrona (como una petición HTTP o consulta a BD)
   * Después de 2000ms (2 segundos), ejecuta la función resolve con el valor 100
   * 
   * Alternativa comentada: reject('Error') - rechazaría la Promise con un mensaje de error
   */
  setTimeout(() => {
    resolve(100)
    // reject('Error') // Descomenta esta línea y comenta resolve() para probar el manejo de errores
  }, 2000)
})

/**
 * Manejo de la Promise usando el patrón de cadena (chaining)
 * 
 * - then(): Se ejecuta cuando la Promise se resuelve exitosamente
 *   Recibe el valor resuelto (100) y lo imprime en consola
 * 
 * - catch(): Se ejecuta si la Promise es rechazada
 *   Recibe el error y lo imprime como advertencia
 * 
 * - finally(): Se ejecuta siempre, independientemente del resultado
 *   Útil para tareas de limpieza o notificaciones finales
 * 
 * @example
 * ```typescript
 * myPromise
 *   .then(value => console.log(`Éxito: ${value}`))     // Imprime: "Éxito: 100"
 *   .catch(error => console.error(`Error: ${error}`))   // Solo si hay error
 *   .finally(() => console.log('Operación completada')) // Siempre se ejecuta
 * ```
 */
myPromise
  .then(console.info)    // Equivale a: .then(value => console.info(value))
  .catch(console.warn)   // Equivale a: .catch(error => console.warn(error))
  .finally(() => console.log('Esto siempre se ejecuta'))