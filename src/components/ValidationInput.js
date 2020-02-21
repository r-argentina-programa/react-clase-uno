const ValidationInput = props => {
	const [value, setValidation] = React.useState('');
	const validation = value =>
		value.match(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	return (
		<div>
			<input
				onChange={e => {
					setValidation(e.target.value);
				}}
				value={value}
				className={validation(value) ? 'input-match' : 'input'}
				type={props.isPassword ? 'password' : 'email'}
				placeholder={props.isPassword ? 'Password' : 'Email'}
			/>
		</div>
	);
};

export default ValidationInput;
