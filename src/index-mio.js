import { Tarjeta , BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre , PasswordInput, ValidationInput} from "./tarea/Tarea2.js";
import { CheckboxList } from "./tarea/Tarea3.js";
        
ReactDOM.render(
  <div id="tareas">
    {/* Tarea 1 */}
    <div>
      <Tarjeta 
          nombre="Julián Lannóo" 
          titulo="Intento de Programador" 
          imagen="https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/01/17/05/1170526_02c464a5989c3eac47872e16fa47396551c7f8da872acc240369448db3c13dee/lg.webp" 
          anchoImagen="20%"/>
    </div>

    <div>
      <BlogPost
        titulo="Ardillas"
        parrafos={`Hoy vi una ardilla.
      La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
      Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
        autor={{
          nombre: "Tu nombre",
          titulo: "Tu título",
          imagen: "URL de tu imagen"
        }}/>
    </div>

    {/* Tarea 2 */}
    <div >
      Nombre: 
      <MatchNombre
        nombre="Julián"
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
    </div>

    {/* Tarea 3 */}
    <div>
      <CheckboxList items = {{
        Uno: false,
        Dos: true,
        Tres: false
      }}
      />
    </div>
  </div>,
  document.getElementById('react-app')
);