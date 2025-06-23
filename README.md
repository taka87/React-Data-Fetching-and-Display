# User List App – React + TypeScript

This is a simple React + TypeScript app that fetches a list of users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and displays them. The app includes loading and error states, basic routing, and pagination. 

## Features

- Fetches users from a public API
- Displays user list in a table with pagination (10 records total, displayed as 3 per page, with Prev/Next buttons; the last page shows the remaining 1 record)
- Each user links to a detailed view page
- Loading and error message components
- Built with functional components and React hooks
- Written entirely in TypeScript
- The project includes extensive inline comments to help readers understand the implemented functionalities step by step.

🛠 Tech Stack
- React – UI Library
- TypeScript – Type-safe JavaScript
- React Router DOM – Client-side routing
- Fetch API – Data fetching

## 🚀 Getting Started

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/taka87/React-Data-Fetching-and-Display.git
cd React-Data-Fetching-and-Display # or the folder name you chose when cloning
    Note: If you renamed the folder while cloning, replace the path accordingly.

npm install
npm start

```
📬 Feedback
Feel free to open contact me if need any software ideas on Contact form: https://gotvarska-kniga.vercel.app/contact-info
2. To create an optimized production build:

```bash
npm run build

To preview the build locally:
npm install -g serve
serve -s build

Then open your browser at:
http://localhost:3000
    Note: The local development server address may vary. Please check your terminal 
    output to confirm the correct localhost URL.

```
