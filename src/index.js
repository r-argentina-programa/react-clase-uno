// import { Welcome } from './components/Welcome.js';

// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

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

import {BlogPost} from './tarea/Tarea1.js'

ReactDOM.render(<BlogPost 
  paragraphs={['Ardilla',
  'Mi ardilla se llama Atilio',
  'Le gusta comer bellotas.']}
  author={{
    name:'Mauricio',
    description:'Programador Front End',
    img: 'https://avatars.githubusercontent.com/u/65625400?v=4'
  }}
/>, document.querySelector('#react-app'));
