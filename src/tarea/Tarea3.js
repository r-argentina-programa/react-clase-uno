/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />) que se seleccione o des-seleccione al hacer click.
 * Debe tener su propio estado (una variable de tipo booleano que indique si el componente está seleccionado o no)
 * Recibirá dos props: name e initialValue.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * initialValue es un booleano que indica el valor inicial del checkbox.
 * onChange es una función que se debe disparar cuando el checkbox se selecciona (o des-selecciona), y debe tener como parámetro el valor nuevo del checkbox.
 *
 * DATO: la prop que define si un <input type="checkbox" /> está seleccionado es "checked"
 */
 
export function UncontrolledCheckbox(props) {
    const [selected, setSelected] = React.useState(true);
    return (
        <>
        <input 
            name={props.name}
            type="checkbox" 
            onChange={() => setSelected(!selected)}
            checked={selected && props.initialValue}
            htmlFor={props.name}
        />
        <label htmlFor={props.name}>{props.name}</label>
        </>
    );
};

/*
 * Este componente debe renderizar una lista de componentes UncontrolledCheckbox.
 * Debes completar ese componente antes de completar este.
 * Recibirá una prop: items.
 * items es un objeto de forma { [nombre]: [valorInicial] }, que liste todos los checkboxes por ejemplo:
 * <ControlledCheckboxList items={
 *   uno: false,
 *   dos: true,
 *   tres: false,
 * } />
 * debe renderizar tres checkboxes, con nombres "uno", "dos" y "tres", que inicien con valores false, true y false respectivamente.
 */

export function CheckboxList(props) {
    return (
        <fieldset>
            {Object.entries(props.items).map((item) => 
                <UncontrolledCheckbox
                    name={item[0]}
                    initialValue={item[1]}
                    key={item[0]}
                />
            )}
        </fieldset>
    );
};
