import React from "react";

function Input(props) {
	return (
		<input
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

export default Input;
