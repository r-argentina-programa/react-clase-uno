const ValidationInput = props => {
	const [value, setValidation] = React.useState('');
	const validation = value => value.length >= 8;

	return (
		<div>
			<input
				onChange={e => {
					setValidation(e.target.value);
				}}
				value={value}
				className={validation(value) ? 'input-match' : 'input'}
				type={props.isPassword && 'password'}
			/>
		</div>
	);
};

export default ValidationInput;
