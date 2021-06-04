import {Fragment} from 'react';

const User = (props) => {
    return (<div className="userData">
        {
            props.userData && Object.keys(props.userData).map(keyName => {
                return <Fragment key={keyName}>
                    <h2>{keyName}:</h2><p>{props.userData[keyName]}</p>
                </Fragment>
            })
        }
    </div>);
};

export default User;