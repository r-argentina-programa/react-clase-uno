import { Welcome } from './components/Welcome.js';
import { Tarjeta , BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre , PasswordInput, ValidationInput} from "./tarea/Tarea2.js";


ReactDOM.render(
    <Tarjeta 
        nombre="Julián Lannóo" 
        titulo="Programador Front-End" 
        imagen="https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/01/17/05/1170526_02c464a5989c3eac47872e16fa47396551c7f8da872acc240369448db3c13dee/lg.webp" 
        anchoImagen="50%"/>,

    document.getElementById('react-app')
);

ReactDOM.render(
    <BlogPost
  titulo="Ardillas"
  parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Tu nombre",
    titulo: "Tu título",
    imagen: "URL de tu imagen"
  }}/>,

  document.getElementById('react-app')
);
        
ReactDOM.render(
    <div>
      Nombre: 
      <MatchNombre
        nombre="Julian"
      />

      <br/>

      Password:
      <PasswordInput
        minLength={5}
      />

      <br/>

      Validation (largo):
      <ValidationInput
        validation={ (value) => value.length >= 8 }
        isPassword
      />

      <br/>

      Validation (espacio):
      <ValidationInput
        validation={ (value) => !value.match(" ")}
      />

      <br/>

      Validation (email):
      <ValidationInput
        validation={ (value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
      />
    </div>,
    document.getElementById('react-app')
);