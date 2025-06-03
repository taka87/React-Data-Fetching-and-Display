import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Hello, React + TypeScript!</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
