const nombre = 'Julián';

const elemento = (
  <button
    onClick={event => alert(`Hiciste click en el botón con texto "${event.target.innerText}"`)}
  >
    Hacé click
  </button>
);

const app = document.getElementById('react-app');

ReactDOM.render(elemento, app);
