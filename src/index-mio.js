// import { Tarjeta, BlogPost } from './tarea/Tarea1.js';
// import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';
// import { CheckboxList } from './tarea/Tarea3.js';
// import { CheckboxListWithState } from "./tarea/Tarea4.js";

//                            TAREA 1
//---------------------------------------------------------

// ReactDOM.render(
//     <section>

//         <Tarjeta
//           nombre="Federico Estigarribia"
//           titulo="Programador Front End"
//           imagen="https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698__340.jpg"
//         />

//         <BlogPost
//             titulo="Ardillas"
//             parrafos={
//                 `Hoy vi una ardilla.
//                 La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
//                 Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
//             autor={{
//                 nombre: "Federico Estigarribia",
//                 titulo: "Programador Front End",
//                 imagen: "https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698__340.jpg"
//             }}
//         />
//     </section>,
//     document.getElementById('react-app')
//   );



//                                 TAREA 2
//-----------------------------------------------------------------

// ReactDOM.render(
//     <section>
//         Nombre:
//         <MatchNombre nombre='Federico'/>

//         <br/>

//         Password:
//         <PasswordInput minLength='8' />

//         <br/>

//         Validacion(cantidad de caracteres):
//         <ValidationInput validation={(value) => value.length >= 8} isPassword='true' />

//         <br/>

//         Validacion(espacios):
//         <ValidationInput validation={(value) => !value.match(" ")} />

//         <br/>

//         Validacion(dirección válida):
//         <ValidationInput validation={(value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)} />

//     </section>,
//     document.getElementById('react-app')
// )



// TAREA 3
//---------------------------------------------------------------------

// ReactDOM.render(
//     <CheckboxList
//         items = {{
//             Uno: false,
//             Dos: true,
//             Tres: false
//         }}
//     />,
//     document.getElementById('react-app')
// )



// TAREA 4
//---------------------------------------------------------------------

// ReactDOM.render(
//     <CheckboxListWithState
//          items = {{
//             Uno: false,
//              Dos: true,
//             Tres: false
//         }}
//     />,
//     document.getElementById('react-app')
// )