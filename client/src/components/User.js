import React from 'react';
import Template from './Template';
import PropTypes from 'prop-types';
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

/* TODO:
 * can we pass in isLoading as prop and do ternary operation? 
 * at the moment when we pass isLoading as a prop it returns undefined  
*/
User.propTypes = {
	isLoading: PropTypes.bool
}

export default User;
