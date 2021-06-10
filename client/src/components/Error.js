import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Coffee from '../images/coffee.gif';
import Button from '@material-ui/core/Button';
import useStyles from '../Style';

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
	
      <Grid container spacing={3}>
	  <Grid item xs={12}>
          <Paper className={classes.paragraphError}>
		  <h1>404 Page not found</h1>
			<img alt="coffee cup spilling over" src={Coffee} />
			<Button className={classes.button} variant="outlined" color="secondary" href="/">Back</Button>
		  </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


























