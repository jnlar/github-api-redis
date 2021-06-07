const filterUserData = (data) => {
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

const filterRepoData = (data) => {
	data = {
		"0_name": `${data[0].name}`,
		"0_description": `${data[0].description}`,
		"0_html_url": `${data[0].html_url}`,
		"0_star_count": `${data[0].startgazers_count}`,
		"0_forks_count": `${data[0].forks_count}`,
		"1_name": `${data[1].name}`,
		"1_description": `${data[1].description}`,
		"1_html_url": `${data[1].html_url}`,
		"1_star_count": `${data[1].startgazers_count}`,
		"1_forks_count": `${data[1].forks_count}`,
		"2_name": `${data[2].name}`,
		"2_description": `${data[2].description}`,
		"2_html_url": `${data[2].html_url}`,
		"2_star_count": `${data[2].startgazers_count}`,
		"2_forks_count": `${data[2].forks_count}`,
	}

	return data;
}

module.exports = {filterUserData, filterRepoData};
