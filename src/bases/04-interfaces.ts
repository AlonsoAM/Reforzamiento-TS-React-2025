/**
 * @fileoverview Ejemplos de Interfaces en TypeScript
 * Este archivo demuestra:
 * - Definición de interfaces para estructurar objetos
 * - Propiedades opcionales con el operador ?
 * - Interfaces anidadas y su relación
 * - Implementación de interfaces en objetos
 * - Ventajas del tipado estático en TypeScript
 */

/**
 * Interface que define la estructura de una persona
 * 
 * Propiedades:
 * - firstName: nombre de la persona (requerido)
 * - lastName: apellido de la persona (requerido)
 * - age: edad de la persona (requerido)
 * - address: dirección de la persona (opcional - indicado por el ?)
 * 
 * El signo ? después de address indica que esta propiedad es opcional,
 * lo que significa que los objetos que implementen esta interface
 * pueden o no incluir la propiedad address
 */
interface Person {
  firstName: string
  lastName: string
  age: number
  address?: Address
}

/**
 * Interface que define la estructura de una dirección
 * 
 * Esta interface es utilizada como tipo para la propiedad address
 * en la interface Person, demostrando la composición de interfaces
 * 
 * Propiedades:
 * - postalCode: código postal (tipo number)
 * - city: ciudad (tipo string)
 */
interface Address {
  postalCode: number
  city: string
}

/**
 * Objeto que implementa la interface Person con todas las propiedades
 * 
 * Incluye la propiedad opcional address, demostrando cómo TypeScript
 * valida que el objeto anidado cumpla con la interface Address
 */
const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 30,
  address: {
    postalCode: 1231321,
    city: 'New York',
  }
}

/**
 * Objeto que implementa la interface Person sin la propiedad opcional
 * 
 * Este objeto es válido porque address es opcional (marcada con ?)
 * Demuestra la flexibilidad de las propiedades opcionales en interfaces
 */
const spiderman: Person = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 25
}

/**
 * Imprime ambos objetos en consola
 * 
 * Resultado esperado:
 * - ironman: objeto completo con address
 * - spiderman: objeto sin la propiedad address
 * 
 * Ambos son válidos según la interface Person
 */
console.log({ironman, spiderman})