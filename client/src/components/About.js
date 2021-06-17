import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from '../Style';

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.content}
				container >
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
					<Paper className={classes.paperAbout}>
						<h2>Jonathan Archer</h2>
						<p>jon357@pm.me</p>
						<Typography component="a" target="_blank" href="https://github.com/jnlar"><GitHubIcon /></Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paperAbout}>
						<h2>Nathan Williams</h2>
						<p>contact@nathwebdev.com</p>
						<Typography component="a" target="_blank" href="https://github.com/Creeds1996"><GitHubIcon /></Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paperAbout}>
						<h2>Mohammad Rabbani</h2>
						<p>ngnengr@yahoo.com</p>
						<Typography component="a" target="_blank" href="https://github.com/ngnengr"><GitHubIcon /></Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paperAbout}>
						<h2>Gus Costa</h2>
						<p>gustavo_leon88@hotmail.com</p>
						<Typography component="a" target="_blank" href="https://github.com/Guscosta88"><GitHubIcon /></Typography>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
  );
}
