import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const theme = createMuiTheme({
	spacing: [0, 4, 8, 16, 32, 64],
});

const Header = () => {
	return ( 
		<header>
			<Typography component="h1" p={1} variant="h4">Github API</Typography>
		</header>
	)
}

export default Header;
