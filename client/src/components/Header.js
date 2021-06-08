import React from 'react'
import { Typography } from '@material-ui/core';
import useStyles from '../Style';

const Header = () => {
	const classes = useStyles();

	return ( 
		<header>
			<Typography component="h1" className={classes.headerMain} variant="h4">Github API</Typography>
		</header>
	)
}

export default Header;
