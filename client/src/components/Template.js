import React from 'react';
import {Fragment} from 'react';
import {
	Card, 
	CardContent, 
	Typography,
	makeStyles,
	Button } from '@material-ui/core';

const IsNotUser = () => {
	return <p><em>Oops!</em> user doesn't exist!</p>
}

const propIsNull = (property, render) => {
	return property === 'null' ? '' : render;
}

const useStyles = makeStyles({
	user: {
		minWidth: 400,
		maxWidth: 600,
	},

	title: {
		fontSize: 29,
	}
});

const IsUser = ({ data }) => {
	const classes = useStyles();

	return (
		<Fragment>
			<Typography className={classes.title} component="h2">{data.login}</Typography>
			{
				propIsNull(data.bio,
				<Fragment>
					<Typography variant="h6" component="h3">Bio</Typography>
					<Typography color="textSecondary" component="p">{data.bio}</Typography>
				</Fragment>)
			}
			<Typography component="p">Followers: {data.followers}</Typography>
			<Typography component="p">Following: {data.following}</Typography>
			{
				propIsNull(data.company,
				<Typography component="p">Mompany: {data.company}</Typography>)
			}
			{
				propIsNull(data.location,
				<Typography>location: {data.location}</Typography>)
			}
			<Typography>github: <a href={`${data.html_url}`}>
				{data.html_url}</a></Typography>
			{
				propIsNull(data.email,
				<Typography>email: {data.email}</Typography>)
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
