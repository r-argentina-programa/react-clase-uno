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

function UncontrolledCheckbox(props) {
    let [checked, setChecked] = React.useState(props.initialValue);

    return(
        <div id="checkbox">
            <span>{props.name}</span>
            <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
        </div>
    )
}

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
    return(
        <div id="checkboxes">
            {Object.entries(props.items).map((cb, i) =>{
                return <UncontrolledCheckbox 
                    name={cb[0]}
                    initialValue={cb[1]}
                    key={i}
                />
                })
            }
        </div>
    )
}
