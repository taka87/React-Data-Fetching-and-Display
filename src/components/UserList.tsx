// ✅ Importing necessary React hooks for state and side effects
import React, { useEffect, useState } from 'react';

// ✅ Importing modular components for separation of concerns
import { UserCard } from './UserCard';
import { Loading } from './Loading';
import { ErrorMessage } from './ErrorMessage';

// ✅ Enables linking to other routes (e.g., to user details page)
import { Link } from 'react-router-dom';

// ✅ Type definition for a user object
type User = {
  id: number;
  name: string;
  email: string;
};

function UserList() {
  // ✅ Stores the list of fetched users
  const [users, setUsers] = useState<User[]>([]);

  // ✅ Tracks loading state while fetching data
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // ✅ Tracks any fetch error to display a message
  const [error, setError] = useState<string | null>(null);

  // ✅ Stores the search input from user for filtering by name
  const [searchTerm, setSearchTerm] = useState<string>(''); // 👈 добавяме стейт за търсене

  // ✅ Sorting logic: allows sorting by 'id' or 'name' in ascending or descending order
  const [sortField, setSortField] = useState<'id' | 'name'>('id'); // 👈 поле за сортиране
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // 👈 посока на сортиране

  // ✅ Pagination: current page & number of users per page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 3; // 👈 показваме по 3 потребителя на страница  

  useEffect(() => {
    setCurrentPage(1);
    // ✅ Fetches data on component mount only once
    // fetch('https://jsonplaceholder.typicode.com/404-users') // test for Error Handling with Broken link
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network error');
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 1500); // 1.5 секунди изкуствено забавяне
      })      
      .catch(err => {
        if (err.message && err.message.includes('Failed to fetch')) {
          setError('Network error, please check your connection.');
        } else {
          setError('Error loading users.');
        }
        setIsLoading(false);
      });
    }, [searchTerm]);

  // ✅ Displays loading component while fetching data
  if (isLoading) return <Loading />;
  // ✅ Displays error component if data fetch fails
  if (error) return <ErrorMessage message={error} />;

  //userFilter logyc
  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // ✅ Sorts filtered users based on selected field and order
    .sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      if (typeof fieldA === 'number' && typeof fieldB === 'number') {
        return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA;
      }
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortOrder === 'asc'
          ? fieldA.localeCompare(fieldB)
          : fieldB.localeCompare(fieldA);
      }
      return 0;
    });

// ✅ Pagination: calculates visible users based on current page
const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;

const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  return (
  <div className="container">
    <h2>Users:</h2>

      {/* ✅ Input field for searching users by name */}
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="input-search"
    />

      {/* ✅ Sorting controls: sort by ID or Name, toggle order */}
    <div className="buttons-group">
      <button
        onClick={() => setSortField('id')}
        className={sortField === 'id' ? 'active' : ''}
      >
        Sort by ID {sortField === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
      </button>
      <button
        onClick={() => setSortField('name')}
        className={sortField === 'name' ? 'active' : ''}
      >
        Sort by Name {sortField === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
      </button>
      <button onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}>
        Toggle Order
      </button>
    </div>

    {/* ✅ Table structure for displaying user data */}
    <table>
      <thead>
        <tr>
          <th className="id-column">ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </tbody>
    </table>


        {/* ✅ Pagination controls: Previous, numbered pages, Next */}
    <div className="pagination-controls">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  </div>
    
  );
}

// ✅ Exporting the component for use in routing or higher-level containers
export default UserList;