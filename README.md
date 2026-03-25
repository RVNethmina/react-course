# React Full Course

This repository contains the projects and code from a comprehensive React course. It includes both frontend and backend projects, demonstrating various aspects of modern web development using React.

## Projects Overview

*   **`chatbot-project`**: A simple React application built with Vite and JavaScript. It serves as an introductory project, showcasing fundamental React concepts, component structure, and state management.
*   **`ecommerce-project`**: A robust E-commerce frontend built using React, Vite, and **TypeScript**. It includes routing (React Router), testing configurations (Vitest & Testing Library), and API integration (using Axios).
*   **`ecommerce-backend`**: The essential backend API for the E-commerce project, built with Node.js and Express. It utilizes a SQLite database to store products, users, and orders.
*   **`old-projects`**: A directory containing miscellaneous or older projects developed earlier in the course.

## Getting Started

To run the full E-Commerce application, you'll need to start both the backend and the frontend on your local machine.

### 1. Running the Backend (`ecommerce-backend`)

1. Navigate to the backend directory:
   ```bash
   cd ecommerce-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Running the Frontend (`ecommerce-project`)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd ecommerce-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend should now be running locally (typically on `http://localhost:5173`) and will automatically communicate with your running backend.

### 3. Running the Chatbot Project

1. Navigate to the chatbot directory:
   ```bash
   cd chatbot-project
   ```
2. Install dependencies and start the app:
   ```bash
   npm install
   npm run dev
   ```

## Technologies Used
* **Frontend:** React (v18 / v19), TypeScript, Vite, React Router DOM
* **Backend:** Node.js, Express, Sequelize, SQLite
* **Testing:** Vitest, Testing Library
* **Styling/Linting:** ESLint
