import React from 'react';
import Coffee from '../images/coffee.gif';
import {Grid} from "@material-ui/core";



const error = () => {
	return ( 
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
        
		<header>
		<h1>404 Page not found</h1>
		<img src={Coffee} />
		</header>
        
    
        
        </Grid>
	)
}

export default error;

