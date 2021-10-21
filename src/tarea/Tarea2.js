
export function MatchNombre(props) {

    const [nombre, setNombre] = React.useState("");

    return(
        <input
        className={"input" + (nombre == props.nombre ? "-match" : "")}
        onChange={(e) => {setNombre(e.target.value)}}
        />
    )
}

export function PasswordInput(props) {
    const [minLength, setMinLength] = React.useState("");

    return(
        <input
        type="password"
        className={"input" + (minLength.length < props.minLength ? "-match" : "")}
        onChange={(e) => {setMinLength(e.target.value)}}
        />
    )
}

export function ValidationInput(props) {
    const [value, setValue] = React.useState("");

    return(
        <input className={"input" + (!props.validation(value) ? "-match" : "")}
        onChange={(e) => {setValue(e.target.value)}}
        type={props.isPassword ? "password" : ""}
        />
    )
}
