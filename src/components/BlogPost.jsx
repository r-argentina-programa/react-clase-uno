import Tarjeta from './Tarjeta.js';

const BlogPost = props => {
	return (
		<article className="post">
			<header className="post-header">
				<h2 className="post-title">Ardillas</h2>
				<Tarjeta nombre={props.autor.nombre} titulo={props.autor.titulo} imagen={props.autor.imagen} />
			</header>
			<p className="post-paragraph">Hoy vi una ardilla.</p>
			<p className="post-paragraph">
				La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes
				grandes y encima andaba siempre en cuatro patas, moviendo la cola.
			</p>
			<p className="post-paragraph">
				Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.
			</p>
		</article>
	);
};

export default BlogPost;
