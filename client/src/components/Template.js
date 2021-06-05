import React from 'react'; 
import {Fragment} from 'react';

const IsNotUser = () => {
	return <p><em>Oops!</em> user doesn't exist!</p>
}

const IsUser = ({ data }) => {
	return (
		<Fragment>
			<h2>user: {data.userData.login}</h2>
			<p>repos: {data.userData.public_repos}</p>
			<p>bio: {data.userData.bio}</p>
			<p>followers: {data.userData.followers}</p>
			<p>following: {data.userData.following}</p>
			<p>company: {data.userData.company}</p>
			<p>location: {data.userData.location}</p>
			<p>github: <a href={`${data.userData.html_url}`}>{data.userData.html_url}</a></p>
			<p>email: {data.userData.email}</p>
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
