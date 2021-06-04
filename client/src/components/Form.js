import React from 'react';

const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<fieldset>
				<label htmlFor="githubUsername">Github Username:</label>
				<input
					type="text"
					id="githubUsername"
					name="githubUsername"
					className="githubUsername"
				/>
				<input type="submit" />
			</fieldset>
		</form>
	)
}

export default Form;
