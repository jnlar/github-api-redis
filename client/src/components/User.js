import React from 'react';
import Template from './Template';

const User = (data) => {
	return (
		<div className="userData">
			{data.userData && Object.keys(data).map(keyName => {
				return <Template key={keyName} data={data}></Template>
			})}
		</div>
	)
};

export default User;
