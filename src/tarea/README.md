# Tareas

Para correr las tareas, seguiremos las prácticas que usa Fabricio.

1. En la base del proyecto, copiar el archivo `index.html` a un nuevo archivo `index-mio.html`
2. En la carpeta src, copiar el archivo `index.js` a un nuevo archivo `index-mio.js`
3. Agregar un único script `<script src="lib/index-mio.js" type="module"></script>`

Cuando vayan trabajando en las tareas, pueden reemplazar el componente renderizado por ReactDOM en `index-mio.js` por sus propios componentes para probarlos.

Por ejemplo, si quisieran probar la Tarjeta en clase uno, deberían agregar el siguiente código a `index-mio.js`

```jsx
import { Tarjeta } from './tarea/Tarea1.js';

ReactDOM.render(
  <Tarjeta
    nombre="Julián Absatz"
    titulo="Programador Front End"
    imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
  />,
  document.getElementById('react-app')
);
```

Las tareas consisten en completar los componentes en esta carpeta, según los comentarios.
