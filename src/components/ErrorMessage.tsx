// Import the React library to use JSX and React types
import React from 'react';

// Define a TypeScript interface for the component's props
// 'message' will be the error message to display
interface ErrorProps {
  message: string;
}

// Define the ErrorMessage component as a functional React component
// It takes a single prop: 'message', which is a string
export const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return (
    // This div displays the error message in red, with padding
    <div style={{ color: 'red', padding: '1rem' }}>
      <strong>Error:</strong> {message}
    </div>
  );
};