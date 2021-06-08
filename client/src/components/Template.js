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
			<h2>user: {data.login}</h2>
			<p>repos: <a href={`${data.repos_url}`}>
				{data.public_repos}</a></p>
			{
				propIsNull(data.bio,
				<p>bio: {data.bio}</p>)
			}
			<p>followers: {data.followers}</p>
			<p>following: {data.following}</p>
			{
				propIsNull(data.company,
				<p>company: {data.company}</p>)
			}
			{
				propIsNull(data.location,
				<p>location: {data.location}</p>)
			}
			<p>github: <a href={`${data.html_url}`}>
				{data.html_url}</a></p>
			{
				propIsNull(data.email,
				<p>email: {data.email}</p>)
			}
		</Fragment>
	)
}

const Template = ({ data }) => {
	return (
		<Card variant="outlined">
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
