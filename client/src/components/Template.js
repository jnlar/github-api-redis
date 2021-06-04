import React from 'react'; 

const Template = ({ data }) => {
	return (
		<div className="card">
		{console.log(data.userData)}
			<div className="card-inner">
				<h2>user: {data.userData.login}</h2>
				<p>repos: {data.userData.public_repos}</p>
				<p>bio: {data.userData.bio}</p>
				<p>followers: {data.userData.followers}</p>
				<p>following: {data.userData.following}</p>
				<p>company: {data.userData.company}</p>
				<p>location: {data.userData.location}</p>
				<p>github: <a href={`${data.userData.html_url}`}>{data.userData.html_url}</a></p>
				<p>email: {data.userData.email}</p>
			</div>
		</div>
	)
}

export default Template;
