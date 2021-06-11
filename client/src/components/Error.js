import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Coffee from '../images/coffee.gif';
import Button from '@material-ui/core/Button';
import useStyles from '../Style';
import Typography from '@material-ui/core/Typography';

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
		<Fragment>
			<Box className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paragraphError}>
							<Typography className={classes.headerMain} component="h1" variant="h4">404 Page not found</Typography>
							<Typography component="img" alt="coffee cup spilling over" src={Coffee} />
							<Button className={classes.button} variant="outlined" color="secondary" href="/">Back</Button>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Fragment>
  );
}


























