/**
 * @fileoverview Ejemplos básicos de declaración de variables con const y let en TypeScript
 * Este archivo demuestra:
 * - Uso de const para variables inmutables
 * - Uso de let para variables mutables
 * - Tipos primitivos: string, number, boolean
 * - Operaciones básicas con strings
 * - Salida por consola de objetos
 */

/**
 * Variable inmutable que almacena el nombre de pila
 * Tipo: string - cadena de texto
 */
const firstName: string = 'Alonso';

/**
 * Variable inmutable que almacena el apellido
 * Tipo: string - cadena de texto
 */
const lastName: string = 'Anchante';

/**
 * Variable mutable que representa un número de dado
 * Tipo: number - número entero
 * Puede ser modificada posteriormente al usar 'let'
 */
let diceNumber: number = 1;

/**
 * Variable inmutable que verifica si el apellido contiene la letra 'a'
 * Tipo: boolean - valor verdadero o falso
 * Utiliza el método includes() para buscar la letra en el string
 */
const containsLetterA: boolean = lastName.includes('a');

/**
 * Imprime en consola las variables booleana y numérica
 * Demuestra el uso de object shorthand property names
 */
console.log({containsLetterA, diceNumber});

/**
 * Imprime en consola las variables de texto (nombre y apellido)
 * Muestra cómo crear objetos con propiedades del mismo nombre que las variables
 */
console.log({firstName, lastName});
