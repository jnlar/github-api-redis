const filterCacheData = (data) => {
	data = {
		'login': `${data.login}`,
		'public_repos': `${data.public_repos}`,
		'bio': `${data.bio}`,
		'followers': `${data.followers}`,
		'following': `${data.following}`,
		'company': `${data.company}`,
		'location': `${data.location}`,
		'html_url': `${data.html_url}`,
		'email': `${data.email}`
	}

	return data;
}

const formatData = (data) => {
	let format = `
		<p id="login">user: ${data.login}</p>
		<p id="bio">bio: ${data.bio}</p>
		<p id="repos">repos: ${data.public_repos}</p>
		<p id="followers">followers: ${data.followers}</p>
		<p id="following">following: ${data.following}</p>
		<p id="company">company: ${data.company}</p>
		<p id="location">location: ${data.location}</p>
		<p id="url">github url: ${data.html_url}</p>
		<p id="email">email: ${data.email}</p>`;

	return format;
}

const returnFormatData = (data) => {
	return formatData(filterCacheData(data));
}

module.exports = { filterCacheData, returnFormatData }
