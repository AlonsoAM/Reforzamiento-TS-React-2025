/**
 * @fileoverview Ejemplos de Template Strings (Literales de Plantilla) en TypeScript
 * Este archivo demuestra:
 * - Diferentes formas de declarar strings (comillas simples, dobles y backticks)
 * - Uso de template strings para interpolación de variables
 * - Ventajas de los template strings sobre la concatenación tradicional
 * - Manejo de caracteres especiales en strings
 */

/**
 * Variable que almacena el nombre usando comillas simples
 * Tipo: string - comillas simples son ideales para strings sin caracteres especiales
 */
const firstName: string = 'Alonso'

/**
 * Variable que almacena el apellido usando comillas dobles
 * Tipo: string - comillas dobles son útiles cuando el string contiene apostrofes
 * Nota: "O'Neal" contiene un apostrofe, por eso se usan comillas dobles
 */
const lastName: string = "O'Neal"

/**
 * Variable que combina nombre y apellido usando template strings
 * Tipo: string - utiliza backticks (`) para crear un template string
 * 
 * Template strings permiten:
 * - Interpolación de variables con ${variable}
 * - Strings multilínea
 * - Expresiones JavaScript dentro del string
 */
const fullName: string = `${firstName} ${lastName}`

/**
 * Imprime el nombre completo en consola
 * Resultado esperado: "Alonso O'Neal"
 */
console.log(fullName)
