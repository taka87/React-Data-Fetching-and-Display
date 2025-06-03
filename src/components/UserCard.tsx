// Import React (needed for JSX and React.FC type)
import React from 'react';

// Import Link from react-router-dom to enable navigation between routes
import { Link } from 'react-router-dom';

// Define the shape of a single User object
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the props that this component will receive
interface Props {
  user: User;
}

// Define a functional component called UserCard
// It takes a `user` object as a prop and returns a <tr> row with user info
export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </td>
      <td>{user.email}</td>
    </tr>
  );
};