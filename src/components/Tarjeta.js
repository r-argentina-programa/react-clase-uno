function Tarjeta(props) {
  return (
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
  );
}

export default Tarjeta;