/**
 * @fileoverview Ejemplos de Arrays en TypeScript
 * Este archivo demuestra:
 * - Declaración de arrays con tipado explícito
 * - Clonación de arrays usando structuredClone()
 * - Métodos de manipulación de arrays (push)
 * - Diferencia entre array original y array clonado
 * - Inmutabilidad y mutabilidad en arrays
 */

/**
 * Array de números con tipado explícito
 * 
 * Sintaxis: number[] indica que este array solo puede contener números
 * Contiene los números del 1 al 10 como elementos iniciales
 * 
 * Alternativas de sintaxis:
 * - number[] (usado aquí)
 * - Array<number> (sintaxis genérica)
 */
const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * Clonación del array original usando structuredClone()
 * 
 * structuredClone() crea una copia independiente del array original.
 * Para arrays simples (con tipos primitivos), también se podría usar:
 * - [...myArray] (spread operator)
 * - Array.from(myArray)
 * - myArray.slice()
 * 
 * Sin embargo, structuredClone() es más robusto para arrays complejos
 * con objetos anidados
 */
const myArray2 = structuredClone(myArray)

/**
 * Modificación del array clonado agregando un nuevo elemento
 * 
 * El método push() añade el elemento al final del array
 * Esta operación NO afecta al array original (myArray)
 * porque myArray2 es una copia independiente
 * 
 * Resultado: myArray2 tendrá 11 elementos, myArray seguirá con 10
 */
myArray2.push(11)

/**
 * Imprime ambos arrays en consola para comparar
 * 
 * Resultado esperado:
 * - myArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (sin cambios)
 * - myArray2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] (con elemento añadido)
 * 
 * Esto demuestra que la clonación funcionó correctamente y que
 * modificar un array no afecta al otro
 */
console.log({myArray, myArray2})

