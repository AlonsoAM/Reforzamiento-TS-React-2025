/**
 * Desestructuración de Arrays (Array Destructuring)
 * 
 * Este archivo demuestra diferentes formas de desestructurar arrays en TypeScript,
 * incluyendo la omisión de elementos y el trabajo con funciones que retornan arrays.
 * 
 * @author Alonso Anchante
 * @version 1.0.0
 */

// Array de nombres de personajes de Dragon Ball
const characterNames = ['Goku', 'Vegeta', 'Trunks']

/**
 * Desestructuración con omisión de elementos
 * Usamos comas vacías para omitir los primeros dos elementos
 * y obtener directamente el tercer elemento (Trunks)
 */
const [, , trunks] = characterNames

console.log({trunks})

/**
 * Función que retorna un array con tipos constantes
 * El 'as const' hace que TypeScript infiera tipos literales específicos
 * en lugar de tipos generales (string y number)
 * 
 * @returns {readonly ["ABC", 123]} - Tupla constante con string y número
 */
const returnsArrayFn = () => {
  return ['ABC', 123] as const
}

/**
 * Desestructuración del array retornado por la función
 * numbers tendrá tipo 123 (literal)
 */
const [ , numbers ] = returnsArrayFn()


/**
 * Ejemplo de uso de las variables desestructuradas
 * Descomentado para mostrar cómo usar los valores obtenidos
 */
// @ts-ignore
console.log(numbers + 100)

