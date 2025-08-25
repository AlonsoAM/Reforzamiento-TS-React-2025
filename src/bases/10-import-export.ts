/**
 * Importación y Exportación de Módulos
 *
 * Este archivo demuestra cómo importar datos y tipos desde otros módulos,
 * y cómo implementar funciones de búsqueda que manejan casos de elementos no encontrados.
 * Incluye ejemplos de manejo de errores y tipos de retorno opcionales.
 *
 * @author Alonso Anchante
 * @version 1.0.0
 */

/**
 * Importación de datos y tipos desde el módulo de héroes
 * - heroes: array de datos de héroes
 * - Hero: tipo/interfaz importada usando 'type' keyword para clarity
 */
import {type Hero, heroes, Owner} from '../data/heroes.data'

/**
 * Función que busca un héroe por su ID
 *
 * Utiliza el método find() para buscar en el array de héroes.
 * Retorna undefined si no encuentra el héroe, permitiendo un manejo
 * más flexible de errores en el código que la consume.
 *
 * @param {number} id - ID único del héroe a buscar
 * @returns {Hero | undefined} El héroe encontrado o undefined si no existe
 *
 * @example
 * ```typescript
 * const hero = getHeroById(1); // Retorna Batman
 * const notFound = getHeroById(999); // Retorna undefined
 * ```
 */
const getHeroById = (id: number): Hero | undefined => {

  return heroes.find(hero => hero.id === id)

  /**
   * Alternativa: Lanzar error si no se encuentra el héroe
   * Esta aproximación es más estricta pero requiere manejo de excepciones
   */
  // if (!hero) {
  //   throw new Error(`Hero not found with id ${id}`)
  // }


}

/**
 * Ejemplo de uso de la función getHeroById
 * Buscamos el héroe con ID 5 (Wolverine)
 */
const hero = getHeroById(5)

/**
 * Mostramos el resultado en consola
 * Salida esperada: { id: 5, name: 'Wolverine', owner: 'Marvel' }
 */
console.log(hero)

/**
 * Función que filtra héroes por su propietario/editorial
 *
 * Utiliza el método filter() para obtener todos los héroes que pertenecen
 * a una editorial específica (DC Comics o Marvel). Esta función es útil
 * para categorizar héroes por su universo de origen.
 *
 * @param {Owner} owner - El propietario/editorial del héroe (Owner.DC o Owner.Marvel)
 * @returns {Hero[]} Array de héroes que pertenecen al propietario especificado
 *
 * @example
 * ```typescript
 * const marvelHeroes = getHeroesByOwner(Owner.Marvel);
 * // Retorna: [{ id: 2, name: 'Spiderman', owner: 'Marvel' }, ...]
 *
 * const dcHeroes = getHeroesByOwner(Owner.DC);
 * // Retorna: [{ id: 1, name: 'Batman', owner: 'DC' }, ...]
 * ```
 */
const getHeroesByOwner = (owner: Owner): Hero[] => heroes.filter(hero => hero.owner === owner)


console.log(getHeroesByOwner(Owner.Marvel))
