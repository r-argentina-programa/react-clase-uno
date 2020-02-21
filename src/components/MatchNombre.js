const MatchNombre = props => {
	const [value, setName] = React.useState('');
	return (
		<div>
			<input
				onChange={e => {
					setName(e.target.value);
				}}
				value={value}
				className={value.toLowerCase() === props.nombre ? 'input-match' : 'input'}
				placeholder={props.placeholder}
				type="text"
			/>
		</div>
	);
};

export default MatchNombre;
