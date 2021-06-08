import React from 'react';
import {Button, TextField} from '@material-ui/core';

const Form = (handler) => {
	return (
		<form onSubmit={handler.onSubmit}>
			<fieldset>
				<TextField
					helperText="Github Username"
					type="text"
					id="githubUsername"
					name="githubUsername"
					className="githubUsername"
				/>
				<Button type="submit">Submit</Button>
			</fieldset>
		</form>
	)
}

export default Form;
