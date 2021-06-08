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

// iterate though array, where each item in array is object
// create new object for n items in sliced array. n = max (3)
const filterRepoData = (data) => {
	let newObj = {}

	for (let i = 0; i < data.length; i++) {
		newObj['repo_name_' + i] = `${data[i].name}`;
		newObj['repo_desc_' + i] = `${data[i].description}`;
		newObj['repo_url_' + i] = `${data[i].html_url}`;
		newObj['repo_stars_ ' + i] = `${data[i].startgazers_count}`;
		newObj['repo_forks_ ' + i] = `${data[i].forks_count}`;
	}

	return newObj;
}

module.exports = {filterUserData, filterRepoData};
