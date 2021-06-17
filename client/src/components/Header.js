import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import useStyles from '../Style';

const Header = () => {
	const classes = useStyles();

	return ( 
		<Fragment>
			<Typography className={classes.goToCode} component="a" target="_blank" href="https://github.com/jnlar/github-api-redis">
				<CodeIcon />
			</Typography>
			<Typography component="header">
				<Typography component="h1" className={classes.headerMain} variant="h4">Github API</Typography>
			</Typography>
		</Fragment>
	)
}

export default Header;
