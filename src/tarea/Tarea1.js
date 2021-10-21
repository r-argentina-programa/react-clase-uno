
export function Tarjeta(props) {
  return(
    <div className="tarjeta">
     <img
      src={props.imagen}
      alt="Foto de perfil"
      className="tarjeta-img"
     />
     <div className="tarjeta-data">
      <header className="tarjeta-data-header">{props.nombre}</header>
      <span>{props.titulo}</span>
     </div>
    </div>
  )
}

export function BlogPost(props) {
  const oraciones = props.parrafos.split('\n');
  return (
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">{props.titulo}</h2>
        <Tarjeta {...props.autor} />
      </header>
          {oraciones.map((oracion, i) => (
            <p key={i} className="post-paragraph">{oracion}</p>
          ))};
    </article>
  );
}
