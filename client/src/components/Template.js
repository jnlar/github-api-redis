import React, { useState, Fragment } from 'react';
import {
	Card, 
	CardContent, 
	Typography,
	Button, 
	CardActions, } from '@material-ui/core';
import useStyles from '../Style';
import RepoAccordion from './Accordion';

const IsNotUser = () => {
	return <p><em>Oops!</em> user doesn't exist!</p>
}

const propIsNull = (property, render) => {
	return property === 'null' ? '' : render;
}

const IsUser = ({ data }) => {
	const classes = useStyles();

	return (
		<Card className={classes.user} variant="outlined">
			<CardContent>
				<Typography 
					className={classes.title} 
					component="h2">{data.login}
				</Typography>
				{
					propIsNull(data.bio,
					<Fragment>
						<Typography 
							className={classes.subTitle}
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
			</CardContent>
			<CardActions>
				<RepoAccordion userData={data} repos={data.public_repos}/>
			</CardActions>
		</Card>
	)
}

const Template = ({ data }) => {

	return (
		<Fragment>
			{
				data.message ? (
					<IsNotUser />
				) : (
					<IsUser data={data} />
				)
			}
		</Fragment>
	)
}

export default Template;
