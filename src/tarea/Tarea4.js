
export function ControlledCheckbox(props) {

    return(
        <div>
            <label>{props.name}</label>
            <input
                type="checkbox"
                checked={props.initialValue}
                onChange={props.onChange}
            />
        </div>
    )
}

export function CheckboxListWithState(props) {
    const [items, setItems] = React.useState(props.items)

    return(
        <React.Fragment>
            {Object.entries(items).map(([key, value], i) =>
                <ControlledCheckbox
                    key={i}
                    name={key}
                    initialValue={value}
                    onChange={() => setItems({...items, [key]: !value})}
                />)}
        </React.Fragment>
    )
}