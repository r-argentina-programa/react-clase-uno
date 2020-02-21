import BlogPost from './components/BlogPost.js';
import MatchNombre from './components/MatchNombre.js';
import PasswordInput from './components/PasswordInput.js';
import ValidationInput from './components/ValidationInput.js';

ReactDOM.render(
	<div>
		<BlogPost
			titulo="Ardillas"
			parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.
O tal vez un gato...`}
			autor={{
				nombre: 'Nacho',
				titulo: 'Frontend Dev Jr',
				imagen: 'https://ca.slack-edge.com/TNG5KKB2P-UNWP3HYKY-0b015efda2a9-512'
			}}
		/>
		<MatchNombre nombre="nacho" placeholder="Usuario" />
		<PasswordInput minLength="6" placeholder="Contraseña" />
		<ValidationInput  isPassword={false} />
	</div>,
	document.getElementById('react-app')
);
