import React from 'react';
import { useState, /*useEffect*/ } from 'react';
import Spinner from "./Spinner/Spinner";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (event.target.githubUsername.value.trim() !== "") {
			document.getElementById("results").innerHTML = "";
			setIsLoading(true);

			fetch(`/get/?username=${event.target.githubUsername.value}`)
			.then(async res => {
				let data = await res.text();
				console.log(data);
				setIsLoading(false);
				document.getElementById("results").innerHTML = data;
			})
			.catch(err => console.log(err));

		} else {
			window.alert("Please enter a github username.");
		}
	};

	return (
		<div className="App">
			<form onSubmit={onSubmitHandler}>
				<legend>Github API</legend>
				<fieldset>
					<label htmlFor="githubUsername">Github Username:</label>
					<input
						type="text"
						id="githubUsername"
						name="githubUsername"
						className="githubUsername"
					/>
					<input type="submit" />
				</fieldset>
			</form>
			{isLoading && <Spinner />}
		</div>
	);
};

export default App;
