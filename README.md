<div align="center">

# 🚀 Reforzamiento TypeScript


[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

</div>

---

Un proyecto educativo completo que abarca los conceptos fundamentales de TypeScript, diseñado para reforzar las bases del lenguaje antes de avanzar a frameworks más complejos como React.

## 📑 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Módulos de Aprendizaje](#-módulos-de-aprendizaje)
- [Funcionalidades](#-funcionalidades)
- [Configuración](#-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 📖 Descripción

Este proyecto es una colección práctica de ejemplos y ejercicios que cubren los conceptos esenciales de TypeScript. Cada módulo está diseñado para ser autocontenido, con documentación detallada y ejemplos prácticos que facilitan el aprendizaje progresivo.

### Objetivos de Aprendizaje

- ✅ Dominar la sintaxis básica de TypeScript
- ✅ Entender el sistema de tipos estático
- ✅ Practicar con interfaces y objetos complejos
- ✅ Implementar funciones tipadas y arrow functions
- ✅ Manipular arrays y objetos de forma segura
- ✅ Preparar bases sólidas para React/Angular

## 🛠 Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **TypeScript** | 5.8.3 | Lenguaje principal del proyecto |
| **Vite** | 7.1.2 | Bundler y servidor de desarrollo |
| **Node.js** | Latest | Entorno de ejecución |
| **npm** | Latest | Gestor de paquetes |

## 📁 Estructura del Proyecto
```

01-reforzamiento/
├── src/
│   ├── bases/                          # Módulos de aprendizaje
│   │   ├── 01-const-let.ts             # Variables y tipos primitivos
│   │   ├── 02-template-string.ts       # Template strings
│   │   ├── 03-object-literal.ts        # Objetos literales
│   │   ├── 04-interfaces.ts            # Interfaces y contratos
│   │   ├── 05-arrays.ts                # Manipulación de arrays
│   │   ├── 06-functions.ts             # Funciones y arrow functions
│   │   └── 07-obj-destructuring.ts     # Destructuring
│   ├── main.ts                         # Punto de entrada
│   ├── style.css                       # Estilos globales
│   └── vite-env.d.ts                   # Tipos de Vite
├── public/                             # Archivos estáticos
├── index.html                          # Template HTML
├── package.json                        # Dependencias y scripts
├── tsconfig.json                       # Configuración TypeScript
└── README.md                           # Este archivo
```
## 🚀 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm (v8 o superior)

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/01-reforzamiento.git
   cd 01-reforzamiento
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar instalación**
   ```bash
   npm run dev
   ```

## 💻 Uso

### Desarrollo Local

Para iniciar el servidor de desarrollo:
```bash
  npm run dev
```
El proyecto estará disponible en `http://localhost:5173`

### Explorar los Módulos

Cada archivo en `src/bases/` contiene ejemplos específicos. Puedes:

1. **Ejecutar módulos individuales** - Descomenta las importaciones en `main.ts`
2. **Inspeccionar la consola** - Cada módulo incluye `console.log()` explicativos
3. **Modificar código** - Experimenta con los ejemplos proporcionados

## 📚 Módulos de Aprendizaje

### 01. Variables y Tipos Primitivos (`01-const-let.ts`)
```
- Diferencias entre const y let
- Tipos primitivos: string, number, boolean
- Inmutabilidad vs mutabilidad
- Operaciones básicas con strings
```
### 02. Template Strings (`02-template-string.ts`)
```
- Interpolación de variables
- Expresiones en template strings
- Formato de texto avanzado
- Ventajas sobre concatenación tradicional
```
### 03. Objetos Literales (`03-object-literal.ts`)
```
- Creación de objetos complejos
- Objetos anidados
- Clonación profunda con structuredClone()
- Diferencia entre referencia y copia
```
### 04. Interfaces (`04-interfaces.ts`)
```
- Definición de contratos con interfaces
- Propiedades opcionales (?)
- Interfaces anidadas
- Tipado estático y validación
```
### 05. Arrays (`05-arrays.ts`)
```
- Tipado de arrays (number[], Array<T>)
- Clonación de arrays
- Métodos de manipulación
- Inmutabilidad en arrays
```
### 06. Funciones (`06-functions.ts`)
```
- Funciones tradicionales vs arrow functions
- Tipado de parámetros y retornos
- Funciones que retornan objetos
- Métodos de arrays y callbacks
```
### 07. Destructuring de Objetos (`07-obj-destructuring.ts`)
```
- Extracción de propiedades de objetos
- Renombrado de variables en destructuring
- Valores por defecto en destructuring
- Destructuring de objetos anidados
```
## ⚙ Funcionalidades

- 📖 **Documentación Detallada** - Cada función y concepto está completamente documentado
- 🔍 **Ejemplos Prácticos** - Código ejecutable con casos de uso reales
- 🎯 **Tipado Estricto** - Configuración TypeScript optimizada para aprendizaje
- 🔥 **Hot Reload** - Desarrollo ágil con Vite
- 📊 **Salida de Consola** - Visualización de resultados en tiempo real

## ⚙ Configuración

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",        // Sintaxis moderna de JavaScript
    "strict": true,            // Tipado estricto habilitado
    "noUnusedLocals": true,    // Detecta variables no utilizadas
    "noUnusedParameters": true // Detecta parámetros no utilizados
  }
}
```


### Vite
- **Hot Module Replacement (HMR)** habilitado
- **Servidor de desarrollo** optimizado
- **Build** optimizado para producción

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `npm run dev` | Inicia servidor de desarrollo |
| **build** | `npm run build` | Genera build de producción |
| **preview** | `npm run preview` | Preview del build de producción |

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crea** una branch para tu feature (`git checkout -b newBranch`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la branch (`git push origin newBranch`)
5. **Abre** un Pull Request

### Guidelines de Contribución

- Mantén el estilo de documentación JSDoc
- Incluye ejemplos prácticos para nuevos conceptos
- Asegúrate de que el código compile sin errores
- Añade tests si es aplicable

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🌟 ¿Te gusta el proyecto?

Si este proyecto te ha sido útil, considera:

- ⭐ Darle una estrella al repositorio
- 🐛 Reportar bugs o sugerir mejoras
- 📢 Compartirlo con otros desarrolladores
- 🤝 Contribuir con nuevos ejemplos

---
<div align="center">
Desarrollado con ❤️ para la comunidad TypeScript
</div>

> "La base sólida es el fundamento de todo gran edificio" - Este proyecto es tu base para dominar TypeScript