import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Coffee from '../images/coffee.gif';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
	margin: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
	padding: theme.spacing(1, 5),
	margin: theme.spacing(3),
  },
  paragraph: {
	padding: theme.spacing(0, 30),
	['@media (max-width:1050px)']: {
		padding: theme.spacing(0, 15),
	  },
	  ['@media (max-width:700px)']: {
		padding: theme.spacing(0),
	  },
	margin: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
	"& h1":{
		textAlign: 'center',
	},
	"& img":{
		width: "100%",
	}
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
	
      <Grid container spacing={3}>
	  <Grid item xs={12}>
          <Paper className={classes.paragraph}>
		  <h1>404 Page not found</h1>
			<img alt="coffee cup spilling over" src={Coffee} />
			<Button className={classes.button} variant="outlined" color="secondary" href="/">Back</Button>
		  </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


























