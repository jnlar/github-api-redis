import React, { useState, /*useEffect*/ } from 'react';
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default App = () => {
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
			<Header />
			<form onSubmit={onSubmitHandler}>
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