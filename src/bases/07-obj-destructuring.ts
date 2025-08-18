/**
 * @fileoverview Ejemplos de Destructuring de Objetos en TypeScript
 * Este archivo demuestra:
 * - Destructuring básico de objetos
 * - Renombrado de propiedades durante destructuring
 * - Destructuring en parámetros de funciones
 * - Valores por defecto en destructuring
 * - Destructuring anidado (múltiples niveles)
 * - Combinación de destructuring con interfaces
 */

/**
 * Objeto que representa una persona/héroe
 * Contiene información básica que será utilizada para demostrar
 * diferentes técnicas de destructuring
 */
const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman'
}

/**
 * Destructuring básico con renombrado de propiedades
 * 
 * Sintaxis explicada:
 * - {name: ironmanName} → extrae 'name' y lo renombra como 'ironmanName'
 * - age → extrae 'age' manteniendo el mismo nombre
 * - key → extrae 'key' manteniendo el mismo nombre
 * 
 * Ventajas:
 * - Código más limpio y legible
 * - Evita repetir person.property múltiples veces
 * - Permite renombrar variables para mayor claridad
 */
const {name: ironmanName, age, key} = person
console.log({ironmanName, age, key})

/**
 * Interface que define la estructura de un héroe
 * 
 * Propiedades:
 * - name, age, key: propiedades requeridas
 * - rank: propiedad opcional (indicada por ?)
 * 
 * Esta interface será utilizada para tipar el destructuring
 * en los parámetros de la función useContext
 */
interface Hero {
  name: string
  age: number
  key: string
  rank?: string
}

/**
 * Función que demuestra destructuring en parámetros con valores por defecto
 * 
 * @param param0 - Objeto Hero destructurado directamente en los parámetros
 * @returns Objeto con información procesada del héroe
 * 
 * Características del destructuring en parámetros:
 * - {key, name, age, rank = 'Sin rango'}: destructura el objeto directamente
 * - rank = 'Sin rango': valor por defecto si rank no existe o es undefined
 * - : Hero: especifica que el parámetro debe cumplir con la interface Hero
 * 
 * Ventajas:
 * - No necesita acceder a propiedades dentro de la función
 * - Maneja valores por defecto automáticamente
 * - Tipado fuerte con la interface
 */
const useContext = ({key, name, age, rank = 'Sin rango'}: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age
    },
    rank
  }
}

/**
 * Destructuring del objeto retornado por useContext()
 * 
 * Extrae las propiedades de primer nivel:
 * - rank: rango del héroe (será 'Sin rango' por defecto)
 * - keyName: clave identificadora del héroe
 * - user: objeto anidado con información del usuario
 */
const {rank, keyName, user} = useContext(person)

/**
 * Destructuring anidado del objeto 'user'
 * 
 * Extrae la propiedad 'name' del objeto anidado 'user'
 * Demuestra cómo hacer destructuring en múltiples niveles
 * 
 * Alternativa en una línea:
 * const {rank, keyName, user: {name}} = useContext(person)
 */
const {name} = user

/**
 * Imprime los valores finales extraídos mediante destructuring
 * 
 * Resultado esperado:
 * - rank: 'Sin rango' (valor por defecto aplicado)
 * - keyName: 'Ironman' 
 * - name: 'Tony' (extraído del objeto anidado user)
 */
console.log({rank, keyName, name})

