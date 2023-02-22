function ValidationInput(props){
    const [value, setValue] = React.useState("");
    const inputChanges = (e) => {
      const inputValue = e.target.value;
      setValue(inputValue);
    };
    const isValid = props.validation(value);
    const inputClassName = `input ${isValid ? "" : "input-match"}`;
    return (
      <input
        className={inputClassName}
        value={value}
        onChange={inputChanges}
        type={props.isPassword ? "password" : "text"}
        placeholder={props.placeholder}
      />
    );
  }

export default ValidationInput;