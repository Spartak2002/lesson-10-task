import PropTypes from 'prop-types';
import {UserItem} from './user-item';


export const UserList = ({ users }) => {
    return <>
        <h2>User List</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <UserItem key={user.id} user={user} />)
                }
            </tbody>
        </table>
    </>

}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            FirstName: PropTypes.string.isRequired,
            LastName: PropTypes.string.isRequired,
            logIn: PropTypes.string.isRequired,
            Age: PropTypes.number.isRequired,
        })
    ).isRequired,
}

