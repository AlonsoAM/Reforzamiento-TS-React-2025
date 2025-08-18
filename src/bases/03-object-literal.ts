/**
 * @fileoverview Ejemplos de Objetos Literales y Clonación en TypeScript
 * Este archivo demuestra:
 * - Creación de objetos literales con propiedades anidadas
 * - Uso de structuredClone() para clonación profunda
 * - Modificación de propiedades de objetos
 * - Diferencia entre referencia y copia de objetos
 * - Objetos complejos con múltiples niveles de anidación
 */

/**
 * Objeto literal que representa el personaje Iron Man
 * Contiene propiedades básicas y un objeto anidado para la dirección
 * 
 * Propiedades:
 * - firstName: nombre del personaje
 * - lastName: apellido del personaje  
 * - age: edad del personaje
 * - address: objeto anidado con información de dirección
 */
const ironman = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
}

/**
 * Clonación profunda del objeto ironman usando structuredClone()
 * 
 * structuredClone() crea una copia independiente del objeto original,
 * incluyendo todos los objetos anidados. Esto significa que modificar
 * el objeto clonado NO afectará el objeto original.
 * 
 * Ventajas sobre otros métodos:
 * - Clona objetos anidados (deep clone)
 * - Maneja tipos de datos complejos
 * - Nativo de JavaScript (no requiere librerías)
 */
const spiderman = structuredClone(ironman)

/**
 * Modificación de las propiedades básicas del objeto spiderman
 * Estas modificaciones no afectan al objeto ironman original
 * debido a que usamos structuredClone() para crear una copia independiente
 */
spiderman.firstName = 'Peter'
spiderman.lastName = 'Parker'
spiderman.age = 25

/**
 * Modificación del objeto anidado address
 * Estas modificaciones tampoco afectan al objeto ironman original
 * porque structuredClone() también clonó el objeto anidado
 */
spiderman.address.street = '456 Main St'
spiderman.address.city = 'Los Angeles'
spiderman.address.state = 'CA'

/**
 * Imprime ambos objetos en consola para comparar
 * 
 * Resultado esperado:
 * - ironman: mantiene sus valores originales
 * - spiderman: contiene los nuevos valores modificados
 * 
 * Esto demuestra que la clonación profunda funcionó correctamente
 */
console.log({ironman, spiderman})