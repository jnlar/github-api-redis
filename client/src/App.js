import React, { useState, } from 'react';
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Form from "./components/Form";
import User from "./components/User";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const onSubmitHandler = (event) => {
		event.preventDefault();
		let user = event.target.githubUsername.value;

		if (user.trim() !== "") {
			setIsLoading(true);

			fetch(`/get/?username=${user}`)
			.then(async res => {
				let data = await res.json();
				setUserInfo(data);
				setIsLoading(false);
			})
			.catch(err => console.log(err));

		} else {
			window.alert("Please enter a github username.");
		}
	};

	return (
		<div className="App">
			<Header />
			<Form onSubmit={onSubmitHandler}/>
			{isLoading && <Spinner />}
			<User userData={userInfo} />
		</div>
	);
};

export default App;
