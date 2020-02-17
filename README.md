# React clase uno

Este repositorio contiene scripts básicos para correr código JSX compilado. Para correr el código, hay que seguir los siguientes pasos:

1. `npm i` (instala las dependencias en node_modules, **solo debería ser necesario hacer esto una vez**)
2. `npm run compiler` (inicia el compilador de babel, este es un proceso que queda corriendo y **no debe cerrarse la consola**)
3. En una consola nueva, `npm run server` (inicia el servidor de archivos estáticos, este es un proceso que queda corriendo y **no debe cerrarse la consola**)
4. Abrí la página `localhost:8080` en tu navegador.

## Preguntas frecuentes

### Mi navegador muestra una pantalla en blanco!

Si el navegador no muestra nada, significa que React no está renderizando. Mirá la consola de tu navegador a ver si tira algún error.
Si ves tu código en JSX dentro del navegador, significa que estás importando el código fuente en vez del compilado. Asegurate de que tus imports estén apuntando a la carpeta `lib/` y no `src/`. También asegurate de estar corriendo el compilador

### El proyecto puede correr otros archivos html que no sean index.html?

Sí. Nuestro http-server está mostrando toda la carpeta detrás de `localhost` y está mapeando `index.html` para que sea el primer archivo que ves. Si quisieras correr otro archivo, por ejemplo `index-mio.html`, podés visitar `localhost:8080/index-mio.html`.

### Qué son esas dependencias de babel?

Babel es nuestro compilador y requiere 3 dependencias: `babel`, `babel-cli` y `babel-preset-react-app`.

- `babel` es el código del compilador
- `babel-cli` es la herramienta que nos permite llamarlo desde la consola
- `babel-preset-react-app` son las instrucciones que babel requiere para compilar JSX

### Qué hace exactamente `npm i`?

`npm i` está instalando todas las dependencias que están en nuestro `package.json` (react, http-server y babel) en la carpeta node_modules del proyecto. Esto nos permite correr el compilador y el servidor desde los llamados scripts de npm (`npm run compiler` y `npm run server`).
