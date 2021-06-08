import React from 'react';
import Template from './Template';
import Spinner from './Spinner';

const User = ({userData, isLoading}) => {
	return (
		<div className="userData">
			{
				!isLoading ? (userData && <Template data={userData}></Template>) : <Spinner />
			}
		</div>
	)
};

export default User;
