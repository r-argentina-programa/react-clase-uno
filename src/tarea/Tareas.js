import { Tarjeta, BlogPost } from './Tarea1.js';
import { MatchNombre, PasswordInput, ValidationInput } from './Tarea2.js';
import { CheckboxList } from './Tarea3.js';
import { CheckboxListWithState } from './Tarea4.js';

export default function Tareas(props) {
  return (
    <React.Fragment>
      {/* Tarea 1 */}
      <Tarjeta
        nombre="Julián Absatz"
        titulo="Programador Front End"
        imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
      />
      <BlogPost
        titulo="Ardillas"
        parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
        autor={{
          nombre: 'Julián Absatz',
          titulo: 'Programador Front End',
          imagen: 'https://avatars2.githubusercontent.com/u/14203988?s=460&v=4',
        }}
      />
      {/* Tarea 2 */}
      <MatchNombre nombre="julian" />
      <PasswordInput minLength={8} />
      <ValidationInput validation={value => value === 'Tarea 2'} />
      {/* Tarea 3 */}
      <CheckboxList
        items={{
          uno: false,
          dos: true,
          tres: false,
        }}
      />
      {/* Tarea 4 */}
      <CheckboxListWithState
        items={{
          uno: false,
          dos: true,
          tres: false,
        }}
      />
    </React.Fragment>
  );
}
