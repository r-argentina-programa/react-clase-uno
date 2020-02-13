const nombre = 'Julián';

const elemento = React.createElement('div', null, 'Hola ', nombre);

const app = document.getElementById('react-app');

ReactDOM.render(elemento, app);
