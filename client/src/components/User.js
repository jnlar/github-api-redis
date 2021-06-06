import React from 'react';
import Template from './Template';
import PropTypes from 'prop-types';

const User = (data) => {
	return (
		<div className="userData">
			{data.userData && Object.keys(data).map(keyName => {
				return <Template key={keyName} data={data}></Template>;
			})}
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
