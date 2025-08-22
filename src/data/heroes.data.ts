/**
 * Datos de Héroes de Cómics
 * 
 * Este archivo contiene la estructura de datos y la información de héroes
 * de las principales compañías de cómics (DC Comics y Marvel).
 * Incluye interfaces, enums y datos predefinidos para usar en la aplicación.
 * 
 * @author Alonso Anchante
 * @version 1.0.0
 */

/**
 * Interfaz que define la estructura de un héroe
 * 
 * @interface Hero
 */
interface Hero {
  /** Identificador único del héroe */
  id: number;
  /** Nombre del héroe */
  name: string;
  /** Compañía propietaria del héroe (DC o Marvel) */
  owner: Owner;
}

/**
 * Alternativa usando union types para Owner
 * Comentado en favor del enum para mejor autocompletado
 */
// type Owner = 'DC' | 'Marvel'

/**
 * Enum que define las compañías propietarias de los héroes
 * 
 * @enum {string}
 */
// @ts-ignore
enum Owner {
  /** DC Comics */
  DC = 'DC',
  /** Marvel Comics */
  Marvel = 'Marvel'
}

/**
 * Array de héroes predefinidos con información básica
 * 
 * Contiene una colección de héroes populares de DC Comics y Marvel,
 * cada uno con su identificador único, nombre y compañía propietaria.
 * 
 * @type {Hero[]}
 * @exports heroes - Array de objetos Hero para usar en la aplicación
 */
export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];