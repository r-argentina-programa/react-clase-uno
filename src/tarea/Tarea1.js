/*
 * Para empezar, hagan que el componente devuelva este fragmento de html,
 * con los cambios necesarios para que sea compatible con JSX
 *
 * <div class="tarjeta">
 *  <img
 *   src="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
 *   alt="Foto de perfil"
 *   class="tarjeta-img"
 *  />
 *  <div class="tarjeta-data">
 *   <header class="tarjeta-data-header">Julián Absatz</header>
 *   <span>Programador Front End</span>
 *  </div>
 * </div>
 *
 * Luego, refactoricen el componente para que en vez de tener mi nombre, titulo e imagen, tengan los suyos.
 * Para hacer esto, usaremos las props del componente.
 * Este componente recibirá 3 props: nombre, titulo e imagen.
 * nombre será un string con su nombre
 * titulo será un string con su título
 * imagen será un string con la url de su foto de perfil.
 *
 * Para recrear el componente con mis datos por ejemplo, deberíamos renderizar el componente así:
 * <Tarjeta
 *   nombre="Julián Absatz"
 *   titulo="Programador Front End"
 *   imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
 * />
 *
 * Pueden reemplazar estos valores con sus datos y así tener su tarjeta personal
 * (aunque lamentablemente no veremos como imprimirla en este curso).
 *
 * Si no quieren poner una foto suya, pueden tomar la URL de su imagen de perfil de github, como hice yo.
 */

//import React from "react"



export function Tarjeta(props) {
  return (
    <React.Fragment>
    <div className="tarjeta">
      <img
        src={props.urlImagen}
        alt="Foto de perfil"
        className="tarjeta-img"
      />
      <div className="tarjeta-data">
        <header className="tarjeta-data-header">{props.nombre}</header>
        <span>{props.titulo}</span>
      </div>
    </div>
    </React.Fragment>
  )
}

/*
 * El esqueleto de este componente será nuestro primer post en un blog.
 * Ya tiene un esqueleto diseñado, por lo que hay que hacer solamente unos pequeños cambios:
 *
 * Reemplazar "Titulo de mi post" por una prop llamada "titulo" que venga desde arriba.
 * Reemplazar los tres párrafos de texto por una prop llamada "parrafos".
 * Esta prop será un string con saltos de texto para representar los diferentes párrafos.
 * Para hacer saltos de texto en un string común, pueden agregar \n donde los quieran agregar.
 * 
 * Ejemplo: "Hoy vi una ardilla.\nLa ardilla era negra."
 * 
 * O si prefieren, pueden hacerlo con un template string:

 `Hoy vi una ardilla.
La ardilla era negra.`

 * Sin embargo, verán que al tratar de imprimir esto, todo aparecerá dentro del mismo párrafo.
 * Por como funciona HTML, los diferentes párrafos deben estar en diferentes elementos <p>.
 * Podemos lograr este efecto haciendo `parrafo.split('\n').map()` y devolver un 
 * <p className="post-paragraph">{...}</p> en cada posición del array.
 * 
 * Si quieren un ejemplo de esto, pueden ver el archivo src/components/Page.js
 * 
 * Una vez que tengamos hecho esto, solo nos queda reemplazar los valores de la tarjeta.
 * Estos valores deberían venir por las props también, pero queda raro pasarle 
 * cosas como "nombre" o "imagen de perfil" a un componente "BlogPost".
 * 
 * Lo que haremos para evitar eso es pasar como prop un objeto "autor" que tenga la siguiente pinta:
 * {
 *   nombre: "Tu nombre",
 *   titulo: "Tu título",
 *   imagen: "URL de tu imagen"
 * }
 * 
 * Luego se le puede pasar a Tarjeta esas props haciendo <Tarjeta nombre={props.autor.nombre} ... />
 * 
 * Existe una forma más corta de hacerlo, escribiendo <Tarjeta {...props.autor} />.
 * Esto se llama object spread, no estoy seguro si lo llegaré a explicar en la clase o si lo habrán visto en algún lado.
 * Si no entienden como funciona, es preferible hacerlo de la manera anterior.
 * Veremos qué significa esta sintáxis en la próxima clase, si no lo hemos hecho aún.
 * 
 * Para recrear el BlogPost terminado con los datos originales, deberían poder usar este elemento:
 * 

<BlogPost
  titulo="Ardillas"
  parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Tu nombre",
    titulo: "Tu título",
    imagen: "URL de tu imagen"
  }}
/>

 */

export const autor = {
  nombre: 'Sergio',
  titulo: 'Estudiante de JavaScript',
  urlImagen: 'https://avatars.githubusercontent.com/u/55900410?v=4'
}

const texto = 'Muchas veces me he preguntado cuál es la diferencia entre un perro y una ardilla. \n A primeras pareciera que la diferencia es obvia, casi ridícula; yo tambián lo pensaba, hasta que realicé un anélisis detenido sobre estas criaturas. \n Ambos animales tienen dientes, cola y son peludos. \n Creo que debería continuar el estudio de estas fascinantes criaturas, después de todo, si a Juli le gustan las ardillas, por algo debe ser.';

export const textoEnParrafos = 
  texto.split('\n').map((parrafo, i) => {
    return (
      <p className="post-paragraph" key={`Parrafo ${i+1}`}>{parrafo}</p>
    )
  })

export function BlogPost(props) {
  return (
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">{props.titulo}</h2>
        <Tarjeta nombre={props.autor.nombre} titulo={props.autor.titulo} urlImagen={props.autor.urlImagen} />
      </header>
      <React.Fragment>
        {props.parrafos}
      </React.Fragment>
      {/* <p className="post-paragraph">Hoy vi una ardilla.</p>
      <p className="post-paragraph">
        La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y
        encima andaba siempre en cuatro patas, moviendo la cola.
      </p>
      <p className="post-paragraph">
        Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.
      </p> */}
    </article>
  );
}
