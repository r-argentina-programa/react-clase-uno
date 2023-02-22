function CrearPost(props) {
    return (
      <article className="post">
        <header className="post-header">
          <h2 className="post-title">{props.titulo}</h2>
        </header>
        {props.parrafo.split('\n').map(parrafo => <p className="post-paragraph">{parrafo}</p>)}
      </article>
    );
  }
  
export default CrearPost;
  