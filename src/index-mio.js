import {
  Tarjeta,
  BlogPost,
} from './tarea/Tarea1.js'

import {
  MatchNombre,
  PasswordInput,
  ValidationInput,
} from './tarea/Tarea2.js'

import {
  UncontrolledCheckbox,
  CheckboxList,
} from './tarea/Tarea3.js'

import {
  ControlledCheckbox,
  CheckboxListWithState,
} from './tarea/Tarea4.js'

const $REACT_APP = document.getElementById('react-app');

//TAREA 1

ReactDOM.render(
<Tarjeta
    autor={{
        nombre: "Alonso Chareun",
        titulo: "Dev in dev",
        imagen: "https://avatars3.githubusercontent.com/u/55903156?s=460&v=4",
    }}/>,
$REACT_APP);

ReactDOM.render(
  <BlogPost
  titulo="Ardillas"
  parrafos={`Hoy vi una ardilla.\n
  La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\n
  Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Alonso Chareun",
    titulo: "Dev in dev",
    imagen: "https://avatars3.githubusercontent.com/u/55903156?s=460&v=4"
  }}
/>,
    $REACT_APP
);

//TAREA 2

ReactDOM.render(
  <MatchNombre
  nombre="Alonso"
  />,
  $REACT_APP
)

ReactDOM.render(
  <PasswordInput
  minLength={6}
  />,
  $REACT_APP
)

ReactDOM.render(
  <ValidationInput
  isPassword={false}
  validation={(value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
  />,
  $REACT_APP
)

//TAREA 3

ReactDOM.render(
  <UncontrolledCheckbox
  name="Está checkeado?"
  initialValue={true}
  />,
  $REACT_APP
)

ReactDOM.render(
  <CheckboxList
  items={{
  uno: false,
  dos: true,
  tres: false,
  }}
  />,
  $REACT_APP
)

//TAREA 4

ReactDOM.render(
  <ControlledCheckbox
  name="Está checkeado?"
  value={true}
  onChange={() => alert("Lo checkeaste")}
  />,
  $REACT_APP
)

ReactDOM.render(
  <CheckboxListWithState
  items={{
    uno: false,
    dos: true,
    tres: false,
  }}
  />,
  $REACT_APP
)
