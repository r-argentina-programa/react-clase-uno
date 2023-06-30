import { Button } from './Button.js';

function ToDoInput(props) {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Button
        onClick={() => {
          props.onAddInput(value);
          setValue('');
        }}
      >
        Add to list!
      </Button>
    </div>
  );
}

export function ToDoList(props) {
  const [items, setItems] = React.useState([]);
  const removeFromItems = indexToRemove =>
    setItems(items.filter((_, index) => index !== indexToRemove));

  return (
    <div className="main-page">
      <ToDoInput onAddInput={newItem => setItems([...items, newItem])} />
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <Button onClick={() => removeFromItems(i)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
