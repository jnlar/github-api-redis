import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  paragraph: {
    padding: theme.spacing(5, 20),
	['@media (max-width:700px)']: {
		padding: theme.spacing(5),
	  },
	margin: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
	"& h1":{
		textAlign: 'center',
	}
  },
  contact: {
    padding: theme.spacing(1),
	margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
	
      <Grid container spacing={3}>
	  <Grid item xs={12}>
          <Paper className={classes.paragraph}>
		  <h1>About Us</h1>
		  <p>We have met in class while studying Diploma of Website Development on TAFE and this project was developed as part of our curriculum. It covers technologies such as:</p>
		 	 <ul>
			  		<li>Linux</li>
  					<li>Node.JS</li>
  					<li>Redis</li>
  					<li>React.JS</li>
					<li>Material-Ui</li>
					<li>Git</li>
			</ul>
			<p>This project gave us the experience of a real working environment, working alongside other students as a team and sharing the workload as well as knowledge learned througout the project.</p>
		  </Paper>
        </Grid>
		<Grid item xs={12}>
          <Paper className={classes.contact}>
		  <h1>Contact Us</h1>
		  </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
			  <h2>Jonathan Archer</h2>
			  <p>jon357@pm.me</p>
			  <Button href="https://github.com/jnlar"><GitHubIcon /></Button>
		  </Paper>
        </Grid>
		<Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
			  <h2>Nathan Williams</h2>
			  <p>contact@nathwebdev.com</p>
			  <Button href="https://github.com/Creeds1996"><GitHubIcon /></Button>
		  </Paper>
        </Grid>
		<Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
			  <h2>Mohammad Rabbani</h2>
			  <p>ngnengr@yahoo.com</p>
			  <Button href="https://github.com/ngnengr"><GitHubIcon /></Button>
		  </Paper>
        </Grid>
		<Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
			  <h2>Gus Costa</h2>
			  <p>gustavo_leon88@hotmail.com</p>
			  <Button href="https://github.com/Guscosta88"><GitHubIcon /></Button>
		  </Paper>
        </Grid>
      </Grid>
    </div>
  );
}



