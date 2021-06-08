import React from 'react';
import {Grid} from "@material-ui/core";

const About = () => {
	return ( 
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
        
		<header>
			<h2>About us</h2>
		</header>
        <article>
            <p>We are the coffee break group and we rock!</p>
        </article>
			</Grid>
	)
}

export default About;
