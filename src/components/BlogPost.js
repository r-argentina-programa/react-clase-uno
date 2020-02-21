import Tarjeta from './Tarjeta.js';

const BlogPost = props => {
	return (
		<article className="post">
			<header className="post-header">
				<h2 className="post-title">{props.titulo}</h2>
				<Tarjeta
					nombre={props.autor.nombre}
					titulo={props.autor.titulo}
					imagen={props.autor.imagen}
				/>
			</header>
			{props.parrafos.split('\n').map((parrafo, key) => {
				return (
					<p key={key} className="post-paragraph">
						{parrafo}
					</p>
				);
			})}
		</article>
	);
};

export default BlogPost;
