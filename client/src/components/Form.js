import React from 'react';
import {Typography, InputAdornment, Button, TextField} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from '../Style';

const Form = (handler) => {
	const classes = useStyles();

	return (
		<Typography component="form" className={classes.fieldset} onSubmit={handler.onSubmit}>
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
		</Typography>
	)
}

export default Form;
