import React from 'react';

const Form = (handler) => {
	return (
		<form onSubmit={handler.onSubmit}>
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
