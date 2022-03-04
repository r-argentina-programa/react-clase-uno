
import { Tarjeta, BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre, PasswordInput, ValidationInput } from "./tarea/Tarea2.js";
import { CheckboxList, UncontrolledCheckbox } from "./tarea/Tarea3.js";
import { CheckboxListWithState } from "./tarea/Tarea4.js";

const reactApp = document.getElementById('react-app')

// Tarea 1

ReactDOM.render(

<React.Fragment>
  <Tarjeta
  imagen='https://avatars.githubusercontent.com/u/71040644?s=96&v=4'
  nombre='Ana Rodríguez'
  titulo='Programadora Junior'
  />
<BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.
  La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
  Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
        nombre : 'Ana Rodríguez',
        titulo : 'Programadora Junior',
        foto:'https://avatars.githubusercontent.com/u/71040644?s=96&v=4'
    }}
  /></React.Fragment>, reactApp );

// Tarea 2

ReactDOM.render(<React.Fragment>
  <MatchNombre nombre ='Ana'/>
<PasswordInput minLength = {8} />
</React.Fragment>, reactApp)

ReactDOM.render(<React.Fragment>
<ValidationInput 
tipo='Nombre'
isPassword = {false}
validation = {(value) => value === 'Ana Rodríguez'}
/>

<ValidationInput 
tipo='Email'
isPassword = {false}
validation = {(value) => !value.match(" ") && value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) }
/>

<ValidationInput 
tipo='Password'
isPassword = {true}
validation = {(value) => value.length >=8 }
/>

</React.Fragment>, reactApp)

// Tarea 3


ReactDOM.render(<React.Fragment>
  <UncontrolledCheckbox 
  nombre='Checkbox 1'
  initialValue={true}
  />
  <CheckboxList
  items={{
  uno: false,
  dos:true,
  tres:false  
  }}/>
  </React.Fragment>,reactApp)

// Tarea 4


ReactDOM.render(<CheckboxListWithState
  items={{
    uno:false,
    dos:true,
    tres:false
  }}
  />, reactApp)
