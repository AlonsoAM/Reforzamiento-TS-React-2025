/**
 * Simulación del Hook useState de React - Tarea de Desestructuración
 * 
 * Este archivo demuestra cómo crear una función similar al hook useState de React
 * utilizando desestructuración de arrays y funciones que retornan tuplas.
 * 
 * @author Alonso Anchante
 * @version 1.0.0
 */

/**
 * Función que simula el comportamiento básico del hook useState de React
 * Retorna un array con el valor actual y una función para actualizarlo
 * 
 * @param {string} value - Valor inicial del estado
 * @returns {readonly [string, (value: string) => void]} Tupla con el estado y función setter
 */
const useState = (value: string) => {
  /**
   * Función interna que simula el setter del estado
   * En esta implementación básica, solo imprime el nuevo valor en consola
   * 
   * @param {string} value - Nuevo valor a establecer
   */
  const fn = (value: string) => console.log(value)

  // Retornamos como tupla constante para preservar los tipos exactos
  return [ value, fn] as const
}

/**
 * Desestructuración del resultado de useState
 * - state: contiene el valor actual del estado ('Goku')
 * - setState: función para actualizar el estado
 */
const [state, setState] = useState('Goku')

/**
 * Ejemplos de uso:
 */

// Mostramos el estado inicial
console.log(state)

// Actualizamos el estado usando la función setState
setState('Vegeta')
