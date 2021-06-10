import React, { useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import User from "./components/User";
import About from "./components/About";
import Error from "./components/Error";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { Paper, Tabs, Tab, Grid, BottomNavigation } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import './index.scss';
import useStyles from './Style';

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#f7f7f7',
		}
	},
})

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
		let user = event.target.githubUsername.value.toLowerCase();

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
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Tabs
					value={value}
					onChange={handleChange}
					className={classes.tabs}
					indicatorColor="primary"
					textColor="primary"
					centered>
					<Tab className={classes.tab} label={<NavLink className={classes.aTag} to="/">App</NavLink>} />
					<Tab className={classes.tab} label={<NavLink className={classes.aTag} to="/about">About</NavLink>} />
				</Tabs>
				<Switch>
					<Route exact path="/">
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							justify="center">
							<Paper className={classes.paper}>
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
							</Paper>
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
		</MuiThemeProvider>
	);
};

export default App;
