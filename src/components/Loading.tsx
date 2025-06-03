// Import the React library to use JSX and React-specific types
import React from 'react';

// Define a functional component named Loading using the React.FC type
export const Loading: React.FC = () => {
  return (
    // A simple div that shows the "Loading..." message
    // It has some inline styles for spacing and center alignment    
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      Loading...
    </div>
  );
};