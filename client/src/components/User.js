import React, { Fragment } from 'react';
import Template from './Template';
import Spinner from './Spinner';

const User = ({userData, isLoading}) => {
	return (
		<Fragment>
			{
				!isLoading ? (userData && <Template data={userData}></Template>) : <Spinner />
			}
		</Fragment>
	)
};

export default User;
