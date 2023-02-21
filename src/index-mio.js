import Tarjeta from "./components/Tarjeta.js";
import CrearPost from "./components/Post.js";

/*
ReactDOM.render(
    <div>
      <Tarjeta
        nombre="Valentin"
        titulo="Estudiante de Ingenieria y Programacion"
        imagen="https://avatars.githubusercontent.com/u/105892117?v=4"
      />
        <CrearPost
        titulo="Mi camino programando"
        parrafo={`Hoy hice mi primer componente.
        Tenia que crear una tarjeta con mi nombre, profesion y foto de perfil. Ademas debia poder usar props para cambiar los datos.
        Pero me encontre con unos errores de React que Julián me ayudó a resolver.
        Gracias, Julián😄.`}
/>
    </div>,
    document.getElementById("root")
  );
*/


import MatchNombre from "./components/MatchNombre.js";
import PasswordInput from "./components/PasswordInput.js";
import ValidationInput from "./components/ValidationInput.js";

const minLengthValidation = (value) => value.length >= 8;
const noSpaceValidation = (value) => !value.match(" ");
const emailValidation = (value) =>
  value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  
ReactDOM.render(
  <div>
  <MatchNombre
    nombre= "Valentin"
  />
  <PasswordInput
    minLength= "8"
  />
  <ValidationInput
    validation={minLengthValidation}
    isPassword={true}
    placeholder="Más de 8 caracteres"
  />
  <ValidationInput
    validation={noSpaceValidation}
    isPassword={false}
    placeholder="Sin espacios"
  />
  <ValidationInput
    validation={emailValidation}
    isPassword={false}
    placeholder="Dirección de email válida"
  />
  </div>,
  document.getElementById("root")

)
  