import { BlogPost } from './tarea/Tarea1.js'

ReactDOM.render(
  <BlogPost
    titulo='Ardillas'
    parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
      nombre: 'Agustín Ramunno',
      titulo: 'Desarrollador front-end',
      imagen:
        'https://avatars.githubusercontent.com/u/99135134?s=400&u=4af9a4adc0d399f200ec18064b422b3d78261ada&v=4'
    }}
  />,
  document.getElementById('react-app')
)
