function UncontrolledCheckbox(props) {
    const [selected, setSelected] = React.useState(props.initialValue);
  
    const checkboxChanges = (e) => {
      const newValue = e.target.checked;
      setSelected(newValue);
      console.log('El nueo valor es ' + newValue)
    };
  
    return (
      <div>
        <label>
          <input type="checkbox" checked={selected} onChange={checkboxChanges} />
          {props.name}
        </label>
      </div>
    );
  }
  

export default UncontrolledCheckbox;