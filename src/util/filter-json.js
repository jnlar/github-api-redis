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
// create new object n times for n objects in sliced array. n = max (3)
const filterRepoData = (data) => {
	let newData = {}

	for (let i = 0; i < data.length; i++) {
		newData[i + '_repo_name'] = `${data[i].name}`;
		newData[i + '_repo_desc'] = `${data[i].description}`;
		newData[i + '_repo_url'] = `${data[i].html_url}`;
		newData[i + '_repo_stars'] = `${data[i].startgazers_count}`;
		newData[i + '_repo_forks'] = `${data[i].forks_count}`;
	}

	return newData;
}

module.exports = {filterUserData, filterRepoData};
