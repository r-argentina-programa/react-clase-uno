function Article(props) {
  const contenido = props.contenido;

  return (
    <article className="article">
      <header className="article-header">{contenido.titulo}</header>
      <p className="article-body">{contenido.cuerpo}</p>
    </article>
  );
}

function Articles(props) {
  const cantidadDeArticulos = props.articulos.length;

  return (
    <React.Fragment>
      <ul className="articles-list">
        {props.articulos.map(articulo => (
          <li key={articulo.titulo} className="articles-list-item">
            <Article contenido={articulo} />
          </li>
        ))}
      </ul>
      <div className="articles-total">
        Artículos totales: {cantidadDeArticulos === 0 ? 'Ninguno' : cantidadDeArticulos}
      </div>
    </React.Fragment>
  );
}

/*
   <Page
     titulo="Mi diario"
     articulos={[
       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
     ]}
   />,
*/  


export function Page(props) {
  return (
    <div className="main-page">
      <h1>{props.titulo}</h1>
      <Articles articulos={props.articulos} />
    </div>
  );
}
