/**
 * @fileoverview Ejemplos de Funciones en TypeScript
 * Este archivo demuestra:
 * - Funciones tradicionales vs arrow functions
 * - Tipado de parámetros y valores de retorno
 * - Funciones que retornan objetos
 * - Uso de interfaces para tipar retornos de funciones
 * - Métodos de arrays y callback functions
 * - Inferencia de tipos en TypeScript
 */

/**
 * Función tradicional que saluda a una persona
 * 
 * @param name - Nombre de la persona a saludar (tipo string)
 * @returns Mensaje de saludo formateado (tipo string)
 * 
 * Características:
 * - Declarada con la palabra clave 'function'
 * - Parámetro tipado explícitamente
 * - Tipo de retorno especificado explícitamente
 * - Tiene hoisting (puede ser llamada antes de su declaración)
 */
function greet(name: string): string {
  return `Hola, ${name}!`
}

/**
 * Arrow function que realiza la misma función que greet()
 * 
 * @param name - Nombre de la persona a saludar (tipo string)
 * @returns Mensaje de saludo formateado (tipo string)
 * 
 * Características:
 * - Sintaxis más concisa con =>
 * - No tiene hoisting (debe ser declarada antes de usarse)
 * - Útil para funciones simples de una línea
 * - Mantiene el contexto 'this' del scope padre
 */
const greet2 = (name: string): string => `Hola, ${name}!`

/**
 * Llamadas a las funciones de saludo para demostrar su uso
 * Ambas funciones producen el mismo resultado pero con sintaxis diferente
 */
const message = greet('Goku')
const message2 = greet2('Vegeta')
console.log({message, message2})

/**
 * Función tradicional que retorna un objeto
 * 
 * @returns Objeto con información de usuario
 * 
 * Nota: TypeScript infiere automáticamente el tipo de retorno
 * basándose en la estructura del objeto retornado
 */
function getUser() {
  return {
    uid: 'ABC-123',
    username: 'aanchante'
  }
}

/**
 * Interface que define la estructura de un objeto User
 * 
 * Define el contrato que deben cumplir los objetos de tipo User
 * Utilizada para tipar explícitamente el retorno de getUser2()
 */
interface User {
  uid: string
  username: string
}

/**
 * Arrow function que retorna un objeto tipado con interface
 * 
 * @returns Objeto User con uid y username
 * 
 * Características:
 * - Tipo de retorno especificado como User (interface)
 * - Los paréntesis alrededor del objeto son necesarios para diferenciarlo
 *   del bloque de código de la función
 * - TypeScript valida que el objeto retornado cumpla con la interface User
 */
const getUser2 = (): User => ({
  uid: 'ABC-125',
  username: 'crosas'
})

/**
 * Llamadas a las funciones que retornan objetos
 * Demuestra que ambas funciones retornan objetos con la misma estructura
 */
const user = getUser()
const user2 = getUser2()
console.log({user, user2})

/**
 * Array de números para demostrar métodos de arrays
 * Tipado explícito como number[] para claridad
 */
const myNumbers: number[] = [1, 2, 3]

/**
 * Uso del método forEach() con una función callback
 * 
 * console.log se pasa como función callback a forEach()
 * forEach() llama a console.log para cada elemento del array
 * 
 * console.log recibe automáticamente:
 * - value: el valor del elemento actual
 * - index: el índice del elemento actual  
 * - array: referencia al array completo
 * 
 * Resultado: imprime cada número con su índice y el array completo
 */
myNumbers.forEach(console.log)
