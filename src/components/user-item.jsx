import React from 'react';
import PropTypes from 'prop-types';

export const UserItem = ({ user }) => {
    return <>
    
    <tr key={user.id}>
        <td>{user.FirstName}</td>
        <td>{user.LastName}</td>
        <td>{user.logIn}</td>
        <td>{user.Age}</td>
    </tr>
    </>

}

UserItem.propTypes = {
    user: PropTypes.shape({
        FirstName: PropTypes.string.isRequired,
        LastName: PropTypes.string.isRequired,
        logIn: PropTypes.string.isRequired,
        Age: PropTypes.number.isRequired,
    }).isRequired,
}

