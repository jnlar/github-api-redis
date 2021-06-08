import React, { useState, } from 'react';
import Header from "./components/Header";
//import Spinner from "./components/Spinner";
import Form from "./components/Form";
import User from "./components/User";
import './index.scss';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		let user = event.target.githubUsername.value;

		if (user.trim() !== "") {
			try {
				setIsLoading(true);

				const response = await fetch(`/api/user/?username=${user}`)
				const data = await response.json()

				setUserInfo(data);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		} else {
			window.alert("Please enter a github username.");
		}
	}

	return (
		<div className="container">
			<Header />
			<Form onSubmit={onSubmitHandler}/>
			<User userData={userInfo} isLoading={isLoading} />
		</div>
	);
};

export default App;
