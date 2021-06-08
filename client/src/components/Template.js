import React from 'react';
import {Fragment} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

const IsNotUser = () => {
	return <p><em>Oops!</em> user doesn't exist!</p>
}

const propIsNull = (property, render) => {
	return property === 'null' ? '' : render;
}

const IsUser = ({ data }) => {
	return (
		<Fragment>
			<Typography component="h2">{data.userData.login}</Typography>
			<p>repos: <a href={`${data.userData.repos_url}`}>
				{data.userData.public_repos}</a></p>
			{
				propIsNull(data.userData.bio,
				<p>bio: {data.userData.bio}</p>)
			}
			<p>followers: {data.userData.followers}</p>
			<p>following: {data.userData.following}</p>
			{
				propIsNull(data.userData.company,
				<p>company: {data.userData.company}</p>)
			}
			{
				propIsNull(data.userData.location,
				<p>location: {data.userData.location}</p>)
			}
			<p>github: <a href={`${data.userData.html_url}`}>
				{data.userData.html_url}</a></p>
			{
				propIsNull(data.userData.email,
				<p>email: {data.userData.email}</p>)
			}
		</Fragment>
	)
}

const Template = ({ data }) => {
	return (
		<Card variant="outlined">
			<CardContent>
				{
					data.userData.message ? (
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
