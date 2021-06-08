import React from 'react';
import {InputAdornment, Button, TextField} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Form = (handler) => {
	return (
		<form onSubmit={handler.onSubmit}>
			<fieldset>
				<TextField
					type="text"
					id="githubUsername"
					name="githubUsername"
					className="githubUsername"
					helperText="Github username"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<GitHubIcon />
							</InputAdornment>
						)
					}}
				/>
				<Button type="submit">Submit</Button>
			</fieldset>
		</form>
	)
}

export default Form;
