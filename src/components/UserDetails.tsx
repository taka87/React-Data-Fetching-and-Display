// Import useParams from react-router-dom to access dynamic URL parameters (like /users/:id)
import { useParams } from "react-router-dom";

// Import hooks from React to manage state and side effects
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

// Define the shape of a User object for type safety
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Main component responsible for rendering user details based on URL parameter
export default function UserDetails() {
  // Extract the `id` parameter from the URL using useParams()  
  const { id } = useParams();

  // Declare a piece of state to store the fetched user data
  const [user, setUser] = useState<User | null>(null);

  // Side effect to fetch user data when component mounts or when `id` changes
  useEffect(() => {
    // Fetch user data from the API using the dynamic id
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())      // Parse the response as JSON
      .then((data) => setUser(data)); // Update the `user` state with the fetched data
  }, [id]); // Dependency array: re-run this effect when `id` changes

  if (!user) return <p>Loading...</p>;

  // Render user details once the data has been successfully fetched
  return (
    <div className="user-card">
        <h1>{user.name}</h1>
        <div className="user-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
        </div>
        <p>
            <Link to="/" className="back-button">← Back to User List</Link>
        </p>
    </div>
  );
}