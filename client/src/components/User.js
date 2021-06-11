import React, { Fragment } from "react";
import Template from "./Template";
import {CircularProgress} from "@material-ui/core";

const User = ({userData, isLoading}) => {
	return (
		<Fragment>
			{
				!isLoading ? (userData && <Template data={userData}></Template>) : <CircularProgress />
			}
		</Fragment>
	)
};

export default User;
