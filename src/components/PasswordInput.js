const PasswordInput = props => {
	const [value, setPass] = React.useState('');

	return (
		<div>
			<input
				onChange={e => {
					setPass(e.target.value);
				}}
				value={value}
				className={value.length <= Number(props.minLength) ? 'input' : 'input-match'}
				placeholder={props.placeholder}
				type="password"
			/>
		</div>
	);
};

export default PasswordInput;
