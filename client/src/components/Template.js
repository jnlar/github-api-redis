import React, { Fragment } from 'react';
import {
	Card, 
	CardContent, 
	Typography,
	Button, 
	Box } from '@material-ui/core';
import useStyles from '../Style';

const IsNotUser = () => {
	return <p><em>Oops!</em> user doesn't exist!</p>
}

const propIsNull = (property, render) => {
	return property === 'null' ? '' : render;
}

const IsUser = ({ data }) => {
	const classes = useStyles();

	return (
		<Fragment>
			<Typography 
				className={classes.title} 
				component="h2">{data.login}
			</Typography>
			{
				propIsNull(data.bio,
				<Fragment>
					<Typography 
						variant="h6" 
						component="h3">Bio
					</Typography>
					<Typography 
						className={classes.p} 
						color="textSecondary" 
						component="p">{data.bio}
					</Typography>
				</Fragment>)
			}
			<Typography 
				className={classes.p} 
				component="p">Followers: {data.followers}
			</Typography>
			<Typography 
				className={classes.p}
				component="p">Following: {data.following}
			</Typography>
			{
				propIsNull(data.company,
				<Typography 
					className={classes.p} 
					component="p">Company: {data.company}
				</Typography>)
			}
			{
				propIsNull(data.location,
				<Typography 
					className={classes.p} 
					component="p">Location: {data.location}
				</Typography>)
			}
			<Typography 
				className={classes.p}
				component="p">Github: <a href={`${data.html_url}`}>
				{data.html_url}</a>
			</Typography>
			{
				propIsNull(data.email,
				<Typography 
					className={classes.p} 
					component="p">email: {data.email}
				</Typography>)
			}
			<Button>Repos ({data.public_repos})</Button>
		</Fragment>
	)
}

const Template = ({ data }) => {
	const classes = useStyles();

	return (
		<Card className={classes.user} variant="outlined">
			<CardContent>
				{
					data.message ? (
						<IsNotUser />
					) : (
						<IsUser data={data} />
					)
				}
			</CardContent>
		</Card>
	)
}

export default Template;
