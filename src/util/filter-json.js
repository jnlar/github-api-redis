const filterData = (data) => {
	data = {
		'id': `${data.id}`,
		'login': `${data.login}`,
		'public_repos': `${data.public_repos}`,
		'repos_url': `${data.repos_url}`,
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

module.exports = filterData;
