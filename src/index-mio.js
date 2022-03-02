import { Tarjeta, BlogPost } from "./tarea/Tarea1.js";



const reactApp = document.getElementById('react-app')

ReactDOM.render(<BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.
  La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
  Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
        nombre : 'Ana Rodríguez',
        titulo : 'Programadora Junior',
        foto:'https://avatars.githubusercontent.com/u/71040644?s=96&v=4'
    }}
  />, reactApp )

// import { Welcome } from './components/Welcome.js';
// 
// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));
// 
// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
