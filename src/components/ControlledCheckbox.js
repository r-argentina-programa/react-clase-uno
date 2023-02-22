function ControlledCheckbox(props) {
    const handleChange = (event) => {
      const { name, checked } = event.target;
      props.onChange(name, checked);
    };
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            name={props.name}
            checked={props.checked}
            onChange={handleChange}
          />
          {props.name}
        </label>
      </div>
    );
  }

  export default ControlledCheckbox;