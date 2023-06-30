// import { Tarjeta } from "./tarea/Tarea1.js";

// ReactDOM.render(<Tarjeta
//     nombre="Daniel Nikiforov"
//     profesion="Programador"
//     imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
// />, document.getElementById('react-app'));

import { BlogPost } from "./tarea/Tarea1.js";

ReactDOM.render(<BlogPost 
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.
        La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
        Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`
    }
    autor={{
        nombre: "Daniel",
        titulo: "Primer Post",
        imagen: "https://avatars2.githubusercontent.com/u/14203988?s=460&v=4",
    }}
/>, document.getElementById("react-app"));