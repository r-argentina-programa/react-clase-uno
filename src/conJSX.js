const nombre = "Valentin";

const elemento = (
  <input
    onChange={(event) => {
      console.log(event.target.value);
    }}
  />
);

const app = document.getElementById("react-app");

ReactDOM.render(elemento, app);
 