// ! TAREA 1
// import { BlogPost } from './tarea/Tarea1.js'

// ReactDOM.render(
//   <BlogPost
//     titulo='Ardillas'
//     parrafos={`Hoy vi una ardilla.
// La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
// Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
//     autor={{
//       nombre: 'Agustín Ramunno',
//       titulo: 'Desarrollador front-end',
//       imagen:
//         'https://avatars.githubusercontent.com/u/99135134?s=400&u=4af9a4adc0d399f200ec18064b422b3d78261ada&v=4'
//     }}
//   />,
//   document.getElementById('react-app')
// )

// ! TAREA 2
// import { MatchNombre } from './tarea/Tarea2.js'

// ReactDOM.render(
//   <MatchNombre nombre='Agustin' />,
//   document.getElementById('react-app')
// )

// import { PasswordInput } from './tarea/Tarea2.js'

// ReactDOM.render(
//   <PasswordInput minLength='8' />,
//   document.getElementById('react-app')
// )

// import { ValidationInput } from './tarea/Tarea2.js'

// ReactDOM.render(
//   <ValidationInput minLength='8' />,
//   document.getElementById('react-app')
// )

// ! TAREA 3
// import { UncontrolledCheckbox } from './tarea/Tarea3.js'

// ReactDOM.render(
//   <UncontrolledCheckbox name='Heyyyyy' initialValue={false} />,
//   document.getElementById('react-app')
// )

// import { CheckboxList } from './tarea/Tarea3.js'

// ReactDOM.render(
//   <CheckboxList
//     items={{
//       uno: false,
//       dos: true,
//       tres: false
//     }}
//   />,
//   document.getElementById('react-app')
// )

// ! TAREA 4
// import { ControlledCheckbox } from './tarea/Tarea4.js'

// ReactDOM.render(
//   <ControlledCheckbox name='uno' value={false} />,
//   document.getElementById('react-app')
// )

import { CheckboxListWithState } from './tarea/Tarea4.js'

ReactDOM.render(
  <CheckboxListWithState items={{ uno: false, dos: true, tres: false }} />,
  document.getElementById('react-app')
)
