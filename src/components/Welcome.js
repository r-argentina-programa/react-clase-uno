// atributos --> props

export function Welcome(props) {
  return (
    <div>
      Bienvenido, señor {props.nombre} {props.apellido}
    </div>
  );
}
