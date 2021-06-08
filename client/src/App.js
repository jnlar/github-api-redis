import React, { useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import User from "./components/User";
import About from "./components/About";
import Error from "./components/Error";
import {
	Paper,
	Tabs,
	Tab,
	Grid
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect } from "react-router-dom";
import './index.scss';
import useStyles from './Style';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [value, setValue] = React.useState(0);
	const classes = useStyles();
  
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
  

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
		<Router>
			<Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label={<NavLink className={classes.aTag} to="/">Home</NavLink>} />
        <Tab label={<NavLink className={classes.aTag} to="/about">About</NavLink>} />
      </Tabs>
    </Paper>
		  <Switch>
				<Route exact path="/">
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center">
						<Header />
						<Form onSubmit={onSubmitHandler}/>
						<User userData={userInfo} isLoading={isLoading} />
					</Grid>
			</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/error">
					<Error />
				</Route>
				<Redirect to="/error"></Redirect>
		  </Switch>
	  </Router>
	);
};

export default App;
