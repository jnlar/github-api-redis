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
		newObj[i + '_repo_name'] = `${data[i].name}`;
		newObj[i + '_repo_desc'] = `${data[i].description}`;
		newObj[i + '_repo_url'] = `${data[i].html_url}`;
		newObj[i + '_repo_stars'] = `${data[i].startgazers_count}`;
		newObj[i + '_repo_forks'] = `${data[i].forks_count}`;
	}

	return newObj;
}

module.exports = {filterUserData, filterRepoData};
