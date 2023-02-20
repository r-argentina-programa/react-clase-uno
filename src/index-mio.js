import Tarjeta from "./components/Tarjeta.js";
import CrearPost from "./components/Post.js";

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
        Pero me encontre con unos errores de React que Julián me ayudó a resolver.`}
/>
    </div>,
    document.getElementById("root")
  );