import React from 'react';
import {Fragment} from 'react';

const IsNotUser = () => {
	return <p><em>Oops!</em> user doesn't exist!</p>
}

const checkIfPropNull = (property, render) => {
	return property === 'null' ? '' : render;
}

const IsUser = ({ data }) => {
	return (
		<Fragment>
			<h2>user: {data.login}</h2>
			<p>repos: <a href={`${data.repos_url}`}>
				{data.public_repos}</a></p>
			{
				checkIfPropNull(data.bio,
				<p>bio: {data.bio}</p>)
			}
			<p>followers: {data.followers}</p>
			<p>following: {data.following}</p>
			{
				checkIfPropNull(data.company,
				<p>company: {data.company}</p>)
			}
			{
				checkIfPropNull(data.location,
				<p>location: {data.location}</p>)
			}
			<p>github: <a href={`${data.html_url}`}>
				{data.html_url}</a></p>
			{
				checkIfPropNull(data.email,
				<p>email: {data.email}</p>)
			}
		</Fragment>
	)
}

const Template = ({ data }) => {
	return (
		<div className="my-card">
			<div className="my-card-content">
				{
					data.message ? (
						<IsNotUser />
					) : (
						<IsUser data={data} />
					)
				}
			</div>
		</div>
	)
}

export default Template;
