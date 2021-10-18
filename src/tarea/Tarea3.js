
export function UncontrolledCheckbox(props) {
    const [check, setCheck] = React.useState(props.initialValue);

    return(
        <div>
            <label>{props.name}</label>
            <input
                type="checkbox"
                checked={check}
                onChange={(e) => {setCheck(e.target.checked)}}
            />
        </div>
    )
}

export function CheckboxList(props) {
    const items = props.items;

    return(
        <React.Fragment>
            {Object.entries(items).map(([key, value], i) =>
                <UncontrolledCheckbox
                    key={i}
                    name={key}
                    initialValue={value}
                />)}
        </React.Fragment>
    )
}