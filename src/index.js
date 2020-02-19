
import { BlogPost } from './tarea/Tarea1.js';
import { MatchNombre } from './tarea/Tarea2.js';
import { PasswordInput } from './tarea/Tarea2.js';
import { UncontrolledCheckbox } from './tarea/Tarea3.js'
import {CheckboxList} from './tarea/Tarea3.js'
import { ControlledCheckbox } from './tarea/Tarea4.js';
import {CheckboxListWithState} from './tarea/Tarea4.js'

class Article {
  constructor(titulo, parrafos) {
    this.titulo = titulo;
    this.parrafos = parrafos;
  }
}

const article = new Article(
  'Reflexiones sobre Ardillas',
  'Hoy vi una ardilla La ardilla era negra, era más grande que otras ardillas \n, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\n Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.'
);

const items = {
  uno: false,
  dos: true,
  tres: false,
}

ReactDOM.render(<CheckboxListWithState items={items} />, document.querySelector('#react-app'));
//<BlogPost {...article}/>
//<MatchNombre name="julian"/>
//<PasswordInput length="7" />
//<UncontrolledCheckbox name="React Rulz" initialValue={true} />
//<CheckboxList items={items} />
//<ControlledCheckbox name="React Rulz" initialValue={true} />
//<CheckboxListWithState items={items} />