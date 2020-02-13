export function Button(props) {
  return (
    <button className={'button ' + props.className || ''} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
