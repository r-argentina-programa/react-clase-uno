/*
 * Este componente debe renderizar un input que cambie de clase cuando contiene tu nombre.
 * Recibirá una prop: nombre (un string con tu nombre).
 * También tendrá un estado: value.
 * value representa el contenido del input. Si escribiste "Hola", value debe ser "Hola".
 * Este input debe tener siempre la clase "input", y cuando `value` incluye tu nombre,
 * también debe tener la clase "input-match".
 * Si completaste bien el componente, verás que al escribir una string que contenga tu nombre,
 * el input cambiará de azul a rojo.
 *
 * DATO: usen la prop "value" para setear el nombre del input y "onChange" como event handler para cambiar el estado.
 * Para obtener el valor del input en el event handler, deberán usar la propiedad `event.target.value`.
 */

export function MatchNombre(props) {
  const [value, setValue] = React.useState('')

  function handleSetValue(e) {
    setValue(e.target.value)
  }

  return (
    <input
      className={`input ${value === props.nombre ? 'input-match' : ''}`}
      value={value}
      nombre={props.nombre}
      onChange={handleSetValue}
    />
  )
}

/*
 * Componentes como este son usados a menudo para hacer validaciones de inputs
 * sin tener que hacer click en un botón. Por ejemplo, se podría hacer una validación
 * para ver que una contraseña no sea más corta de lo que se espera.
 *
 * De hecho, hagamos exactamente eso.
 *
 * Este componente será muy parecido al anterior, de hecho pueden copiar y pegar lo que hicieron.
 * La diferencia es que en vez de recibir "nombre", este componente recibirá la prop "minLength".
 * Esta prop es un número que representa la longitud mínima de la contraseña.
 * Si nuestro `value` es menor que `minLength`, input deberá tener la clase "input-match".
 *
 * Y ya que estamos, agreguémosle la prop type="password" al input,
 * así tendrá la pinta de una verdadera contraseña.
 *
 * Si hicieron todo bien, el input se pondrá rojo si no pasaron el tamaño mínimo de la contraseña.
 */

export function PasswordInput(props) {
  const [value, setValue] = React.useState('')

  function handleSetValue(e) {
    setValue(e.target.value)
  }

  return (
    <input
      type='password'
      className={`input ${
        value.length >= props.minLength ? 'input-match' : ''
      }`}
      value={value}
      onChange={handleSetValue}
    />
  )
}

/*
 * Estos componentes están bastante buenos, pero estamos repitiendo mucho código,
 * son prácticamente iguales salvo por un par de diferencias.
 * Por suerte React nos permite compartir esas funcionalidades con muy poco esfuerzo.
 * Este próximo componente debe tener las capacidades de ser cualquiera de los anteriores.
 *
 * (Nuevamente, será conveniente empezar copiando y pegando el componente anterior)
 * Este componente recibirá 1 prop: validation.
 * validation es una función que recibe el valor del componente y devuelve true o false,
 * según si el componente es válido.
 *
 * Si esa función devuelve false, el input deberá tener la clase "input-match".
 *
 * DATO: Pueden usar las siguientes funciones como prueba:
 * - (value) => value.length >= 8;
 *   Esta función chequea que el input tenga más de 8 caracteres.
 *
 * - (value) => !value.match(" ");
 *   Esta función chequea que el input no tenga espacios.
 *
 * - (value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
 *   Esta hermosa regex robada de internet chequea que el input sea una dirección de mail válida.
 *
 * Si quieren, pueden agregar una prop extra "isPassword". Si es true el input deberá tener type="password".
 */

export function ValidationInput(props) {
  const [value, setValue] = React.useState('')

  function handleSetValue(e) {
    setValue(e.target.value)
  }

  function validation(value) {
    if (props.isPassword && value.length >= props.minLength) {
      return true
    }

    if (
      value.length >= props.minLength &&
      !value.match(' ') &&
      value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return true
    }

    return false
  }

  return (
    <input
      type={props.isPassword ? 'password' : ''}
      className={`input ${validation(value) ? 'input-match' : ''}`}
      value={value}
      onChange={handleSetValue}
    />
  )
}
