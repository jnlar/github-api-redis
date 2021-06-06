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
			<h2>user: {data.userData.login}</h2>
			<p>repos: <a href={`${data.userData.repos_url}`}>
				{data.userData.public_repos}</a></p>
			{
				checkIfPropNull(data.userData.bio, 
				<p>bio: {data.userData.bio}</p>)
			}
			<p>followers: {data.userData.followers}</p>
			<p>following: {data.userData.following}</p>
			{
				checkIfPropNull(data.userData.company, 
				<p>company: {data.userData.company}</p>)
			}
			{
				checkIfPropNull(data.userData.location,
				<p>location: {data.userData.location}</p>)
			}
			<p>github: <a href={`${data.userData.html_url}`}>
				{data.userData.html_url}</a></p>
			{
				checkIfPropNull(data.userData.email, 
				<p>email: {data.userData.email}</p>)
			}
		</Fragment>
	)
}

const Template = ({ data }) => {
	return (
		<div className="my-card">
			<div className="my-card-content">
				{
					data.userData.message ? (
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
