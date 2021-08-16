
// import { Tarjeta } from './tarea/Tarea1.js';

// ReactDOM.render(
//     <Tarjeta
//     nombre="Julián Absatz"
//     titulo="Programador Front End"
//     imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
//  />,
//  document.getElementById('react-app')
// )




// import { BlogPost } from './tarea/Tarea1.js';

// ReactDOM.render(
//     <BlogPost
//     titulo="Ardillas"
//     parrafos={[`Hoy vi una ardilla.`,
//     `La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.`,
//     `Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`]}
//     autor={{
//       nombre: "Tomas Ausino Palau",
//       titulo: "Ardillólogo",
//       imagen: "https://media-exp3.licdn.com/dms/image/C4E03AQGjckYVtxWg4A/profile-displayphoto-shrink_200_200/0/1621055888338?e=1632355200&v=beta&t=rfE_PIesgZ285V47EajA4tmdjRx2w9aJFVnQ2bfMFIg"
//     }}>
//     </BlogPost>,
//   document.getElementById('react-app')
// );


// import { MatchNombre } from './tarea/Tarea2.js';

// ReactDOM.render(
//   <MatchNombre 
//     minLength='Tomas'
     
//   />, 
//   document.getElementById("react-app")
// )

// import { PasswordInput } from './tarea/Tarea2.js';

// ReactDOM.render(
//   <PasswordInput 
//     minLength={5}
     
//   />, 
//   document.getElementById("react-app")

// )

// import { ValidationInput } from './tarea/Tarea2.js';

// ReactDOM.render(
//   <ValidationInput/>, 
//   document.getElementById("react-app")
// )

// import { UncontrolledCheckbox } from './tarea/Tarea3.js';

// ReactDOM.render(
//   <UncontrolledCheckbox 
//     name="checkbox"
//     initialvalue={false}
//   />, 
//   document.getElementById("react-app")
// )

// import { CheckboxList } from './tarea/Tarea3.js';

// ReactDOM.render(
//   <CheckboxList items={{
//                   uno: false,
//                   dos: true,
//                   tres: false
//                  }} 
//   />, 
//   document.getElementById("react-app")
// )

import { ControlledCheckbox } from './tarea/Tarea4.js';

// ReactDOM.render(
//   <ControlledCheckbox 
//     name="checkbox"
//     value={false}
//     onChange={(e) => {
//       return e.target.checked
//     } }

//   />, 
//   document.getElementById("react-app")
// )


import { CheckboxListWithState } from './tarea/Tarea4.js';

ReactDOM.render(
  <CheckboxListWithState items={{
       uno: false,
       dos: true,
       tres: false,
  }}

  />, 
  document.getElementById("react-app")
)

