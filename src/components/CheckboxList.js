import UncontrolledCheckbox from "./UncontrolledCheckbox.js";

function CheckboxList(props) {
  const { items } = props;

  return (
    <div>
      {Object.entries(items).map(([name, initialValue]) => (
        <UncontrolledCheckbox key={name} name={name} initialValue={initialValue} />
      ))}
    </div>
  );
}

export default CheckboxList;
