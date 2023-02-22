import UncontrolledCheckbox from './UncontrolledCheckbox';

export function CheckboxList(props) {
  const { items } = props;

  return (
    <div>
      {Object.entries(items).map(([name, initialValue]) => (
        <UncontrolledCheckbox key={name} name={name} initialValue={initialValue} />
      ))}
    </div>
  );
}
