MERN Login System with Vite and Reset Password Feature
This repository contains two MERN stack projects focused on Login, Registration, and Password Reset functionalities, integrated with Vite for the client-side and with a Node.js backend for email sending and database handling.

Project 1: React + Vite Login/Register System
This project is a simple setup using React and Vite to build a login and registration system. It includes Fast Refresh for a smoother development experience.

Technologies Used:
React (Frontend)
Vite (Bundler with Fast Refresh)
ESLint (Code linting)
Setup Instructions:
Clone the repository:
git clone https://github.com/your-repo/mern-login-register.git
cd mern-login-register
Install dependencies:
cd frontend
npm install
Configure your environment: Create a .env file in the frontend folder with:
REACT_APP_SERVER_DOMAIN='<server_domain>' # e.g., 'http://localhost:8080'
Run the development server:
npm run dev

Project 2: MERN Login System with Password Reset
This project expands on the first by adding a password reset feature, integrating Node.js for sending emails and handling authentication, including JWT tokens and MongoDB for storage.

Technologies Used:
React (Frontend)
Node.js (Backend for sending emails and authentication)
MongoDB Atlas (Database)
Setup Instructions:
Clone the repository:
git clone https://github.com/your-repo/mern-login-app-with-reset-email.git
cd mern-login-app-with-reset-email
Configure environment variables:

In the client folder, create a .env file with:
REACT_APP_SERVER_DOMAIN='<server_domain>' # e.g., 'http://localhost:8080'
In the server folder, create a config.js file with:
export default {
    JWT_SECRET : "<secret>",
    EMAIL: "your-email@example.com", // test email & password
    PASSWORD : "your-email-password",
    ATLAS_URI: "<MONGODB_ATLAS_URI>"
}

Install dependencies for both client and server:
cd client
npm install
cd ../server
npm install

Run the backend and frontend:

Backend:
cd server
npm run dev

Frontend:
cd client
npm start

Features:
User Authentication: Register, login, and profile management.
Password Reset: Reset password via email.
JWT Authentication: Secure user login with tokens.
Email Integration: Send emails (for password reset) from the backend.
