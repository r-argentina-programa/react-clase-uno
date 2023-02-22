import ControlledCheckbox from './ControlledCheckbox.js';

function ControlledCheckboxList(props) {
  const [checkboxes, setCheckboxes] = React.useState(props.items);

  const handleCheckboxChange = (checkboxName, isChecked) => {
    const updatedCheckboxes = {
      ...checkboxes,
      [checkboxName]: isChecked,
    };
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div>
      {Object.entries(checkboxes).map(([name, value]) => (
        <ControlledCheckbox
          key={name}
          name={name}
          checked={value}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}

export default ControlledCheckboxList;