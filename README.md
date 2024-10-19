# Sistema de Facturación Básico en TypeScript

Este proyecto implementa un sistema de facturación básico desarrollado en TypeScript. A continuación, se detallan los pasos para instalar las dependencias y ejecutar la aplicación.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (incluye npm)
- [npm](https://www.npmjs.com/) (normalmente se incluye con Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

   Este comando descargará todas las dependencias listadas en el archivo `package.json`, incluyendo TypeScript y `live-server`.

## Ejecución del Proyecto

Para ejecutar el proyecto, utiliza el siguiente comando:

```bash
npm run dev
```

Este comando iniciará `live-server`, lo que te permitirá ver tu aplicación en un servidor local. Los cambios que realices en el código se reflejarán automáticamente en el navegador.

## Estructura del Proyecto

```
tu-proyecto/
├── src/            // Carpeta que contiene los archivos TypeScript
│   └── index.ts
├── dist/           // Carpeta de salida para los archivos compilados
├── public/         // Carpeta donde están los estilos y el index.html
├── package.json    // Archivo de configuración del proyecto
└── tsconfig.json   // Archivo de configuración de TypeScript
```

## Notas Adicionales

- Para compilar el proyecto manualmente, puedes usar el siguiente comando:

  ```bash
  npx tsc
  ```

- Asegúrate de que tu archivo `tsconfig.json` esté configurado correctamente para compilar tu código.