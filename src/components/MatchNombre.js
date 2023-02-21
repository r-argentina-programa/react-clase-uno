function MatchNombre(props){
    const [value, setValue] = React.useState("");
    const inputChanges = (e)=>{
        const inputValue = e.target.value;
        setValue(inputValue);
    }
    const name = value.toLowerCase().includes(props.nombre.toLowerCase());
    const inputClassName = `input ${name ? "input-match" : ""}`
    return (
        <input
          className={inputClassName}
          value={value}
          onChange={inputChanges}
        />
      );
    }
export default MatchNombre;